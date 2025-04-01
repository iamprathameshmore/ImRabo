'use client';

import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash, PlusCircle, Link, Cloud, Server, Puzzle, DatabaseIcon, Eye, EyeClosedIcon, } from "lucide-react";
import AddIntegrationModal from "@/components/custom/dashboard/addIntegrationModel";
import EditIntegrationModal from "@/components/custom/dashboard/editIntegrationModal";


interface Integration {
  _id: string;
  integrationName: string;
  apiKey: string;
  type: string;
}

export default function IntegrationPage() {
  const [isApiKeyVisible, setApiKeyVisible] = useState(false);


  const typeIcons: Record<string, JSX.Element> = {
    API: <Cloud className="w-10 h-10 text-blue-500" />,
    Webhook: <Link className="w-10 h-10 text-green-500" />,
    MQTT: <Server className="w-10 h-10 text-purple-500" />,
    iPaaS: <DatabaseIcon className="w-10 h-10 text-orange-500" />,
    Other: <Puzzle className="w-10 h-10 text-gray-500" />,
  };
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);

  useEffect(() => {
    fetchIntegrations();
  }, []);

  const fetchIntegrations = async () => {
    try {
      const response = await fetch("https://imrabo.onrender.com/integration/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch integrations");
      const data = await response.json();
      setIntegrations(data.integrations);
    } catch (error) {
      console.error("Error fetching integrations:", error);
    }
  };

  const handleDeleteIntegration = async () => {
    try {
      if (!selectedIntegration) return;
      const response = await fetch(`https://imrabo.onrender.com/integration/${selectedIntegration._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      if (!response.ok) throw new Error("Failed to delete integration");
      await fetchIntegrations();
      setModalType(null);
    } catch (error) {
      console.error("Error deleting integration:", error);
    }
  };

  return (
    <div className="space-y-6 md:p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Integration Management</h1>
        <p className="text-gray-600">Manage and configure your integrations.</p>
      </div>

      <Button onClick={() => setModalType("add")} className="flex items-center gap-2">
        <PlusCircle className="w-4 h-4" /> Add Integration
      </Button>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <Card
            key={integration._id}
            className="relative p-4 border-zinc-100 rounded-xl shadow-md hover:shadow-lg transition bg-white"
          >
            {/* Top Right Actions */}
            <div className="absolute top-3 right-3 flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-green-100"
                onClick={() => { setSelectedIntegration(integration); setModalType("edit"); }}
              >
                <Pencil className="w-5 h-5 text-green-600" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-red-100"
                onClick={() => { setSelectedIntegration(integration); setModalType("delete"); }}
              >
                <Trash className="w-5 h-5 text-red-600" />
              </Button>
            </div>

            {/* Card Content */}
            <CardContent className="flex items-center gap-4">
              {/* Icon on the Left */}
              <div className="w-12 h-12 flex justify-center items-center bg-gray-100 rounded-lg">
                {typeIcons[integration.type] || <Puzzle className="w-8 h-8 text-gray-500" />}
              </div>

              {/* Integration Name & Type */}
              <div>
                <h3 className="font-semibold text-lg">{integration.integrationName}</h3>
                <span className="text-sm text-gray-600">{integration.type}</span>
              </div>
            </CardContent>

            {/* Footer: API Key Display */}
            <CardFooter className="mt-1 flex justify-between items-center">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md truncate max-w-[70%]">
                {integration.apiKey && isApiKeyVisible ? (
                  integration.apiKey
                ) : (
                  <span className="obs">
                    {integration.apiKey ? `${integration.apiKey.slice(0, 10)}...` : "No API Key"}
                  </span>
                )}
              </span>

              {/* Eye Icon to toggle visibility */}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setApiKeyVisible(!isApiKeyVisible)}
                className="text-gray-500 hover:bg-gray-100 p-1"
              >
                {isApiKeyVisible ? (
                  <EyeClosedIcon className="w-4 h-4 text-gray-500" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-500" />
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {modalType === "add" && (
        <AddIntegrationModal onClose={() => setModalType(null)} onSuccess={fetchIntegrations} />
      )}

      {modalType === "edit" && selectedIntegration && (
        <EditIntegrationModal integration={selectedIntegration} onClose={() => setModalType(null)} onSuccess={fetchIntegrations} />
      )}

      {modalType === "delete" && selectedIntegration && (
        <Dialog open onOpenChange={() => setModalType(null)}>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <p>Are you sure you want to delete <b>{selectedIntegration.integrationName}</b>?</p>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setModalType(null)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDeleteIntegration}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

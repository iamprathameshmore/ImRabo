'use client';

import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash, PlusCircle, Link, Cloud, Server, Puzzle, DatabaseIcon, Eye, EyeClosedIcon } from "lucide-react";
import AddIntegrationModal from "@/components/custom/dashboard/addIntegrationModel";
import EditIntegrationModal from "@/components/custom/dashboard/editIntegrationModal";

interface Integration {
  _id: string;
  integrationName: string;
  apiKey: string;
  type: string;
}

export default function IntegrationPage() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);

  const typeIcons: Record<string, JSX.Element> = {
    API: <Cloud className="w-10 h-10 text-blue-500" />,
    Webhook: <Link className="w-10 h-10 text-green-500" />,
    MQTT: <Server className="w-10 h-10 text-purple-500" />,
    iPaaS: <DatabaseIcon className="w-10 h-10 text-orange-500" />,
    Other: <Puzzle className="w-10 h-10 text-gray-500" />,
  };

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

  const openApiKeyModal = (integration: Integration) => {
    setSelectedIntegration(integration);
    setModalType("viewApiKey");
  };

  return (
    <div className="space-y-6 md:p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Integration Management</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Manage and configure your integrations with external services.</p>
        </div>

        <Button onClick={() => setModalType("add")} className="flex items-center gap-2 w-full sm:w-36 ">
          <PlusCircle className="w-4 h-4" /> Add Integration
        </Button>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <Card
            key={integration._id}
            className="relative hover:shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-950 transition cursor-pointer bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800"
          >
            {/* Top Right Actions */}
            <div className="absolute top-3 right-3 flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-green-100 dark:hover:bg-zinc-700 p-1 rounded-full"
                onClick={() => { setSelectedIntegration(integration); setModalType("edit"); }}
              >
                <Pencil className="w-5 h-5 text-green-600 dark:text-green-400" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-red-100 dark:hover:bg-zinc-700 p-1 rounded-full"
                onClick={() => { setSelectedIntegration(integration); setModalType("delete"); }}
              >
                <Trash className="w-5 h-5 text-red-600 dark:text-red-400" />
              </Button>
            </div>

            {/* Card Content */}
            <CardContent className="flex items-center gap-4">
              {/* Icon on the Left */}
              <div className="w-12 h-12 flex justify-center items-center bg-zinc-100 dark:bg-zinc-700 rounded-lg shadow-md">
                {typeIcons[integration.type] || <Puzzle className="w-8 h-8 text-gray-500 dark:text-zinc-400" />}
              </div>

              {/* Integration Name & Type */}
              <div>
                <h3 className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">{integration.integrationName}</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{integration.type}</span>
              </div>
            </CardContent>

            {/* Footer: API Key Display */}
            <CardFooter className="mt-3 flex justify-between items-center">
              <span  className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-3 py-1 rounded-md truncate max-w-[70%]">
                {integration.apiKey ? `${integration.apiKey.slice(0, 10)}...` : "No API Key"}
              </span>

              {/* Eye Icon to open API Key modal */}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => openApiKeyModal(integration)}
                className="text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-1 rounded-full"
              >
                <Eye className="w-4 h-4 text-zinc-500" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modals */}
      {modalType === "add" && (
        <AddIntegrationModal onClose={() => setModalType(null)} onSuccess={fetchIntegrations} />
      )}

      {modalType === "edit" && selectedIntegration && (
        <EditIntegrationModal integration={selectedIntegration} onClose={() => setModalType(null)} onSuccess={fetchIntegrations} />
      )}

      {modalType === "delete" && selectedIntegration && (
        <Dialog open onOpenChange={() => setModalType(null)}>
          <DialogContent className="sm:max-w-[400px] dark:text-white text-zinc-900 transition cursor-pointer bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800">
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

      {/* Modal for API Key */}
      {modalType === "viewApiKey" && selectedIntegration && (
        <Dialog open onOpenChange={() => setModalType(null)}>
          <DialogContent className="sm:max-w-[500px] dark:text-white text-zinc-900 transition cursor-pointer bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800">
            <DialogHeader>
              <DialogTitle >API Key Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-xl text-zinc-800 dark:text-zinc-100">{selectedIntegration.integrationName}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{selectedIntegration.type}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">API Key</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{selectedIntegration.apiKey}</p>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setModalType(null)} >Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

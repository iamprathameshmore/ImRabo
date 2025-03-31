'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IntegrationModal } from "@/components/custom/dashboard/IntegrationModal";
import { Pencil, Trash, Eye, PlusCircle } from "lucide-react";

interface Integration {
  _id: string;
  integrationName: string;
  apiKey: string;
  type: string;
}

export default function IntegrationGrid() {
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

  const handleSaveIntegration = async (integration: Integration) => {
    try {
      const url = integration._id
        ? `https://imrabo.onrender.com/integration/${integration._id}`
        : "https://imrabo.onrender.com/integration";

      const method = integration._id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(integration),
      });

      if (!response.ok) throw new Error(`Failed to ${integration._id ? "update" : "save"} integration`);
      await fetchIntegrations();
      setModalType(null);
    } catch (error) {
      console.error(`Error ${integration._id ? "updating" : "saving"} integration:`, error);
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <Card key={integration._id} className="p-4 border shadow-sm hover:shadow-md transition">
            <CardHeader>
              <h3 className="font-medium">{integration.integrationName}</h3>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              <span className="font-semibold">Type:</span> {integration.type}
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {integration.apiKey ? integration.apiKey.replace(/.(?=.{4})/g, "*") : "No API Key"}
              </span>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" onClick={() => { setSelectedIntegration(integration); setModalType("edit"); }}>
                  <Pencil className="w-4 h-4 text-green-500" />
                </Button>
                <Button size="icon" variant="ghost" onClick={() => { setSelectedIntegration(integration); setModalType("delete"); }}>
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {modalType && (modalType === "add" || modalType === "edit") && (
        <IntegrationModal
          isEdit={modalType === "edit"}
          initialData={modalType === "edit" ? selectedIntegration : undefined}
          onSave={handleSaveIntegration}
          onClose={() => setModalType(null)}
        />
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IntegrationModal } from "@/components/custom/dashboard/IntegrationModal";
import { Pencil, Trash, Eye, PlusCircle, Link } from "lucide-react";

export default function IntegrationGrid() {
  const [integrations, setIntegrations] = useState([
    { name: "Google Home", icon: "🏠", apiKey: "1234-5678-9101-1121", description: "Syncs with smart devices" },
  ]);

  const platformIntegrations = [
    { name: "Amazon Alexa", icon: "🎤", apiKey: "N/A", description: "Voice-controlled smart home" },
    { name: "Apple HomeKit", icon: "🍏", apiKey: "N/A", description: "Apple ecosystem integration" },
  ];

  const [selectedIntegration, setSelectedIntegration] = useState<any>(null);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | "view" | null>(null);

  const handleSaveIntegration = (integration: any) => {
    setIntegrations((prev) => {
      const existingIndex = prev.findIndex((i) => i.name === integration.name);
      if (existingIndex !== -1) {
        const updatedIntegrations = [...prev];
        updatedIntegrations[existingIndex] = integration;
        return updatedIntegrations;
      } else {
        return [...prev, integration];
      }
    });
    setModalType(null);
  };

  const handleDeleteIntegration = () => {
    setIntegrations((prev) => prev.filter((i) => i.name !== selectedIntegration?.name));
    setModalType(null);
  };

  return (
    <div className="space-y-6 md:p-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Integration Management</h1>
        <p className="text-gray-600">Manage and configure your integrations.</p>
      </div>

      {/* Your Integrations */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your Integrations</h2>
        <Button onClick={() => setModalType("add")} className="flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Add Integration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration, index) => (
          <Card key={index} className="p-4 border shadow-sm hover:shadow-md transition">
            <CardHeader className="flex items-center gap-3">
              <span className="text-xl">{integration.icon}</span>
              <h3 className="font-medium">{integration.name}</h3>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">{integration.description}</CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {integration.apiKey === "N/A"
                  ? "No API Key Required"
                  : integration.apiKey.replace(/.(?=.{4})/g, "*")}
              </span>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" onClick={() => { setSelectedIntegration(integration); setModalType("view"); }}>
                  <Eye className="w-4 h-4 text-blue-500" />
                </Button>
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

      {/* Platform Integrations */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Platform Integrations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platformIntegrations.map((integration, index) => (
          <Card key={index} className="p-4 border shadow-sm hover:shadow-md transition">
            <CardHeader className="flex items-center gap-3">
              <span className="text-xl">{integration.icon}</span>
              <h3 className="font-medium">{integration.name}</h3>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">{integration.description}</CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Link className="w-4 h-4" /> Connect
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modals */}
      {modalType && (modalType === "add" || modalType === "edit") && (
        <IntegrationModal
          onAdd={handleSaveIntegration}
          initialData={modalType === "edit" ? selectedIntegration : undefined}
          isEdit={modalType === "edit"}
          onClose={() => setModalType(null)}
        />
      )}

      {modalType === "view" && selectedIntegration && (
        <Dialog open onOpenChange={() => setModalType(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Integration Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <p><b>Name:</b> {selectedIntegration.name}</p>
              <p><b>API Key:</b> {selectedIntegration.apiKey}</p>
              <p><b>Description:</b> {selectedIntegration.description}</p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setModalType(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {modalType === "delete" && selectedIntegration && (
        <Dialog open onOpenChange={() => setModalType(null)}>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <p>Are you sure you want to delete <b>{selectedIntegration?.name}</b>?</p>
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IntegrationModal } from "@/components/custom/dashboard/IntegrationModal";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash, Eye, PlusCircle } from "lucide-react";

export default function IntegrationTable() {
  const [integrations, setIntegrations] = useState([
    { name: "Google Home", apiKey: "1234-5678-9101-1121", description: "Syncs with smart devices" },
  ]);

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
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Integration Management</h1>
        <p className="text-gray-600">Manage and configure your third-party integrations.</p>
      </div>

      {/* Actions Section */}
      <div className="flex justify-end items-center mb-4">
        <Button onClick={() => setModalType("add")} className="flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Add Integration
        </Button>
      </div>

      {/* Table Section */}
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableHead className="w-1/3">Integration Name</TableHead>
              <TableHead>API Key</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {integrations.map((integration, index) => (
              <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <TableCell className="font-medium">{integration.name}</TableCell>
                <TableCell>{integration.apiKey.replace(/.(?=.{4})/g, "*")}</TableCell>
                <TableCell>{integration.description}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="icon" variant="ghost" onClick={() => { setSelectedIntegration(integration); setModalType("view"); }}>
                    <Eye className="w-4 h-4 text-blue-500" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => { setSelectedIntegration(integration); setModalType("edit"); }}>
                    <Pencil className="w-4 h-4 text-green-500" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => { setSelectedIntegration(integration); setModalType("delete"); }}>
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add/Edit Integration Modal */}
      {modalType && (modalType === "add" || modalType === "edit") && (
        <IntegrationModal
          onAdd={handleSaveIntegration}
          initialData={modalType === "edit" ? selectedIntegration : undefined}
          isEdit={modalType === "edit"}
          onClose={() => setModalType(null)}
        />
      )}

      {/* View Integration Details Modal */}
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

      {/* Delete Confirmation Modal */}
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

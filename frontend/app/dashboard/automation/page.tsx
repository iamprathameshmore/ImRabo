"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AutomationModal } from "@/components/custom/dashboard/AutomationModal";
import { AutomationDetailModal } from "@/components/custom/dashboard/AutomationDetailModal";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash, Eye, PlusCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function AutomationTable() {
  const [automations, setAutomations] = useState([
    { name: "Lights Automation", enabled: true, rules: "Turn on at 7 PM" },
    { name: "Temperature Control", enabled: false, rules: "Adjust to 22°C at 8 AM" },
  ]);

  const [selectedAutomation, setSelectedAutomation] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleAddAutomation = (automation: any) => {
    setAutomations([...automations, automation]);
    setIsAddOpen(false);
  };

  const handleEditAutomation = (updatedAutomation: any) => {
    setAutomations((prev) =>
      prev.map((item) => (item.name === updatedAutomation.name ? updatedAutomation : item))
    );
    setIsEditOpen(false);
  };

  const handleDeleteAutomation = () => {
    setAutomations((prev) => prev.filter((item) => item.name !== selectedAutomation?.name));
    setIsDeleteOpen(false);
  };

  const handleToggleEnable = (automationName: string) => {
    setAutomations((prev) =>
      prev.map((automation) =>
        automation.name === automationName
          ? { ...automation, enabled: !automation.enabled }
          : automation
      )
    );
  };

  return (
    <div className="space-y-4 md:p-4">
      {/* Header Section */}
      <div className="mb-3">
        <h1 className="text-2xl font-bold">Automation Management</h1>
        <p className="text-gray-600">Manage and control your automation rules for smart devices.</p>
      </div>

      {/* Actions Section */}
      <div className="flex justify-end mb-3">
        <Button onClick={() => setIsAddOpen(true)} className="flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Add Automation
        </Button>
      </div>

      {/* Table Section */}
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableHead className="p-2">Name</TableHead>
              <TableHead className="text-center p-2">Enabled</TableHead>
              <TableHead className="p-2">Rules</TableHead>
              <TableHead className="text-right p-2">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {automations.map((automation, index) => (
              <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <TableCell className="p-2 font-medium">{automation.name}</TableCell>
                <TableCell className="text-center p-2">
                  <Switch
                    checked={automation.enabled}
                    onCheckedChange={() => handleToggleEnable(automation.name)}
                  />
                </TableCell>
                <TableCell className="p-2">{automation.rules}</TableCell>
                <TableCell className="text-right p-2 space-x-2">
                  <Button size="icon" variant="ghost" onClick={() => { setSelectedAutomation(automation); setIsDetailOpen(true); }}>
                    <Eye className="w-4 h-4 text-blue-500" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => { setSelectedAutomation(automation); setIsEditOpen(true); }}>
                    <Pencil className="w-4 h-4 text-green-500" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => { setSelectedAutomation(automation); setIsDeleteOpen(true); }}>
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Detail View Modal */}
      {selectedAutomation && isDetailOpen && (
        <AutomationDetailModal
          automation={selectedAutomation}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
        />
      )}

      {/* Add Automation Modal */}
      {isAddOpen && (
        <AutomationModal
          onAdd={handleAddAutomation}
          isEdit={false}
          onClose={() => setIsAddOpen(false)}
        />
      )}

      {/* Edit Automation Modal */}
      {selectedAutomation && isEditOpen && (
        <AutomationModal
          onAdd={handleEditAutomation}
          initialData={selectedAutomation}
          isEdit={true}
          onClose={() => setIsEditOpen(false)}
        />
      )}

      {/* Delete Confirmation Modal */}
      {selectedAutomation && isDeleteOpen && (
        <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <p>Are you sure you want to delete <b>{selectedAutomation?.name}</b>?</p>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDeleteAutomation}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

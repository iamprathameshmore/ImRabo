"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeviceModal } from "@/components/custom/dashboard/DeviceModal";
import { DeviceDetailModal } from "@/components/custom/dashboard/DeviceDetailModal";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash, Eye, PlusCircle } from "lucide-react";

export default function DeviceTable() {
  const [devices, setDevices] = useState([
    { name: "ESP32 Sensor", ip: "192.168.1.10", status: true, wsUrl: "ws://192.168.1.10:8080" },
  ]);

  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleSaveDevice = (device: any) => {
    setDevices((prev) => {
      const existingIndex = prev.findIndex((d) => d.name === device.name);
      if (existingIndex !== -1) {
        const updatedDevices = [...prev];
        updatedDevices[existingIndex] = device;
        return updatedDevices;
      } else {
        return [...prev, device];
      }
    });
    setIsAddOpen(false);
    setIsEditOpen(false);
  };

  const handleDeleteDevice = () => {
    setDevices((prev) => prev.filter((device) => device.name !== selectedDevice?.name));
    setIsDeleteOpen(false);
    setIsDetailOpen(false);
  };

  return (
    <div className="space-y-6 md:p-6">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Device Management</h1>
        <p className="text-gray-600">Manage and monitor your connected devices.</p>
      </div>

      {/* Actions Section */}
      <div className="flex justify-end items-center mb-4">
        
        <Button onClick={() => setIsAddOpen(true)} className="flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Add Device
        </Button>
      </div>

      {/* Table Section */}
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableHead className="w-1/3">Device Name</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((device, index) => (
              <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <TableCell className="font-medium">{device.name}</TableCell>
                <TableCell>{device.ip}</TableCell>
                <TableCell>{device.status ? "✅" : "❌"}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="icon" variant="ghost" onClick={() => { setSelectedDevice(device); setIsDetailOpen(true); }}>
                    <Eye className="w-4 h-4 text-blue-500" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => { setSelectedDevice(device); setIsEditOpen(true); }}>
                    <Pencil className="w-4 h-4 text-green-500" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => { setSelectedDevice(device); setIsDeleteOpen(true); }}>
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Device Modal */}
      {isAddOpen && (
        <DeviceModal
          onAdd={handleSaveDevice}
          onClose={() => setIsAddOpen(false)}
        />
      )}

      {/* Device Detail Modal */}
      {selectedDevice && isDetailOpen && (
        <DeviceDetailModal
          device={selectedDevice}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          onEdit={() => { setIsDetailOpen(false); setIsEditOpen(true); }}
          onDelete={() => { setIsDetailOpen(false); setIsDeleteOpen(true); }}
        />
      )}

      {/* Edit Device Modal */}
      {selectedDevice && isEditOpen && (
        <DeviceModal
          onAdd={handleSaveDevice}
          initialData={selectedDevice}
          isEdit={true}
          onClose={() => setIsEditOpen(false)}
        />
      )}

      {/* Delete Confirmation Modal */}
      {selectedDevice && isDeleteOpen && (
        <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <p>Are you sure you want to delete <b>{selectedDevice?.name}</b>?</p>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDeleteDevice}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DeviceModal } from "@/components/custom/dashboard/DeviceModal";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash, PlusCircle, Loader2, GitPullRequestClosed, Camera, Lightbulb } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Toaster, toast } from "react-hot-toast";

// Define Device type
interface Device {
  id: string;
  deviceName: string;
  deviceType: string;
  lastUsed?: string;
}

export default function DeviceCards() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ Loading state
  const [saving, setSaving] = useState(false); // ✅ Saving state
  const router = useRouter();

  // Fetch devices from the API
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch("https://imrabo.onrender.com/device", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch devices");

        const data = await response.json();
        setDevices(data.devices);
      } catch (error) {
        console.error("Error fetching devices:", error);
        toast.error("Failed to fetch devices.");
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  // Save or update device
  const handleSaveDevice = async (device: Device) => {
    setSaving(true);
    try {
      const sendData = {
        deviceName: device.deviceName,
        deviceType: device.deviceType,
      };

      const method = selectedDevice ? "PUT" : "POST";
      const response = await fetch(
        `https://imrabo.onrender.com/device${selectedDevice ? `/${selectedDevice.id}` : ""}`,
        {
          method,
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
          },
          body: JSON.stringify(sendData),
        }
      );

      if (!response.ok) throw new Error("Failed to save device");

      const updatedDevice = await response.json();

      // Update UI
      setDevices((prev) =>
        method === "POST" ? [...prev, updatedDevice] : prev.map((d) => (d.id === updatedDevice.id ? updatedDevice : d))
      );

      setIsModalOpen(false);
      setSelectedDevice(null);
      toast.success(`${device.deviceName} has been ${method === "POST" ? "added" : "updated"} successfully!`);
    } catch (error) {
      console.error("Error saving device:", error);
      toast.error("Failed to save the device.");
    } finally {
      setSaving(false);
    }
  };

  // Delete selected device
  const handleDeleteDevice = async () => {
    setSaving(true);
    try {
      const response = await fetch(`https://imrabo.onrender.com/device/${selectedDevice?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete device");

      setDevices((prev) => prev.filter((device) => device.id !== selectedDevice?.id));
      setIsDeleteOpen(false);
      setSelectedDevice(null);
      toast.success(`${selectedDevice?.deviceName} has been deleted successfully!`);
    } catch (error) {
      console.error("Error deleting device:", error);
      toast.error("Failed to delete the device.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 md:p-6 min-h-full">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-2xl font-bold">Device Management</h1>
          <p className="text-gray-600">Manage and monitor your connected devices.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Add Device
        </Button>
      </div>

      {/* Devices Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Card key={index} className="p-4 animate-pulse bg-gray-100">
                <CardHeader>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardFooter className="flex justify-end space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded"></div>
                </CardFooter>
              </Card>
            ))}
        </div>
      ) : devices.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center space-y-4 min-h-full">
          <p className="text-gray-600">No devices found. Start by adding a new device.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {devices.map((device) => (
          <Card
            key={device.id}
            className="p-4 hover:shadow-lg transition cursor-pointer bg-white rounded-lg shadow-md"
            onClick={() => router.push(`/dashboard/devices/${device.deviceName}`)}
          >
            <CardHeader className="flex flex-col items-center text-center">
              {/* Device Icon (based on device type) */}
              {device.deviceType === 'Sensor' ? (
                <GitPullRequestClosed className="w-12 h-12 text-blue-500" />
              ) : device.deviceType === 'Camera' ? (
                <Camera className="w-12 h-12 text-gray-500" />
              ) : (
                <Lightbulb className="w-12 h-12 text-gray-700" />
              )}
              
              <h2 className="text-lg font-semibold mt-2">{device.deviceName}</h2>
              <p className="text-sm text-gray-500">{device.deviceType}</p>
              {device.lastUsed && (
                <p className="text-xs text-gray-400">Last used: {device.lastUsed}</p>
              )}
            </CardHeader>
      
          
          
      
            <CardFooter className="flex justify-end space-x-2 mt-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDevice(device);
                  setIsModalOpen(true);
                }}
              >
                <Pencil className="w-4 h-4 text-green-500" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDevice(device);
                  setIsDeleteOpen(true);
                }}
              >
                <Trash className="w-4 h-4 text-red-500" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      )}

      {/* Device Modal */}
      {isModalOpen && (
        <DeviceModal
          onAdd={handleSaveDevice}
          initialData={selectedDevice}
          isEdit={!!selectedDevice}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedDevice(null);
          }}
        />
      )}

      {/* Confirm Deletion Dialog */}
      {selectedDevice && isDeleteOpen && (
        <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <p>Are you sure you want to delete <b>{selectedDevice.deviceName}</b>?</p>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDeleteDevice}>{saving ? <Loader2 className="animate-spin w-4 h-4" /> : "Delete"}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <Toaster position="top-center" />
    </div>
  );
}

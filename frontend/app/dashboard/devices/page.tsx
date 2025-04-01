"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DeviceModal } from "@/components/custom/dashboard/DeviceModal";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash, PlusCircle, Loader2, GitPullRequestClosed, Camera, Lightbulb, Link2Icon, XCircle, CheckCircle, Link2, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Toaster, toast } from "react-hot-toast";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";

interface Device {
  _id: string;
  deviceName: string;
  deviceType: string;
  lastUsed?: string;
  isActive: boolean;
  lastConnected?: string;
  isTrusted: boolean;
}


const demoDevice = {
  userId: "1234567890",
  deviceName: "ESP32 Dev Board",
  deviceType: "Microcontroller",
  lastUsed: Date.now(),
  isActive: true,
  lastConnected: Date.now(),
  isTrusted: false,
};

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
        `https://imrabo.onrender.com/device${selectedDevice ? `/${selectedDevice._id}` : ""}`,
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
        method === "POST" ? [...prev, updatedDevice] : prev.map((d) => (d._id === updatedDevice._id ? updatedDevice : d))
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
      const response = await fetch(`https://imrabo.onrender.com/device/${selectedDevice?._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete device");

      setDevices((prev) => prev.filter((device) => device._id !== selectedDevice?._id));
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

          {Array(9)
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
           <Card key={device._id} className=" hover:shadow hover:bg-zinc-50 ho transition cursor-pointer bg-white rounded-lg shadow-md border border-zinc-200 dark:border-zinc-500">
           <CardHeader className="flex flex-col items-center text-center">
             <div className="flex justify-between items-center w-full">
               <div className="flex justify-center items-center">
                 <Avatar className="flex justify-center items-center bg-zinc-100 h-12 w-12">
                   <Camera className="w-5 h-5 text-gray-500" />
                 </Avatar>
                 <div className="text-start pl-3.5">
                   
                   <h2 className="text-lg font-semibold">{device.deviceName}</h2>
                   <p className="text-xs text-gray-500">{device.deviceType.toUpperCase()}</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <Link
                 href={`/dashboard/devices/${device._id}`}
                 ><Button size="icon" variant="ghost">
                   <ArrowUpRight className=" text-blue-500" />
                 </Button></Link>
               </div>
             </div>
           </CardHeader>
           <CardFooter className="flex flex-col justify-center items-start gap-1">
             <div className="flex items-center gap-2">
               {device.isActive ? (
                 <CheckCircle className="w-4 h-4 text-green-500" />
               ) : (
                 <XCircle className="w-4 h-4 text-red-500" />
               )}
               <p className="text-sm text-gray-500">Active: {device.isActive ? "Yes" : "No"}</p>
             </div>
             <div className="flex items-center gap-2">
               <Link2 className="w-4 h-4 text-blue-500" />
               <p className="text-sm text-gray-500">Trusted: {device.isTrusted ? "Yes" : "No"}</p>
             </div>
             <p className="text-sm text-gray-400">Last Used: {device.lastUsed}</p>
             <p className="text-sm text-gray-400">Last Connected: {device.lastConnected}</p>
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

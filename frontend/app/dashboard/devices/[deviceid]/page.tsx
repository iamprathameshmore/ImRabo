"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Avatar } from "@radix-ui/react-avatar";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Camera, ArrowUpRight, CheckCircle, XCircle, Link2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use 'next/navigation' for params in the app directory

export default function DeviceDetails() {
  const [isClient, setIsClient] = useState(false); // Used to check if it is client-side
  const [device, setDevice] = useState<any>(null);
  const [readings, setReadings] = useState<any[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  const { deviceid } = useParams(); // Use the deviceid from the URL

  // Set loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (deviceid && isClient) {
      fetchDeviceDetails();
    }
  }, [deviceid, isClient]);

  const fetchDeviceDetails = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`https://imrabo.onrender.com/device/${deviceid}`, {
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.device) {
          setDevice(data.device);
          setReadings(data.device.reading || []);
        } else {
          console.error("Device data is missing or malformed", data);
        }
      } else {
        console.error("Failed to fetch device details");
      }
    } catch (error) {
      console.error("Error fetching device details:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  const fetchDeviceStatus = async (device_id: string) => {
    try {
      const response = await fetch(`https://imrabo.onrender.com/device/${device_id}`, {
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setSelectedDevice(data.data);
    } catch (error) {
      console.error("Error fetching device status:", error);
    }
  };

  if (!isClient || loading || !device) return <div>Loading...</div>;

  return (
    <div className="space-y-4 md:p-4">
      {/* Device Card */}
      {device && (
        <Card className="hover:shadow-lg hover:bg-zinc-50 transition cursor-pointer bg-white rounded-lg shadow-md border border-zinc-200 dark:border-zinc-500 dark:bg-zinc-900">
          <CardHeader className="flex flex-col items-center text-center">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center items-center">
                <Avatar className="flex justify-center items-center bg-zinc-100 dark:bg-zinc-800 h-12 w-12">
                  <Camera className="w-5 h-5 text-gray-500" />
                </Avatar>
                <div className="text-start pl-3.5">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{device.deviceName}</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {device.deviceType ? device.deviceType.toUpperCase() : "Unknown"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <ArrowUpRight className="text-blue-500" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex flex-col justify-center items-start gap-1 p-4">
            <div className="flex items-center gap-2">
              {device.isActive ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <XCircle className="w-4 h-4 text-red-500" />
              )}
              <p className="text-sm text-gray-500 dark:text-gray-400">Active: {device.isActive ? "Yes" : "No"}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-blue-500" />
              <p className="text-sm text-gray-500 dark:text-gray-400">Trusted: {device.isTrusted ? "Yes" : "No"}</p>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500">Last Used: {device.lastUsed}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Last Connected: {device.lastConnected}</p>
            <Button onClick={() => fetchDeviceStatus(device.device_id)} className="mt-4">
              Check Device Status
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Display Readings in a Table */}
      {readings.length > 0 && (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Value</th>
                <th className="px-4 py-2 text-left">Unit</th>
                <th className="px-4 py-2 text-left">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {readings.map((reading, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{reading.type}</td>
                  <td className="px-4 py-2">{reading.value}</td>
                  <td className="px-4 py-2">{reading.unit}</td>
                  <td className="px-4 py-2">{new Date(reading.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Device Logs Dialog */}
      {selectedDevice && (
        <Dialog open={!!selectedDevice} onOpenChange={() => setSelectedDevice(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Device Logs</DialogTitle>
            </DialogHeader>
            <pre>{JSON.stringify(selectedDevice, null, 2)}</pre>
            <DialogFooter>
              <Button onClick={() => setSelectedDevice(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const API_URL = "http://localhost:4213/api/devices"; // Update this with your backend API URL

export default function DeviceTable() {
  const [devices, setDevices] = useState<any[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<any>(null);

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const response = await fetch(`${API_URL}/list`);
      const data = await response.json();
      setDevices(data);
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  };

  const fetchDeviceStatus = async (device_id: string) => {
    try {
      const response = await fetch(`${API_URL}/status/${device_id}`);
      const data = await response.json();
      setSelectedDevice(data);
    } catch (error) {
      console.error("Error fetching device status:", error);
    }
  };

  return (
    <div className="space-y-2 md:p-2">
      <h2 className="text-xl font-bold">ESP32 Devices</h2>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100 dark:bg-zinc-800">
            <TableHead>Device Id</TableHead>
            <TableHead>Last Event</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {devices.length > 0 ? (
            devices.map((device, index) => (
              <TableRow key={index}>
                <TableCell>{device.device_id}</TableCell>
                <TableCell>{device.timestamp ? new Date(device.timestamp).toLocaleString() : "-"}</TableCell>
                <TableCell>
                  <Button onClick={() => fetchDeviceStatus(device.device_id)}>Check Status</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">No Devices Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

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

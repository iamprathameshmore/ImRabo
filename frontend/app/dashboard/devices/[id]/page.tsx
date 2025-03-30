"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash, Eye, CpuIcon } from "lucide-react";

const WEBSOCKET_URL = "ws://your-websocket-url"; // Replace with your WebSocket URL

export default function DeviceTable() {
  const [devices, setDevices] = useState<any[]>([]); // Store devices and their event logs
  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isClient, setIsClient] = useState(false); // To track if the component has mounted

  useEffect(() => {
    // Set the client flag to true after the component mounts
    setIsClient(true);

    // Create a WebSocket connection when the component mounts
    const ws = new WebSocket(WEBSOCKET_URL);

    // Set up WebSocket event listeners
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      console.log("Received event data:", eventData);

      // Update devices with the new event data
      setDevices((prev) => [...prev, eventData]);
    };

    ws.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    setSocket(ws);

    // Clean up WebSocket connection when the component unmounts
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const handleDeleteDevice = () => {
    setDevices((prev) => prev.filter((device) => device.serial !== selectedDevice?.serial));
    setSelectedDevice(null); // Deselect the device after deletion
  };

  if (!isClient) {
    return null; // Don't render anything until the client-side is ready
  }

  return (
    <div className="space-y-2 md:p-2">
      <div className="pb-5 px-2 rounded-md mt-6">
        <h2 className="text-xl font-bold">ESP32 Device</h2>
        <p><b>Serial Number:</b> {selectedDevice?.serial}</p>
        <p><b>IP Address:</b> {selectedDevice?.ip}</p>
        <p><b>Status:</b> {selectedDevice?.status ? "✅ Connected" : "❌ Not Connected"}</p>
        <p><b>Last Event:</b> {selectedDevice ? new Date(selectedDevice.timestamp).toLocaleString() : ''}</p>
      </div>

      {/* Device Table Section */}
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-zinc-800 text-center">
              <TableHead className="text-center">Event Id</TableHead>
              <TableHead>Device Id</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead className="text-center">Response</TableHead>
              <TableHead className="text-center">Error</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.length > 0 ? (
              devices.map((device, index) => (
                <TableRow key={index} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 w-full">
                  <TableCell className="text-center">{device.event_id}</TableCell>
                  <TableCell>{device.device_name}</TableCell>
                  <TableCell>{device.event_type}</TableCell>
                  <TableCell>{device.action_details.method}</TableCell>
                  <TableCell>{new Date(device.timestamp).toLocaleString()}</TableCell>
                  <TableCell className="text-center space-x-2">
                    <Button size="icon" className="text-center" variant="ghost" onClick={() => setSelectedDevice(device)}>
                      <span>Logs</span>
                    </Button>
                  </TableCell>
                  <TableCell className="text-center">{device.error_message || "Na"}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4">No Devices Found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Device Details Dialog */}
      {selectedDevice && (
        <Dialog open={!!selectedDevice} onOpenChange={() => setSelectedDevice(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Event Log Details</DialogTitle>
            </DialogHeader>
            <div className="max-h-[400px] overflow-y-auto p-4 bg-gray-800 text-white">
              <h3 className="text-lg font-semibold">Event Data</h3>
              <pre className="text-sm text-gray-200">{JSON.stringify(selectedDevice.event_data, null, 2)}</pre>
            </div>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setSelectedDevice(null)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Avatar } from "@radix-ui/react-avatar";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Camera, ArrowUpRight, CheckCircle, XCircle, Link2, Pencil, Trash, CircuitBoard } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DeviceDetails() {
  const [isClient, setIsClient] = useState(false);
  const [device, setDevice] = useState<any>(null);
  const [readings, setReadings] = useState<any[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  const { deviceid } = useParams();
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
    setLoading(true);
    try {
      const response = await fetch(`https://imrabo.onrender.com/device/${deviceid}`, {
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
      });


      if (response.ok) {
        const data = await response.json();
        console.log(data)
        if (data && data.device) {
          setDevice(data.device);
          setReadings(data.device.reading?.reverse() || []);
        } else {
          console.error("Device data is missing or malformed", data);
        }
      } else {
        console.error("Failed to fetch device details");
      }
    } catch (error) {
      console.error("Error fetching device details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isClient || loading || !device) return <div>Loading...</div>;

  return (
    <div className="space-y-4 md:p-4">
      <Card className="hover:shadow-lg  hover:bg-zinc-50 transition cursor-pointer bg-zinc-50 rounded-lg shadow-lg border-0 border-zinc-200 dark:border-zinc-500 dark:bg-zinc-900">
        <CardHeader className="flex flex-col items-center text-center">
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center">
              <Avatar className="flex justify-center items-center bg-zinc-100 dark:bg-zinc-800 h-12 w-12 rounded-full">
                <CircuitBoard className="w-5 h-5 text-blue-500" />
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
                <Pencil className="text-blue-500" />
              </Button>
              <Button size="icon" variant="ghost">
                <Trash className="text-blue-500" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
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
          <p className="text-sm text-gray-700 dark:text-gray-500">Last Used: {device.lastUsed}</p>
          <p className="text-sm text-gray-700 dark:text-gray-500">Create At: {device['createAt']}</p>
        </CardContent>

        <CardFooter className="flex-col justify-center items-start">

          <p className="text-sm text-gray-700 dark:text-gray-500">API: <span className="dark:bg-zinc-700 dark:text-white px-2 py-0.5 bg-zinc-300 text-black mx-2 rounded-md">{device.apiURL}</span></p>
          <p className="text-sm text-gray-700 dark:text-gray-500">WebSocket:  <span className="dark:bg-zinc-700 dark:text-white px-2 py-0.5 bg-zinc-300 text-black mx-2 rounded-md">{device.webScoketURL}</span></p>
          <p className="text-sm text-gray-700 dark:text-gray-500">MQTT:   <span className="dark:bg-zinc-700 dark:text-white px-2 py-0.5 bg-zinc-300 text-black mx-2 rounded-md">{device.mqttURL}</span></p>

        </CardFooter>

      </Card>

      {/* Terminal-style Logs */}
      <div className="bg-black text-blue-500 font-mono p-4 rounded-2xl max-h-96 overflow-y-auto shadow">
        <pre>
          {readings.map((item, index) => (
            <div key={index}>
              <span className="text-green-400">{`[${item.timestamp}] `}</span>
              <span>{JSON.stringify(item.data)}</span>
            </div>
          ))}
        </pre>
      </div>

    </div>
  );
}

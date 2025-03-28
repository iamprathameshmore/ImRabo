"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DeviceDetailModal({ device, isOpen, onClose }: any) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Device Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <p><b>Name:</b> {device.name}</p>
          <p><b>IP Address:</b> {device.ip}</p>
          <p><b>Status:</b> {device.status ? "✅ Online" : "❌ Offline"}</p>
          <p><b>WebSocket URL:</b> <code className="bg-gray-100 p-1 rounded">{device.wsUrl}</code></p>
        </div>
        <Button variant="ghost" onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
}

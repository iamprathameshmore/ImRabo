"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function DeviceModal({
  onAdd,
  initialData = null,
  isEdit = false,
  onClose,
}: {
  onAdd: (device: any) => void;
  initialData?: any;
  isEdit?: boolean;
  onClose: () => void;
}) {
  const [device, setDevice] = useState({ name: "", ip: "", status: false });

  useEffect(() => {
    if (initialData) {
      setDevice(initialData);
    } else {
      setDevice({ name: "", ip: "", status: false });
    }
  }, [initialData]);

  const handleSave = () => {
    onAdd(device);
    onClose(); // Close modal after save
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Device" : "Add Device"}</DialogTitle>
          <DialogDescription>
            {isEdit ? "Update the details of your device." : "Enter the details of your device."}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="device-name" className="text-right">Name</Label>
            <Input
              id="device-name"
              placeholder="Enter device name"
              value={device.name}
              onChange={(e) => setDevice({ ...device, name: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="device-ip" className="text-right">IP Address</Label>
            <Input
              id="device-ip"
              type="text"
              placeholder="192.168.1.1"
              value={device.ip}
              onChange={(e) => setDevice({ ...device, ip: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Status</Label>
            <Switch
              checked={device.status}
              onCheckedChange={(value) => setDevice({ ...device, status: value })}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSave}>{isEdit ? "Save Changes" : "Add Device"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

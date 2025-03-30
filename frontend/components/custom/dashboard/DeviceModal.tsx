"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select";
import { ArrowDown } from "lucide-react";

// Define the structure for device modal properties
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
  const [device, setDevice] = useState({
    deviceName: "",
    deviceType: "",
  });
  const [open, setOpen] = useState(true); // Local state to control the modal visibility

  const deviceModels = ["ESP32", "ESP8266", "Arduino", "Raspberry Pi", "BeagleBone"]; // Device models list

  useEffect(() => {
    if (initialData) {
      setDevice(initialData);
    } else {
      setDevice({ deviceName: "", deviceType: "" });
    }
  }, [initialData]);

  const handleSave = () => {
    onAdd(device);
    setOpen(false); // Close the modal
    onClose(); // Optional: Close the modal externally
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Device" : "Add Device"}</DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Update the details of your device."
              : "Enter the details of your device."}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Device Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="device-name" className="text-right">
              Device Name
            </Label>
            <Input
              id="device-name"
              placeholder="Enter device name"
              value={device.deviceName}
              onChange={(e) => setDevice({ ...device, deviceName: e.target.value })}
              className="col-span-3"
            />
          </div>

          {/* Device Model */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="device-model" className="text-right">
              Device Model
            </Label>

            <Select
              value={device.deviceType}
              onValueChange={(value) => setDevice({ ...device, deviceType: value })}
            >
              <SelectTrigger>
                <Button>
                  {device.deviceType ? device.deviceType : "Select a Model"}
                  <ArrowDown className="ml-2" />
                </Button>
              </SelectTrigger>
              <SelectContent>
                {deviceModels.map((model) => (
                  <SelectItem key={model} value={model}>
                    {model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSave}>
            {isEdit ? "Save Changes" : "Add Device"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

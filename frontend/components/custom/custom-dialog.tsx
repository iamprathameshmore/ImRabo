"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export function CustomDialogForm() {
  const [activeTab, setActiveTab] = useState("automation");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Manage Imrabo Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Imrabo Settings</DialogTitle>
          <DialogDescription>
            Configure your automation, devices, and integrations for Imrabo.
          </DialogDescription>
        </DialogHeader>

        {/* Tabs Navigation */}
        <Tabs defaultValue="automation" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
          </TabsList>

          {/* Automation Tab */}
          <TabsContent value="automation">
            <div className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="automation-name" className="text-right">
                  Automation Name
                </Label>
                <Input id="automation-name" placeholder="Enter automation name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="automation-enabled" className="text-right">
                  Enable Automation
                </Label>
                <Switch id="automation-enabled" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="automation-rules" className="text-right">
                  Automation Rules
                </Label>
                <Textarea id="automation-rules" placeholder="Define automation rules..." className="col-span-3" />
              </div>
            </div>
          </TabsContent>

          {/* Devices Tab */}
          <TabsContent value="devices">
            <div className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="device-name" className="text-right">
                  Device Name
                </Label>
                <Input id="device-name" placeholder="Enter device name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="device-ip" className="text-right">
                  Device IP Address
                </Label>
                <Input id="device-ip" type="text" placeholder="192.168.1.1" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="device-status" className="text-right">
                  Device Status
                </Label>
                <Switch id="device-status" className="col-span-3" />
              </div>
            </div>
          </TabsContent>

          {/* Integration Tab */}
          <TabsContent value="integration">
            <div className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="integration-name" className="text-right">
                  Integration Name
                </Label>
                <Input id="integration-name" placeholder="Enter integration name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="integration-api" className="text-right">
                  API Key
                </Label>
                <Input id="integration-api" type="password" placeholder="Enter API Key" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="integration-description" className="text-right">
                  Integration Description
                </Label>
                <Textarea id="integration-description" placeholder="Enter integration details..." className="col-span-3" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <DialogFooter>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export function AutomationDetailModal({ automation, isOpen, onClose }: any) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Automation Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Name</Label>
            <Input value={automation.name} disabled className="col-span-3 bg-gray-100" />
          </div>

          {/* Enabled Status */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Enabled</Label>
            <Switch checked={automation.enabled} disabled className="col-span-3 opacity-50 cursor-not-allowed" />
          </div>

          {/* Rules */}
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right">Rules</Label>
            <Textarea value={automation.rules} disabled className="col-span-3 bg-gray-100" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

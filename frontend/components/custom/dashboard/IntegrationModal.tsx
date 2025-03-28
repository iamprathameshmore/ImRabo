"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface IntegrationModalProps {
  onAdd: (integration: any) => void;
  initialData?: any;
  isEdit?: boolean;
  onClose: () => void;
}

export function IntegrationModal({ onAdd, initialData, isEdit = false, onClose }: IntegrationModalProps) {
  const [integration, setIntegration] = useState({ name: "", apiKey: "", description: "" });

  useEffect(() => {
    if (initialData) {
      setIntegration(initialData);
    }
  }, [initialData]);

  const handleSave = () => {
    onAdd(integration);
    onClose();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Integration" : "Add Integration"}</DialogTitle>
          <DialogDescription>{isEdit ? "Modify integration details." : "Enter integration details."}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="integration-name" className="text-right">Name</Label>
            <Input
              id="integration-name"
              placeholder="Enter integration name"
              value={integration.name}
              onChange={(e) => setIntegration({ ...integration, name: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="integration-api" className="text-right">API Key</Label>
            <Input
              id="integration-api"
              type="password"
              placeholder="Enter API Key"
              value={integration.apiKey}
              onChange={(e) => setIntegration({ ...integration, apiKey: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="integration-description" className="text-right">Description</Label>
            <Textarea
              id="integration-description"
              placeholder="Enter details..."
              value={integration.description}
              onChange={(e) => setIntegration({ ...integration, description: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSave}>{isEdit ? "Save Changes" : "Add Integration"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

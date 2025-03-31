"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Integration {
  _id?: string;
  integrationName: string;
  apiKey: string;
  type: string;
}

interface IntegrationModalProps {
  isEdit: boolean;
  initialData?: Integration;
  onSave: (integration: Integration) => void;
  onClose: () => void;
}

export function IntegrationModal({ isEdit, initialData, onSave, onClose }: IntegrationModalProps) {
  const [integrationName, setIntegrationName] = useState(initialData?.integrationName || "");
  const [apiKey, setApiKey] = useState(initialData?.apiKey || "");
  const [type, setType] = useState(initialData?.type || "");

  const integrationTypes = ['API', 'Webhook', 'MQTT', 'iPaaS', 'Other'];

  useEffect(() => {
    if (initialData) {
      setIntegrationName(initialData.integrationName);
      setApiKey(initialData.apiKey);
      setType(initialData.type);
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!integrationName || !apiKey || !type) return;
    onSave({ ...initialData, integrationName, apiKey, type });
    onClose();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Integration" : "Add Integration"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Integration Name</Label>
            <Input value={integrationName} onChange={(e) => setIntegrationName(e.target.value)} />
          </div>
          <div>
            <Label>API Key</Label>
            <Input value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
          </div>
          <div>
            <Label>Type</Label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Type</option>
              {integrationTypes.map((typeOption) => (
                <option key={typeOption} value={typeOption}>
                  {typeOption}
                </option>
              ))}
            </select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>{isEdit ? "Update" : "Add"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

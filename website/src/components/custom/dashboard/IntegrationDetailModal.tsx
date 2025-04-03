"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface IntegrationDetailModalProps {
  integration: any;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function IntegrationDetailModal({ integration, isOpen, onClose, onEdit, onDelete }: IntegrationDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Integration Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <p><b>Name:</b> {integration.name}</p>
          <p><b>API Key:</b> {integration.apiKey.replace(/.(?=.{4})/g, "*")}</p>
          <p><b>Description:</b> {integration.description}</p>
        </div>

        <DialogFooter className="flex justify-between">
          <Button variant="outline" onClick={onEdit}>Edit</Button>
          <Button variant="destructive" onClick={onDelete}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

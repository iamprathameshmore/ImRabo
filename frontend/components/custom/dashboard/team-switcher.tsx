"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

export function TeamSwitcher({
  title,
  icon: Icon,
}: {
  title: string;
  icon?: LucideIcon;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarGroup>
      <SidebarGroupLabel
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5" />} 
          {!isOpen && <span>{title}</span>} {/* Hide title when collapsed */}
        </div>
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </SidebarGroupLabel>
    </SidebarGroup>
  );
}

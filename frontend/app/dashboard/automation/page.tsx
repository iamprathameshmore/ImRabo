"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export default function AutomationCards() {
  const router = useRouter();
  const [automations, setAutomations] = useState([
    { name: "Lights Automation", type: "task", integration: "Smart Lights", time: "19:00", enabled: true },
    { name: "Temperature Control", type: "workflow", integration: "Thermostat", steps: ["Set 22°C"], enabled: false },
  ]);

  return (
    <div className="space-y-6 md:p-6">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Automation Management</h1>
        <Button onClick={() => router.push("/dashboard/automation/create")} className="flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Add Automation
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {automations.map((automation, index) => (
          <Card key={index} className="p-4 border shadow-sm hover:shadow-md transition">
            <CardHeader className="font-medium">{automation.name}</CardHeader>
            <CardContent className="text-sm text-gray-600 space-y-2">
              <p><b>Type:</b> {automation.type === "task" ? "Task-based" : "Workflow-based"}</p>
              <p><b>Integration:</b> {automation.integration}</p>
              {automation.type === "task" ? (
                <p><b>Time:</b> {automation.time}</p>
              ) : (
                <div>
                  <b>Steps:</b>
                  <ul className="list-disc list-inside">
                    {automation.steps?.map((step, i) => (
                      <li key={i}>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Switch checked={automation.enabled} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
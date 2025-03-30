"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function AutomationFlow() {
  const [forms, setForms] = useState([
    { integration: "", event: "", schedule: "", action: "" },
  ]);
  const [automationName, setAutomationName] = useState("Untitled Automation");

  const handleAddForm = () => {
    setForms([...forms, {
      action: "",
      integration: "",
      event: "",
      schedule: ""
    }]);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 dark:bg-zinc-900 rounded-xl relative bg-zinc-100">
      {/* Top Bar */}
      <div className="absolute top-6 left-6 flex items-center gap-4 dark:border-zinc-800">
        <Input 
          className="text-xl font-semibold px-4 py-2 border dark:border-zinc-800 border-zinc-200 rounded-lg shadow-sm bg-zinc-300 "
          value={automationName}
          onChange={(e) => setAutomationName(e.target.value)}
        />
      </div>
      
      {forms.map((form, index) => (
        <div key={index} className="flex flex-col items-center relative my-2 w-full">
          <Card className="w-full max-w-md px-6 mb-4 border shadow-lg rounded-xl dark:border-zinc-800 border-zinc-300">
            <CardContent className="space-y-4 w-full">
              {index === 0 && (
                <>
                  <h3 className="text-lg font-semibold">Trigger</h3>
                  <Select onValueChange={(value) => {
                    const newForms = [...forms];
                    newForms[index].integration = value;
                    setForms(newForms);
                  }}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose Integration or Device" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="device1">Device 1</SelectItem>
                      <SelectItem value="device2">Device 2</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select onValueChange={(value) => {
                    const newForms = [...forms];
                    newForms[index].event = value;
                    setForms(newForms);
                  }}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose Event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="event1">Event 1</SelectItem>
                      <SelectItem value="event2">Event 2</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select onValueChange={(value) => {
                    const newForms = [...forms];
                    newForms[index].schedule = value;
                    setForms(newForms);
                  }}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose Scheduled or Dynamic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="dynamic">Dynamic</SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}
              <h3 className="text-lg font-semibold">Action</h3>
              <Input
                placeholder="Action"
                value={form.action}
                onChange={(e) => {
                  const newForms = [...forms];
                  newForms[index].action = e.target.value;
                  setForms(newForms);
                }}
              />
            </CardContent>
          </Card>
          {index < forms.length - 1 && <div className="h-10"> <Separator orientation="vertical" className="text-green-400 h-10"/></div>}
        </div>
      ))}
      
      <Button onClick={handleAddForm} className="flex items-center gap-2 mt-1 dark:bg-zinc-700 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md">
        <Plus className="w-5 h-5" /> Add Step
      </Button>
      
      {/* Save Button */}
      <div className="absolute top-6 right-6">
        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md">Save</Button>
      </div>
    </div>
  );
}
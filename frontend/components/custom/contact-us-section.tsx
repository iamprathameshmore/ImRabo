"use client";
"use client";

import { CalendarIcon, Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const ContactImrabo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="w-full py-20 lg:py-40 p-5">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contact Imrabo</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Let's Connect with Imrabo
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Imrabo is here to help you streamline your processes and make your business operations smoother. Connect with us for personalized consultations.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-muted-foreground text-sm">
                  We’ve made it easy for you to connect and get the help you need in no time.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast response</p>
                <p className="text-muted-foreground text-sm">
                  Our team at Imrabo is ready to assist you with quick solutions and personalized guidance.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Modern approach</p>
                <p className="text-muted-foreground text-sm">
                  Our methods are innovative and tailored to meet your business’s evolving needs.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
              <p>Book a consultation with Imrabo</p>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="date">Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full max-w-sm justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstname">First Name</Label>
                <Input id="firstname" type="text" placeholder="Your First Name" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" type="text" placeholder="Your Last Name" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="message">Message</Label>
                <Input id="message" type="text" placeholder="Your Message" />
              </div>

              <Button className="gap-4 w-full">
                Schedule a Meeting <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

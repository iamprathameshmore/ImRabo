import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature2 = () => (
  <div className="w-full py-20 lg:py-40 p-5">
    <div className="container mx-auto">
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge>Imrabo Platform</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Powering the Future of IoT & AI Automation
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Imrabo simplifies IoT and AI integration, bringing you seamless automation for your business processes.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Seamless IoT Integration</p>
                <p className="text-muted-foreground text-sm">
                  Easily connect and manage all your IoT devices in one platform.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>AI-Powered Automation</p>
                <p className="text-muted-foreground text-sm">
                  Automate complex tasks and processes using advanced AI algorithms.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Real-Time Data Insights</p>
                <p className="text-muted-foreground text-sm">
                  Gain real-time insights into your operations to make data-driven decisions.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Scalable & Flexible</p>
                <p className="text-muted-foreground text-sm">
                  Scale your operations effortlessly with a flexible platform that adapts to your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Secure & Reliable</p>
                <p className="text-muted-foreground text-sm">
                  Rest assured with top-notch security and high reliability for all your operations.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Unified Control</p>
                <p className="text-muted-foreground text-sm">
                  Manage everything from a single interface for an intuitive experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

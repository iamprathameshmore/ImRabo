import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA1 = () => (
  <div className="w-full py-20 lg:py-40 p-5">
    <div className="container mx-auto">
      <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
        <div>
          <Badge>Get Started with Imrabo</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Powering the Future of Smart Trade
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Imrabo simplifies trade and business operations with cutting-edge technology.  
            Say goodbye to inefficiencies—streamline your workflow and scale effortlessly.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline">
            Schedule a Call <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4">
            Get Started Now <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

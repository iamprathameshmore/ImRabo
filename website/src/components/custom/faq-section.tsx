import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ2 = () => (
  <div className="w-full py-20 lg:py-40 p-5">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Welcome to Imrabo – Revolutionizing AI and IoT Integration
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Managing AI-driven automation and IoT devices is complex. Imrabo streamlines these processes, making it easier to integrate, control, and automate everything in your system. Our goal is to simplify AI and IoT operations to make them more efficient and accessible.
            </p>
          </div>
          <div>
            <Button className="gap-4" variant="outline">
              Have Questions? Reach Out <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={1} value="index-1">
              <AccordionTrigger>
                What is Imrabo and how does it benefit businesses?
              </AccordionTrigger>
              <AccordionContent>
                Imrabo is an AI and IoT integration platform designed to streamline automation for businesses. It simplifies the process of managing IoT devices, automates routine tasks, and uses AI to enhance decision-making, improving overall operational efficiency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem key={2} value="index-2">
              <AccordionTrigger>
                Can Imrabo integrate with existing IoT devices?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Imrabo is designed to integrate seamlessly with a wide variety of existing IoT devices. Whether you’re working with sensors, cameras, or other IoT equipment, Imrabo can centralize control and enable automation across your entire ecosystem.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem key={3} value="index-3">
              <AccordionTrigger>
                How does Imrabo handle AI-driven automation?
              </AccordionTrigger>
              <AccordionContent>
                Imrabo utilizes AI to automate decision-making and optimize workflows. By analyzing data from IoT devices, Imrabo's AI models can predict trends, automate tasks, and provide insights, enhancing productivity and reducing manual effort.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem key={4} value="index-4">
              <AccordionTrigger>
                Is Imrabo suitable for small businesses?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Imrabo’s user-friendly interface and scalable solutions make it perfect for small businesses. It helps automate processes, manage IoT devices, and make data-driven decisions without the need for extensive technical knowledge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem key={5} value="index-5">
              <AccordionTrigger>
                Can Imrabo improve operational efficiency in large enterprises?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Imrabo is designed to scale with your business. For large enterprises, it provides robust integration capabilities, advanced automation, and AI-driven insights, ensuring that operations run smoothly and efficiently at scale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem key={6} value="index-6">
              <AccordionTrigger>
                How secure is the data handled by Imrabo?
              </AccordionTrigger>
              <AccordionContent>
                Security is a top priority at Imrabo. The platform employs end-to-end encryption, secure data storage, and regular security audits to ensure that your data is protected from unauthorized access and breaches.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem key={7} value="index-7">
              <AccordionTrigger>
                Does Imrabo offer customer support for troubleshooting?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Imrabo offers dedicated customer support to assist with any troubleshooting needs. Our team is available to help you with technical issues, setup, or any other questions you may have to ensure a smooth experience with the platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Contact() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions? Fill out the form and we'll get back to you.
          </p>
          <div className="space-y-4 mt-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="text" placeholder="Your Message" className="h-24" />
            <Button>Submit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

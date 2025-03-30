import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelpCenter() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Help Center */}
      <Card>
        <CardHeader>
          <CardTitle>Help Center</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Find answers to your questions or get in touch with us.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/faqs">
              <Button variant="outline">FAQs</Button>
            </Link>
            <Link href="/contact">
              <Button>Contact Support</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

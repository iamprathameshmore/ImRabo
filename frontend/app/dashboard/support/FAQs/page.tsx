
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQs() {
  const faqs = [
    { question: "How do I reset my password?", answer: "Go to settings and click on reset password." },
    { question: "How can I contact support?", answer: "You can contact us via the contact form or email us." },
    { question: "Where can I find my purchase history?", answer: "Check the 'Orders' section in your account settings." },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li key={index}>
                <p className="font-semibold">{faq.question}</p>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

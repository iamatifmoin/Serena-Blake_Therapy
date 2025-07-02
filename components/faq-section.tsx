"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Do you treat children or adolescents?",
    answer:
      "Yes, I provide therapy services for adolescents (typically ages 13 and up) as well as adults. My approach is tailored to be age-appropriate and considers the unique developmental needs of younger clients.",
  },
  {
    question: "Which geographic regions do you serve?",
    answer:
      "I am licensed to practice in Michigan and participate in PSYPACT, which allows me to provide services to clients in multiple U.S. states. Please contact me to confirm if I can provide services in your specific state.",
  },
  {
    question: "Do you offer in-person sessions?",
    answer:
      "Yes, I offer in-person sessions on Tuesdays and Thursdays from 10 AM to 6 PM at my office location. I also provide virtual sessions via Zoom for added convenience.",
  },
  {
    question: "What technology do we use for virtual sessions?",
    answer:
      "Virtual sessions are conducted through Zoom, a secure and HIPAA-compliant platform. You'll receive a private meeting link prior to your session, and no special software installation is typically required.",
  },
  {
    question: "What are the benefits of private pay therapy?",
    answer:
      "Private pay therapy offers several advantages: no insurance limitations on session frequency or duration, complete privacy (no diagnosis required to be shared with insurance), flexible treatment approaches, and the ability to focus entirely on your therapeutic goals without external constraints.",
  },
];

export function FAQSection() {
  return (
    <section className="px-8 py-24 bg-[#f8f6f3]">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-[36px] font-normal text-center mb-16 text-[#7a9bb8] freight-display">
          Frequently Asked Questions
        </h3>

        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#d0ccc6] pb-0"
              >
                <AccordionTrigger className="text-left py-6 text-[16px] text-[#7a9bb8] freight-sans hover:no-underline [&>svg]:text-[#7a9bb8]">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#7a9bb8] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-[#7a9bb8] rounded-full"></div>
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[#5a5a5a] text-[15px] leading-[1.7] freight-sans pl-9 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

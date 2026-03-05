import type { Metadata } from "next";
import FAQAccordion from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Zirwa Qurbani",
};

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h1>
      <FAQAccordion />
    </main>
  );
}

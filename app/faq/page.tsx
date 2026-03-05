"use client";

import Image from "next/image";
import { useState } from "react";
import FAQAccordion from "@/components/faq/FAQAccordion";
import DownloadAppSection from "@/components/home/DownloadAppSection";
import Navbar from "@/components/layout/Navbar";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<"domestic" | "international">("domestic");

  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff" }}>
        <Navbar />
      </div>

      <main className="bg-white">
        <section className="mx-auto w-full max-w-[1392px] px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-5xl text-center">
          <h1 className="text-4xl font-semibold text-black sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-base text-[#4a5568] sm:text-lg">
            Find answers to the most popular questions about Zirwa Foods here.
            If you are facing any issue using the app, contact us at
            {" "}
            <a className="font-medium text-[#82131b]" href="mailto:mdkaleem@zirwafoods.com">
              mdkaleem@zirwafoods.com
            </a>
            {" "}
            or via our support channels. We are here to help you 24/7.
          </p>
        </header>

          <FAQAccordion onTabChange={setActiveTab} />
        </section>

        <section className="mx-auto w-full max-w-[1100px] px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[#82131b] sm:text-4xl">
              Our Certifications &amp; Compliance
            </h2>
            <p className="mt-3 text-sm text-[#585858] sm:text-base">
              Recognized and certified to uphold the highest standards of Shariah
              compliance, hygiene, and operational excellence.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-2xl border border-[#e8d7d7] bg-white p-3 shadow-[0_10px_28px_rgba(118,23,31,0.12)] sm:p-5">
            <Image
              src={activeTab === "domestic" ? "/images/faq1.png" : "/images/faq2.png"}
              alt={activeTab === "domestic" ? "Domestic certification" : "International certification"}
              width={1600}
              height={900}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </section>

        <DownloadAppSection />
      </main>
    </>
  );
}

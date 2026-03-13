"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthFlow from "@/components/auth/LoginModal";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image
            src="/images/Frame 1437253701.png"
            alt="Zirwa Qurbani Service"
            width={206}
            height={100}
            priority
            className="w-[140px] sm:w-[180px] md:w-[206px] h-auto block"
          />
        </Link>

        <button
          onClick={() => setLoginOpen(true)}
          className="inline-flex items-center rounded-full border-none cursor-pointer"
          style={{
            background: "#ED0213",
            padding: "3px 4px 3px 12px",
            gap: "10px",
            height: "44px",
          }}
        >
          <span
            className="text-white whitespace-nowrap"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "13px",
              fontWeight: 510,
              lineHeight: "16px",
            }}
          >
            Login
          </span>
          <span
            className="flex items-center justify-center rounded-full flex-shrink-0 bg-white"
            style={{ width: "36px", height: "36px" }}
          >
            <svg width="15" height="15" viewBox="0 0 17 17" fill="none" aria-hidden="true">
              <path
                d="M3.5 13.5L13.5 3.5M13.5 3.5H6.5M13.5 3.5V10.5"
                stroke="#ED0213"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </header>

      <AuthFlow loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
    </>
  );
}

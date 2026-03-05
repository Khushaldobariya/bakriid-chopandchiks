"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginModal from "@/components/auth/LoginModal";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between w-full px-6 py-4">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image
            src="/images/Frame 1437253701.png"
            alt="Zirwa Qurbani Service"
            width={206}
            height={100}
            priority
            style={{ width: "206px", height: "auto", display: "block" }}
          />
        </Link>

        <button
          onClick={() => setLoginOpen(true)}
          className="inline-flex items-center rounded-full"
          style={{
            background: "#ED0213",
            padding: "4px 5px 4px 14px",
            gap: "16px",
            height: "56px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "13.6px",
              fontWeight: 510,
              lineHeight: "16px",
              color: "#FFFFFF",
            }}
          >
            Login
          </span>
          <span
            className="flex items-center justify-center rounded-full flex-shrink-0"
            style={{ width: "46px", height: "46px", background: "#FFFFFF" }}
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
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

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

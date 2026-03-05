"use client";

import { useState, useRef } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PHONE_REGEX = /^(\+91[6-9][0-9]{9}|[6-9][0-9]{9})$/;

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [devOtp, setDevOtp] = useState("");
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  if (!isOpen) return null;

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleClose = () => {
    setStep("phone");
    setPhone("");
    setOtp(["", "", "", "", "", ""]);
    setError("");
    setDevOtp("");
    onClose();
  };

  const handleSendOtp = async () => {
    const cleaned = phone.trim().replace(/\s|-/g, "");
    if (!PHONE_REGEX.test(cleaned)) {
      setError("Enter a valid Indian mobile number (e.g. 9876543210 or +919876543210).");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleaned }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to send OTP. Please try again.");
        return;
      }
      // Dev mode: server returns the OTP so you can test without SMS
      if (data.devOtp) setDevOtp(data.devOtp);
      setStep("otp");
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }
    const cleaned = phone.trim().replace(/\s|-/g, "");
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleaned, otp: enteredOtp }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Verification failed. Please try again.");
        return;
      }
      // OTP verified — close modal and proceed
      handleClose();
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setOtp(["", "", "", "", "", ""]);
    setDevOtp("");
    setError("");
    await handleSendOtp();
  };

  const modalHeight = step === "phone" ? "359.93px" : "497.93px";

  return (
    <>
      {/* Dark overlay */}
      <div
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "#0F0707",
          opacity: 0.66,
          zIndex: 1000,
        }}
      />

      {/* Modal card */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1001,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30.8726px",
          gap: "59.17px",
          isolation: "isolate",
          width: "473.75px",
          height: modalHeight,
          background: "#FFFFFF",
          boxShadow: "4px 4px 20px rgba(172, 2, 2, 0.4)",
          borderRadius: "32px",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: "absolute",
            left: "431px",
            top: "18.91px",
            width: "24px",
            height: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4.21 4.387a.75.75 0 0 1 1.06 0L12 10.939l6.728-6.552a.75.75 0 1 1 1.044 1.079L13.062 12l6.71 6.534a.75.75 0 1 1-1.044 1.079L12 13.061l-6.728 6.552a.75.75 0 0 1-1.044-1.079L11.938 12 5.27 5.466a.75.75 0 0 1-.06-1.079Z"
              fill="#000000"
            />
          </svg>
        </button>

        {/* Content frame */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 0,
            gap: "32px",
            width: "412px",
          }}
        >
          {/* Title */}
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "54px",
              textAlign: "center",
              color: "#484C52",
              width: "98px",
              height: "54px",
            }}
          >
            Login
          </span>

          {/* Form */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 0,
              gap: "28px",
              width: "412px",
            }}
          >
            {/* Input fields section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                padding: 0,
                gap: "16px",
                width: "412px",
              }}
            >
              {/* Mobile No field */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: 0,
                  gap: "11.18px",
                  width: "412px",
                }}
              >
                <label
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "125%",
                    color: "#000000",
                    height: "18px",
                  }}
                >
                  Mobile No
                </label>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0 29.816px",
                    gap: "18.64px",
                    width: "412px",
                    height: "56px",
                    background: "#FFFFFF",
                    border: "1.8635px solid #D8DADC",
                    borderRadius: "8px",
                    fontFamily: "'Fredoka', cursive",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "125%",
                    color: "rgba(0, 0, 0, 0.6)",
                    outline: "none",
                  }}
                />
              </div>

              {/* OTP section — only shown in step 2 */}
              {step === "otp" && (
                <>
                  {/* OTP label */}
                  <label
                    style={{
                      alignSelf: "flex-start",
                      fontFamily: "'Fredoka One', cursive",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "125%",
                      color: "#000000",
                      width: "412px",
                      height: "18px",
                    }}
                  >
                    OTP
                  </label>

                  {/* 6 OTP boxes */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: 0,
                      gap: "24px",
                      width: "412px",
                      height: "56px",
                    }}
                  >
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        id={`otp-${i}`}
                        ref={(el) => { otpRefs.current[i] = el; }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                        style={{
                          boxSizing: "border-box",
                          width: "60px",
                          height: "56px",
                          background: "#FFFFFF",
                          border: "1px solid #E9E8E8",
                          borderRadius: "4px",
                          textAlign: "center",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 400,
                          fontSize: "24px",
                          lineHeight: "16px",
                          letterSpacing: "-0.02em",
                          color: "#000000",
                          outline: "none",
                          flexShrink: 0,
                        }}
                      />
                    ))}
                  </div>

                  {/* Dev-mode OTP hint */}
                  {devOtp && (
                    <div
                      style={{
                        width: "412px",
                        padding: "8px 12px",
                        background: "#FFF3CD",
                        border: "1px solid #FFC107",
                        borderRadius: "6px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        color: "#856404",
                      }}
                    >
                      <strong>Dev mode:</strong> Your OTP is <strong>{devOtp}</strong>
                    </div>
                  )}

                  {/* Resend OTP */}
                  <button
                    onClick={handleResend}
                    disabled={loading}
                    style={{
                      width: "412px",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "16px",
                      textAlign: "right",
                      letterSpacing: "-0.2px",
                      color: loading ? "#C0C0C0" : "#949CAB",
                      cursor: loading ? "not-allowed" : "pointer",
                      background: "none",
                      border: "none",
                      padding: 0,
                    }}
                  >
                    Resend OTP
                  </button>
                </>
              )}

              {/* Error message */}
              {error && (
                <p
                  style={{
                    width: "412px",
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "13px",
                    lineHeight: "18px",
                    color: "#D32F2F",
                    textAlign: "left",
                  }}
                >
                  {error}
                </p>
              )}
            </div>

            {/* CTA button */}
            <button
              onClick={step === "phone" ? handleSendOtp : handleVerifyOtp}
              disabled={loading}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "14px 0px",
                gap: "10px",
                width: "264px",
                height: "52px",
                background: loading ? "#F87878" : "#ED0213",
                borderRadius: "24px",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background 0.2s",
              }}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                {loading
                  ? step === "phone" ? "Sending…" : "Verifying…"
                  : step === "phone" ? "Proceed via OTP" : "Confirm OTP"}
              </span>
            </button>

            {/* Terms */}
            <span
              style={{
                width: "352px",
                fontFamily: "'Fredoka', cursive",
                fontWeight: 400,
                fontSize: "15.7276px",
                lineHeight: "19px",
                textAlign: "center",
                letterSpacing: "-0.262127px",
                color: "#5F5E5E",
              }}
            >
              By signing in you agree to our{" "}
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#E6A817",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Terms and Conditions
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

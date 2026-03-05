import Image from "next/image";

const bullets = [
  "Animal reservation confirmation",
  "Slaughter completion update",
  "Distribution confirmation",
];

function TickIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="tickGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4B55" />
          <stop offset="100%" stopColor="#BA3139" />
        </linearGradient>
      </defs>
      <path
        d="M16 2.5l2.9 2.6 3.8-.9 1.4 3.6 3.6 1.4-.9 3.8 2.6 2.9-2.6 2.9.9 3.8-3.6 1.4-1.4 3.6-3.8-.9L16 29.5l-2.9-2.6-3.8.9-1.4-3.6-3.6-1.4.9-3.8L2.5 16l2.6-2.9-.9-3.8 3.6-1.4 1.4-3.6 3.8.9L16 2.5z"
        fill="url(#tickGrad2)"
      />
      <circle cx="16" cy="16" r="6" fill="white" opacity="0.25" />
      <path
        d="M11 16.5l3.5 3.5 6.5-7"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FullTransparencySection() {
  return (
    <section style={{ background: "#fff", padding: "80px 88px" }}>
      <div style={{ maxWidth: "1336px", margin: "0 auto", display: "flex", flexDirection: "row", alignItems: "center", gap: "87px" }}>
        {/* Left — image */}
        <div style={{ flexShrink: 0 }}>
          <Image
            src="/images/location.png"
            alt="Qurbani tracking"
            width={448}
            height={448}
            style={{
              width: "448px",
              height: "448px",
              borderRadius: "32px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Right — content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "48px", flex: 1 }}>
          <div className="flex flex-col items-start gap-6 w-full">
            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 3.5vw, 48px)",
                lineHeight: "1.15",
                letterSpacing: "-1px",
                color: "#82131B",
                margin: 0,
              }}
            >
              Full Transparency &amp; Tracking
            </h2>

            {/* Subtitle + bullets + footnote */}
            <div className="flex flex-col items-start gap-3 w-full">
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(14px, 1.3vw, 20px)",
                  lineHeight: "1.75",
                  color: "#494949",
                  margin: 0,
                }}
              >
                Each Qurbani is assigned a unique ID so you can stay informed
                throughout the process.
              </p>

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(14px, 1.3vw, 20px)",
                  lineHeight: "1.75",
                  color: "#494949",
                  margin: 0,
                }}
              >
                You receive:
              </p>

              {/* Bullet list */}
              <div className="flex flex-col items-start gap-3 w-full">
                {bullets.map((text) => (
                  <div
                    key={text}
                    className="flex flex-row items-center gap-3 w-full"
                  >
                    <TickIcon />
                    <span
                      style={{
                        fontFamily: "'Fredoka', sans-serif",
                        fontWeight: 500,
                        fontSize: "clamp(14px, 1.3vw, 24px)",
                        lineHeight: "1.4",
                        color: "#000000",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(14px, 1.3vw, 20px)",
                  lineHeight: "1.75",
                  color: "#494949",
                  margin: 0,
                }}
              >
                Proof is shared directly via our app or WhatsApp.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "24px" }}>
            <button
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "clamp(4px,0.5vw,6px) clamp(24px,2.8vw,43px)",
                height: "clamp(36px,4vw,56px)",
                background: "linear-gradient(90deg, #FF4B55 0%, #BA3139 100%)",
                boxShadow: "4px 8px 24px rgba(36, 107, 253, 0.25)",
                borderRadius: "34px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(13px, 1.3vw, 20px)",
                  lineHeight: "1.2",
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                }}
              >
                Book Now
              </span>
            </button>

            <button
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "clamp(4px,0.5vw,6px) clamp(14px,1.6vw,24px)",
                height: "clamp(36px,4vw,56px)",
                background: "linear-gradient(90deg, #FF4B55 0%, #BA3139 100%)",
                boxShadow: "4px 8px 24px rgba(36, 107, 253, 0.25)",
                borderRadius: "34px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(13px, 1.3vw, 20px)",
                  lineHeight: "1.2",
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                }}
              >
                Track My Qurbani
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

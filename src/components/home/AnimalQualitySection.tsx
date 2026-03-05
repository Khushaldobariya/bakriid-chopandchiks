import Image from "next/image";

const bullets = [
  "Only healthy, disease-free sheep",
  "Proper age and weight compliance",
  "Ethically raised in clean farm environments",
  "No mixed or bulk slaughter practices",
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
        <linearGradient id="tickGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4B55" />
          <stop offset="100%" stopColor="#BA3139" />
        </linearGradient>
      </defs>
      {/* Decagram/badge shape */}
      <path
        d="M16 2.5l2.9 2.6 3.8-.9 1.4 3.6 3.6 1.4-.9 3.8 2.6 2.9-2.6 2.9.9 3.8-3.6 1.4-1.4 3.6-3.8-.9L16 29.5l-2.9-2.6-3.8.9-1.4-3.6-3.6-1.4.9-3.8L2.5 16l2.6-2.9-.9-3.8 3.6-1.4 1.4-3.6 3.8.9L16 2.5z"
        fill="url(#tickGrad)"
      />
      {/* White circle in center */}
      <circle cx="16" cy="16" r="6" fill="white" opacity="0.25" />
      {/* Checkmark */}
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

export default function AnimalQualitySection() {
  return (
    <section style={{ background: "#fff", padding: "80px 88px" }}>
      <div style={{ maxWidth: "1336px", margin: "0 auto", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: "129px" }}>
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", flex: 1 }}>
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
            Animal Quality &amp; Farm Transparency
          </h2>

          {/* Subtitle + bullets */}
          <div className="flex flex-col items-start gap-3 w-full">
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(14px, 1.3vw, 20px)",
                lineHeight: "1.6",
                color: "#494949",
                margin: 0,
              }}
            >
              We maintain strict standards to ensure your Qurbani is valid,
              ethical, and dignified.
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
          </div>

          {/* Payments note */}
          <p
            style={{
              fontFamily: "'Inter', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(13px, 1vw, 16px)",
              lineHeight: "24px",
              textTransform: "uppercase",
              color: "#82131B",
              margin: 0,
            }}
          >
            We accept domestic and international payments
          </p>
        </div>

        {/* Right column — image */}
        <div style={{ flexShrink: 0 }}>
          <Image
            src="/images/goat.png"
            alt="Healthy sheep at farm"
            width={493}
            height={313}
            style={{
              width: "493px",
              height: "auto",
              borderRadius: "clamp(20px, 2.5vw, 36px)",
              border: "0.58px solid #BAB5B5",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}

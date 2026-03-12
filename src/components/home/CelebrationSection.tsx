function ArrowButton({ bgColor }: { bgColor: string }) {
  return (
    <div
      style={{
        position: "relative",
        width: "46px",
        height: "46px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          background: bgColor,
        }}
      />
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 15L15 3M15 3H7M15 3V11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

interface CtaButtonProps {
  label: string;
  labelColor: string;
  buttonText: string;
  circleColor: string;
  width: number;
  href?: string;
  onClick?: () => void;
}

function CtaButton({ label, labelColor, buttonText, circleColor, width, href, onClick }: CtaButtonProps) {
  const Tag = href ? "a" : "button";
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px", width: `${width}px` }}
    >
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "1.75",
          color: labelColor,
          margin: 0,
        }}
      >
        {label}
      </p>
      <Tag
        href={href}
        onClick={onClick}
        className="inline-flex flex-row items-center justify-between"
        style={{
          boxSizing: "border-box",
          padding: "0px 5px 0px 15px",
          gap: "17px",
          width: `${width}px`,
          height: "56px",
          background: "#FFE4E4",
          border: "1.43px solid #82131B",
          borderRadius: "60px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(13px, 1.1vw, 20px)",
            lineHeight: "1.2",
            color: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          {buttonText}
        </span>
        <ArrowButton bgColor={circleColor} />
      </Tag>
    </div>
  );
}

interface CelebrationSectionProps {
  onBookNow: () => void;
}

export default function CelebrationSection({ onBookNow }: CelebrationSectionProps) {
  return (
    <section style={{ background: "#fff", padding: "80px 88px" }}>
      <div style={{ maxWidth: "1336px", margin: "0 auto", display: "flex", flexDirection: "row", alignItems: "center", gap: "179px" }}>
        {/* Left — text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px", width: "738px", flexShrink: 0 }}>
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
            Your Qurbani, Their Celebration
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(14px, 1.3vw, 20px)",
              lineHeight: "1.75",
              color: "#313131",
              margin: 0,
            }}
          >
            For many families, Bakrid is the only time in the year they taste
            meat. Your Qurbani brings joy to their homes, nourishment to their
            children, and dignity to their celebration. When you outsource your
            Qurbani responsibly and with sincerity, you multiply its reward.
          </p>
        </div>

        {/* Right — CTAs */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "32px", width: "328px", flexShrink: 0 }}>
          <CtaButton
            label="Ready to Proceed?"
            labelColor="#670004"
            buttonText="Book Qurbani Now"
            circleColor="#000000"
            width={273}
            onClick={onBookNow}
          />
          <CtaButton
            label="Have Questions or Need Clarification?"
            labelColor="#05700D"
            buttonText="Chat on WhatsApp"
            circleColor="#60D669"
            width={328}
            href="https://wa.me/923001234567"
          />
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    step: "STEP-1",
    badgeWidth: 90,
    title: "Sheep Selection",
    desc: "Healthy, age-verified sheep sourced from trusted farms and raised in clean environments.",
  },
  {
    step: "STEP-2",
    badgeWidth: 94,
    title: "Intention & Allocation",
    desc: "Your Qurbani is uniquely assigned in your name to ensure proper niyyah and individual accountability.",
  },
  {
    step: "STEP-3",
    badgeWidth: 95,
    title: "Shariah Slaughter",
    desc: "Performed strictly according to Islamic guidelines by trained professionals.",
  },
  {
    step: "STEP-4",
    badgeWidth: 96,
    title: "Verified Documentation",
    desc: "You receive photo/video proof along with real-time status updates.",
  },
  {
    step: "STEP-5",
    badgeWidth: 96,
    title: "Distribution to the Needy",
    desc: "Meat is distributed respectfully to verified underprivileged families.",
  },
];

export default function HowItWorksSection() {
  return (
    <section style={{ background: "#fff", padding: "64px 60px" }}>
      <div
        style={{
          maxWidth: "1392px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "32px",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "53px",
            letterSpacing: "-1px",
            color: "#82131B",
            margin: 0,
            alignSelf: "stretch",
          }}
        >
          How Your Qurbani is Performed – Step by Step
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "36px",
            color: "#585858",
            margin: 0,
            alignSelf: "stretch",
          }}
        >
          Your Qurbani is handled with strict Shariah compliance, verified
          processes, and transparent distribution to ensure dignity, accuracy,
          and complete peace of mind.
        </p>

        {/* Cards row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "10px",
            width: "100%",
          }}
        >
          {steps.map((s) => (
            <div
              key={s.step}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: "20px 24px",
                gap: "10px",
                width: "264px",
                height: "322px",
                background: "#FFF0F1",
                border: "1px solid #8D0404",
                borderRadius: "20px",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              {/* Inner frame */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  width: "100%",
                }}
              >
                {/* Step badge row — aligned right */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: "100%",
                    height: "32px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      padding: "4px 12px",
                      gap: "10px",
                      width: `${s.badgeWidth}px`,
                      height: "32px",
                      background: "#FFFFFF",
                      border: "1px solid #8D0404",
                      borderRadius: "30px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: "24px",
                        color: "#ED0213",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.step}
                    </span>
                  </div>
                </div>

                {/* Title + Description */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "24px",
                    width: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "28px",
                      lineHeight: "34px",
                      color: "#8C1A1A",
                      margin: 0,
                      alignSelf: "stretch",
                      wordBreak: "break-word",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "22px",
                      color: "#971919",
                      margin: 0,
                      alignSelf: "stretch",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

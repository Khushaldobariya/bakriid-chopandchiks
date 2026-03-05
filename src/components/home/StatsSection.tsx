import Image from "next/image";

export default function TrustSection() {
  return (
    <section style={{ background: "#fff", padding: "60px 88px" }}>
      <div style={{ maxWidth: "1336px", margin: "0 auto", display: "flex", justifyContent: "center" }}>
        <Image
          src="/images/Frame 1437253421.png"
          alt="100% Shariah, Hygienic, Doorstep delivery"
          width={1336}
          height={200}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
    </section>
  );
}

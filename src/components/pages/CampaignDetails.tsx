import { useParams, useNavigate } from "react-router-dom";
import { campaignsData } from "../data/campaigns";
import { Button } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';

const CampaignDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

const campaign = campaignsData.find(c => c.id === Number(id));

  if (!campaign) {
    return <div style={{ padding: "100px", textAlign: "center", fontSize: "24px" }}>
      Campaign not found
    </div>;
  }

  return (
    <div style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>
      {/* Hero */}
      <div style={{
        height: "65vh",
        backgroundImage: `url(${campaign.heroImage || '/assets/default.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "flex-end"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div style={{ position: "relative", padding: "0 60px 60px", color: "white", zIndex: 2 }}>
          <h1 style={{ fontSize: "48px", fontWeight: 700 }}>{campaign.title}</h1>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" }}>

        {/* STORY */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>বিস্তারিত বিবরণ</h2>

          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#334155", whiteSpace: "pre-line" }}>
            {campaign.narration}
          </p>
        </section>

        {/* IMAGE GALLERY */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>ছবির গ্যালারি</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}>
            {campaign.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="gallery"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
              />
            ))}
          </div>
        </section>

        {/* IMPACT */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>প্রভাব</h2>

          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#334155", whiteSpace: "pre-line" }}>
            {campaign.impact}
          </p>
        </section>

        {/* CTA */}
        <div style={{
          background: "#2f8277",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          color: "white"
        }}>
          <h2 style={{ marginBottom: "20px" }}>আপনিও অংশগ্রহণ করুন</h2>

          <Button size="large" style={{ background: "white", color: "#2f8277" }}>
            অনুদান দিন
          </Button>
        </div>

        {/* BACK */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Button onClick={() => navigate("/")}>
            ← ফিরে যান
          </Button>
        </div>

      </div>
    </div>
  );
};

export default CampaignDetails;

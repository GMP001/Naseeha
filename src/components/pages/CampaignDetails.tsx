import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import DonationModal from './../DonationModal';

const CampaignDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Define campaign type
  interface Campaign {
    id: number;
    title: string;
    description: string;
    amount: string;
    heroImage: string;
    images: string[];
    narration?: string;
    impact?: string;
  }

  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    const savedCampaigns = localStorage.getItem('naseeha-campaigns');
    if (savedCampaigns) {
      const campaigns: Campaign[] = JSON.parse(savedCampaigns);
      const found = campaigns.find((c: Campaign) => c.id === Number(id));
      setCampaign(found || null);
    }
  }, [id]);

  if (!campaign) {
    return <div style={{ padding: "100px", textAlign: "center", fontSize: "24px" }}>
      Loading...
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
            {campaign.narration || campaign.description}
          </p>
        </section>

        {/* IMAGE GALLERY */}
        {campaign.images && campaign.images.length > 0 && (
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>ছবির গ্যালারি</h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}>
              {campaign.images.map((img: string, index: number) => (
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
        )}

        {/* IMPACT */}
        {campaign.impact && (
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>প্রভাব</h2>

            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#334155", whiteSpace: "pre-line" }}>
              {campaign.impact}
            </p>
          </section>
        )}

        {/* CTA */}
        <div style={{
          background: "#2f8277",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          color: "white"
        }}>
          <h2 style={{ marginBottom: "20px" }}>আপনিও অংশগ্রহণ করুন</h2>

          <Button 
          size="large" 
          style={{ background: "white", color: "#2f8277" }}
          onClick={() => setIsModalOpen(true)} 
          >
            অনুদান দিন
          </Button>
        </div>

        {/* BACK */}
        <div style={{ marginTop: "40px", textAlign: "center", paddingBottom: "50px"  }}>
          <Button onClick={() => navigate("/")}>
            ← ফিরে যান
          </Button>
        </div>
      </div>
      <DonationModal 
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
    </div>
  );
};

export default CampaignDetails;

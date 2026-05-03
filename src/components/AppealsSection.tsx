// src/components/AppealsSection.tsx
import React from 'react';
import { Button } from 'antd';
import { HeartOutlined, ArrowRightOutlined } from '@ant-design/icons';

const appeals = [
  {
    title: "কুরবানি ২০২৬",
    subtitle: "বাংলাদেশ",
    desc: "পুরো গরু ৮০,০০০ টাকা | গরুর অংশ ১২,০০০ টাকা | ছোট পশু ১২,০০০ টাকা",
    image: "/assets/appeal-qurbani.jpg",
    color: "#0f766e",
  },
  {
    title: "প্রজেক্ট বারাকাহ",
    subtitle: "মসজিদ প্রকল্প",
    desc: "মসজিদ তাহা সম্প্রসারণ প্রকল্প। শিক্ষা ও সম্প্রদায় উন্নয়ন কেন্দ্র।",
    image: "/assets/appeal-masjid.jpg",
    color: "#166534",
  },
  {
    title: "হ্যান্ড পাম্প প্রকল্প",
    subtitle: "পানি প্রকল্প ২০২৬",
    desc: "প্রতি ২৫,০০০ টাকায় একটি হ্যান্ড পাম্প — ৪০টি পরিবারকে বিশুদ্ধ পানি সরবরাহ।",
    image: "/assets/appeal-water.jpg",
    color: "#1e40af",
  },
  {
    title: "ওয়াকফ ফান্ড",
    subtitle: "স্থায়ী দান",
    desc: "একবার দান করুন, সারাজীবন সওয়াব পান। চলমান দাতব্য কাজের জন্য স্থায়ী তহবিল।",
    image: "/assets/appeal-waqf.jpg",
    color: "#9f1239",
  },
];

const AppealsSection: React.FC = () => {
  return (
    <section style={{ padding: '100px 60px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '42px', color: '#1e2937', fontWeight: 700, marginBottom: '12px' }}>
            একটি আবেদন বেছে নিন
          </h2>
          <p style={{ fontSize: '20px', color: '#475569' }}>
            আপনার হৃদয়ের কাছাকাছি একটি কারণ বেছে নিন এবং আজই পরিবর্তন আনুন
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {appeals.map((appeal, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                border: '2px solid transparent',        // Default: transparent
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'translateY(-8px)';
                card.style.borderColor = '#2f8277e7';           // Theme color on hover
                card.style.boxShadow = '0 15px 35px rgba(47, 130, 119, 0.18)';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'translateY(0)';
                card.style.borderColor = 'transparent';
                card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ height: '220px', position: 'relative' }}>
                <img
                  src={appeal.image}
                  alt={appeal.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '24px', color: appeal.color, marginBottom: '8px' }}>
                  {appeal.title}
                </h3>
                <p style={{ color: '#64748b', fontWeight: 500, marginBottom: '12px' }}>
                  {appeal.subtitle}
                </p>
                <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
                  {appeal.desc}
                </p>

                <Button
                  type="primary"
                  block
                  icon={<HeartOutlined />}
                  style={{
                    height: '52px',
                    borderRadius: '50px',
                    fontSize: '17px',
                    backgroundColor: appeal.color,
                  }}
                >
                  অনুদান দিন
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Button
            size="large"
            style={{
              borderRadius: '50px',
              padding: '12px 40px',
              fontSize: '18px',
              borderColor: '#2f8277',
              color: '#2f8277',
            }}
          >
            আরও আবেদন দেখুন <ArrowRightOutlined />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppealsSection;

import React from 'react';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const appeals = [
  {
    id: 1,
    title: "কুরবানি ২০২৬",
    description: "পুরো গরু ৮০,০০০ টাকা | গরুর অংশ ১২,০০০ টাকা | ছোট পশু ১২,০০০ টাকা",
    image: "/assets/campaign-qurbani.png",   // Change to your image
  },
  {
    id: 2,
    title: "প্রজেক্ট বারাকাহ",
    description: "মসজিদ তাহা সম্প্রসারণ প্রকল্প। শিক্ষা ও সম্প্রদায় উন্নয়ন কেন্দ্র।",
    image: "/assets/project-barakah.jpg",
  },
  {
    id: 3,
    title: "হ্যান্ড পাম্প প্রকল্প",
    description: "প্রতি ২৫,০০০ টাকায় একটি হ্যান্ড পাম্প — ৪০টি পরিবারকে বিশুদ্ধ পানি সরবরাহ।",
    image: "/assets/Naseeha-Foundation-Hand-Pump.png",
  },
  {
    id: 4,
    title: "ওয়াকফ ফান্ড",
    description: "স্থায়ী দান — চলমান প্রকল্পের জন্য স্থায়ী তহবিল গঠন।",
    image: "/assets/waqf-fund.jpg",
  },
];

const AppealsSection: React.FC = () => {
  return (
    <section style={{ padding: '80px 60px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#1f2937' }}>
            একটি আবেদন বেছে নিন
          </h2>
          <p style={{ fontSize: '20px', color: '#4b5563', marginTop: '12px' }}>
            আপনার হৃদয়ের কাছাকাছি একটি কারণ বেছে নিন এবং আজই পরিবর্তন আনুন
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {appeals.map((appeal) => (
            <div
              key={appeal.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={appeal.image}
                alt={appeal.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />

              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#1f2937' }}>
                  {appeal.title}
                </h3>
                <p style={{ color: '#555', lineHeight: '1.6', minHeight: '80px' }}>
                  {appeal.description}
                </p>

                <Button
                  type="primary"
                  block
                  style={{
                    height: '52px',
                    borderRadius: '50px',
                    fontSize: '17px',
                    marginTop: '16px',
                    backgroundColor: '#2f8277'
                  }}
                >
                  <HeartOutlined /> অনুদান দিন
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppealsSection;

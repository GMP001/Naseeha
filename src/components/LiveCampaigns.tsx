// src/components/LiveCampaigns.tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const campaigns = [
  {
    id: 1,
    title: "কুরবানি ২০২৬",
    tag: "কুরবানি • যিলহজ্জ ১৪৪৭",
    image: "/assets/campaign-qurbani.jpg", // Put your images here
    description: "ঈদুল আযহায় পবিত্র কুরবানি সম্পন্ন করুন। প্রতিটি পশু বাংলাদেশে সোর্স করে দরিদ্র পরিবারের কাছে পৌঁছে দেওয়া হয়।",
    amount: "ছোট পশু ১২,০০০ টাকা | বড় পশু ৮০,০০০ টাকা",
  },
  {
    id: 2,
    title: "হ্যান্ড পাম্প প্রকল্প",
    tag: "পানি • ২০২৬",
    image: "/assets/campaign-water.jpg",
    description: "প্রতি ২৫,০০০ টাকায় একটি সম্পূর্ণ হ্যান্ড পাম্প তৈরি করা হয়, যা প্রায় ৪০টি পরিবারকে বিশুদ্ধ পানি সরবরাহ করে।",
    amount: "একটি হ্যান্ড পাম্প = ২৫,০০০ টাকা",
  },
  {
    id: 3,
    title: "প্রজেক্ট বারাকাহ",
    tag: "মসজিদ প্রকল্প",
    image: "/assets/campaign-masjid.jpg",
    description: "মসজিদ তাহা সম্প্রসারণ প্রকল্প। শিক্ষা, ইবাদত ও সম্প্রদায় উন্নয়নের জন্য একটি সমৃদ্ধ কেন্দ্র গড়ে তোলা হচ্ছে।",
    amount: "মোট প্রকল্প মূল্য: ৩ কোটি টাকা",
  },
];

const LiveCampaigns: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % campaigns.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + campaigns.length) % campaigns.length);

  const campaign = campaigns[currentIndex];

  return (
    <section style={{ padding: '80px 60px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '42px', color: '#2f8277', fontWeight: 700, marginBottom: '12px' }}>
            চলমান ক্যাম্পেইন
          </h2>
          <p style={{ fontSize: '20px', color: '#475569' }}>
            আমাদের গুরুত্বপূর্ণ উদ্যোগগুলোতে সাহায্য করুন
          </p>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          display: 'flex',
          minHeight: '520px',
        }}>
          {/* Left - Image */}
          <div style={{ flex: '1', position: 'relative' }}>
            <img
              src={campaign.image}
              alt={campaign.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'white',
              padding: '6px 16px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {campaign.tag}
            </div>
          </div>

          {/* Right - Content */}
          <div style={{ flex: '1', padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '32px', color: '#2f8277', marginBottom: '16px' }}>
              {campaign.title}
            </h3>

            <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#334155', marginBottom: '24px' }}>
              {campaign.description}
            </p>

            <p style={{ fontSize: '17px', fontWeight: 600, color: '#2f8277', marginBottom: '40px' }}>
              {campaign.amount}
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Button
                type="primary"
                size="large"
                style={{ borderRadius: '50px', padding: '0 32px', height: '52px', fontSize: '17px' }}
              >
                অনুদান দিন →
              </Button>
              <Button
                size="large"
                style={{ borderRadius: '50px', padding: '0 32px', height: '52px', fontSize: '17px', borderColor: '#2f8277', color: '#2f8277' }}
              >
                বিস্তারিত দেখুন
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows & Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '30px' }}>
          <Button 
            shape="circle" 
            icon={<LeftOutlined />} 
            onClick={prev}
            style={{ width: '48px', height: '48px' }}
          />
          
          {campaigns.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? '14px' : '10px',
                height: idx === currentIndex ? '14px' : '10px',
                borderRadius: '50%',
                background: idx === currentIndex ? '#2f8277' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            />
          ))}

          <Button 
            shape="circle" 
            icon={<RightOutlined />} 
            onClick={next}
            style={{ width: '48px', height: '48px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default LiveCampaigns;

// src/components/WhatWeDo.tsx
import React from 'react';
import { Card } from 'antd';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      title: "দুর্যোগ সাহায্য",
      desc: "বন্যা, ঘূর্ণিঝড় ও দুর্যোগ কবলিত এলাকায় খাদ্য, পানি ও জরুরি সাহায্য পৌঁছে দেওয়া।",
      icon: "🌍",
    },
    {
      title: "মসজিদ ও মাদরাসা",
      desc: "দেশের বিভিন্ন জেলায় মসজিদ, মাদরাসা নির্মাণ ও সংস্কার কাজে সহায়তা প্রদান।",
      icon: "🕌",
    },
    {
      title: "শিক্ষা ও এতিম প্রকল্প",
      desc: "দরিদ্র ও এতিম শিশুদের শিক্ষা, থাকা-খাওয়া এবং সার্বিক সহায়তা প্রদান।",
      icon: "📚",
    },
    {
      title: "স্বাস্থ্যসেবা",
      desc: "চিকিৎসা সাহায্য, মেডিকেল ক্যাম্প এবং দরিদ্র রোগীদের জন্য চিকিৎসা ব্যয় বহন।",
      icon: "🏥",
    },
    {
    title: "বয়স্ক শিক্ষা কার্যক্রম",
    desc: "সমাজের প্রবীণ ব্যক্তিদের সঠিক ইসলামী জ্ঞান অর্জনের সুবিধার্থে নাসীহা ফাউন্ডেশন আয়োজন করছে এক বছর মেয়াদী ডিপ্লোমা ইন বেসিক ইসলামিক স্টাডিজ।",
    icon: "📖",
  },
  {
    title: "মাদরাসাতুন নাসীহা",
    desc: "নাসীহা ফাউন্ডেশনের একটি স্বপ্ন সম্পূর্ণ শিক্ষা প্রতিষ্ঠান। এই প্রতিষ্ঠানের মাধ্যমে আমরা শিশুদের আরবি ও ইংরেজি মাধ্যমে শিক্ষা দিয়ে আদর্শ মুসলিম হিসেবে গড়ে তুলতে চাই।",
    icon: "🏫",
  },
  ];

  return (
    <section style={{ padding: '80px 60px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            color: '#2f8277', 
            fontWeight: 700, 
            marginBottom: '16px' 
          }}>
            আমরা যা করি
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            নাসীহা ফাউন্ডেসান বাংলাদেশের একটি নিবন্ধিত দাতব্য প্রতিষ্ঠান যা দেশজুড়ে মানবসেবামূলক কাজ করে যাচ্ছে।
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
        }}>
          {services.map((service, index) => (
            <Card
              key={index}
              style={{
                borderRadius: '16px',
                padding: '20px 10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '2px solid transparent',
                height: '100%',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
              }}
              bodyStyle={{ padding: '32px 24px' }}
              onMouseEnter={(e) => {
                const card = e.currentTarget as HTMLElement;
                card.style.transform = 'scale(1.06)';
                card.style.borderColor = '#2f8277e7';
                card.style.boxShadow = '0 15px 35px rgba(47, 130, 119, 0.15)';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget as HTMLElement;
                card.style.transform = 'scale(1)';
                card.style.borderColor = 'transparent';
                card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
              }}
            >
              <div style={{ 
                fontSize: '48px', 
                textAlign: 'center', 
                marginBottom: '20px' 
              }}>
                {service.icon}
              </div>
              
              <h3 style={{ 
                textAlign: 'center', 
                color: '#2f8277', 
                fontSize: '24px', 
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                textAlign: 'center', 
                color: '#475569', 
                fontSize: '16px', 
                lineHeight: '1.7'
              }}>
                {service.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

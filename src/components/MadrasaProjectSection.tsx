import React from 'react';
import { Button } from 'antd';
import { CalendarOutlined, HomeOutlined, AimOutlined } from '@ant-design/icons';

const MadrasaProjectSection: React.FC = () => {
  return (
    <section style={{ 
      padding: '100px 60px', 
      backgroundColor: '#f8fafc',
      textAlign: 'center' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ 
          fontSize: '42px', 
          color: '#1f2937', 
          fontWeight: 700,
          marginBottom: '16px'
        }}>
          মাদরাসাতুস নাসীহা প্রকল্প
        </h2>

        <p style={{ 
          fontSize: '20px', 
          color: '#4b5563',
          maxWidth: '800px',
          margin: '0 auto 60px'
        }}>
          নাসীহা ফাউন্ডেশনের অন্যতম প্রধান প্রকল্প। আমরা একটি আধুনিক ও মানসম্মত মাদরাসা প্রতিষ্ঠা করছি যেখানে শিশু-কিশোররা কুরআন, হাদিস ও আধুনিক শিক্ষা একসাথে গ্রহণ করতে পারবে।
        </p>

        {/* Timeline */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-start',
          gap: '60px',
          position: 'relative',
          marginBottom: '70px'
        }}>
          
          {/* Line */}
          <div style={{
            position: 'absolute',
            top: '45px',
            left: '15%',
            right: '15%',
            height: '3px',
            background: '#e5f0eb',
            zIndex: 1
          }} />

          {/* Milestone 1 */}
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '280px' }}>
            <div style={{
              width: '90px',
              height: '90px',
              background: '#2f8277',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 10px 20px rgba(47, 130, 119, 0.3)'
            }}>
              <HomeOutlined style={{ fontSize: '42px', color: 'white' }} />
            </div>
            <div style={{ background: '#e5f0eb', display: 'inline-block', padding: '4px 16px', borderRadius: '30px', fontSize: '14px', marginBottom: '12px' }}>
              জানুয়ারি ২০২৫
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1f2937' }}>জমি অধিগ্রহণ</h3>
            <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
              মাদরাসার জন্য জমি ক্রয় সম্পন্ন হয়েছে। প্রকল্পের প্রথম ধাপ সফলভাবে সম্পন্ন।
            </p>
          </div>

          {/* Milestone 2 */}
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '280px' }}>
            <div style={{
              width: '90px',
              height: '90px',
              background: '#2f8277',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 10px 20px rgba(47, 130, 119, 0.3)'
            }}>
              <CalendarOutlined style={{ fontSize: '42px', color: 'white' }} />
            </div>
            <div style={{ background: '#e5f0eb', display: 'inline-block', padding: '4px 16px', borderRadius: '30px', fontSize: '14px', marginBottom: '12px' }}>
              অক্টোবর ২০২৫
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1f2937' }}>নির্মাণ কাজ শুরু</h3>
            <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
              মাদরাসা ভবন নির্মাণের প্রাথমিক কাজ শুরু হয়েছে। বর্তমানে ভিত্তি স্থাপন চলছে।
            </p>
          </div>

          {/* Milestone 3 */}
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '280px' }}>
            <div style={{
              width: '90px',
              height: '90px',
              background: '#2f8277',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 10px 20px rgba(47, 130, 119, 0.3)'
            }}>
              <AimOutlined style={{ fontSize: '42px', color: 'white' }} />
            </div>
            <div style={{ background: '#e5f0eb', display: 'inline-block', padding: '4px 16px', borderRadius: '30px', fontSize: '14px', marginBottom: '12px' }}>
              ডিসেম্বর ২০২৬
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1f2937' }}>২.৮ কোটি টাকার টার্গেট</h3>
            <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
              পুরো প্রকল্প সম্পন্ন করতে আমাদের লক্ষ্য ২.৮ কোটি টাকা। আপনাদের সাহায্যে এই স্বপ্ন পূরণ করতে চাই।
            </p>
          </div>
        </div>

        {/* Big Button */}
        <Button 
          type="primary" 
          size="large"
          style={{ 
            height: '62px', 
            fontSize: '19px', 
            padding: '0 50px',
            borderRadius: '50px',
            backgroundColor: '#2f8277'
          }}
        >
          মাদরাসাতুস নাসীহা প্রকল্পে অনুদান দিন →
        </Button>

      </div>
    </section>
  );
};

export default MadrasaProjectSection;

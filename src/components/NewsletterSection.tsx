import React from 'react';
import { Button, Input, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubscribe = () => {
    if (!email) {
      message.warning('অনুগ্রহ করে ইমেইল দিন');
      return;
    }

    setLoading(true);
    
    // Simulate subscription
    setTimeout(() => {
      message.success('🎉 সাবস্ক্রাইব সফল হয়েছে! ধন্যবাদ');
      setEmail('');
      setLoading(false);
    }, 800);
  };

  return (
    <section style={{ 
      padding: '100px 60px', 
      backgroundColor: '#f8f1e9', 
      textAlign: 'center' 
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '30px' }}>
          <MailOutlined style={{ fontSize: '52px', color: '#2f8277' }} />
        </div>

        <h2 style={{ 
          fontSize: '42px', 
          fontWeight: 700, 
          color: '#2f8277',
          marginBottom: '16px'
        }}>
          নাসীহা ফাউন্ডেশনের সাথে যুক্ত থাকুন
        </h2>

        <p style={{ 
          fontSize: '20px', 
          color: '#4b5563',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          আমাদের প্রকল্প, ক্যাম্পেইন এবং সেবামূলক কার্যক্রমের আপডেট পেতে মেইলিং লিস্টে যোগ দিন
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          maxWidth: '480px', 
          margin: '0 auto',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Input
            size="large"
            placeholder="আপনার ইমেইল ঠিকানা দিন"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              height: '58px', 
              borderRadius: '50px',
              fontSize: '17px',
              minWidth: '280px'
            }}
            onPressEnter={handleSubscribe}
          />

          <Button 
            type="primary" 
            size="large"
            loading={loading}
            onClick={handleSubscribe}
            style={{ 
              height: '58px', 
              borderRadius: '50px',
              padding: '0 40px',
              fontSize: '18px',
              fontWeight: 600,
              backgroundColor: '#2f8277'
            }}
          >
            সাবস্ক্রাইব করুন
          </Button>
        </div>

        <p style={{ 
          marginTop: '24px', 
          color: '#888', 
          fontSize: '15px' 
        }}>
          আপনার গোপনীয়তা আমরা সম্মান করি। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;


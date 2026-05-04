import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const ADMIN_PASSWORD = "naseeha2026";   // ← Change this to your desired password

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: { password: string }) => {
    setLoading(true);
    
    if (values.password === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuthenticated', 'true');
      message.success('স্বাগতম! অ্যাডমিন প্যানেলে প্রবেশ করা হয়েছে');
      onLoginSuccess();
    } else {
      message.error('ভুল পাসওয়ার্ড! আবার চেষ্টা করুন');
    }
    
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #2f8277 0%, #1a5c53 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '50px 40px',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '420px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#2f8277', marginBottom: '10px' }}>অ্যাডমিন লগইন</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>নাসীহা ফাউন্ডেশন</p>

        <Form onFinish={handleSubmit}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'পাসওয়ার্ড দিন' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="পাসওয়ার্ড দিন"
              size="large"
            />
          </Form.Item>

          <Button 
            type="primary" 
            htmlType="submit" 
            size="large"
            loading={loading}
            block
            style={{ height: '52px', fontSize: '18px' }}
          >
            লগইন করুন
          </Button>
        </Form>

        <p style={{ marginTop: '20px', color: '#999', fontSize: '14px' }}>
          ডিফল্ট পাসওয়ার্ড: <strong>naseeha2026</strong>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;

// src/components/QuickDonateBar.tsx
import React, { useState, useEffect } from 'react';
import { Button, Select, Input } from 'antd';
import { HeartOutlined, CloseOutlined } from '@ant-design/icons';

const { Option } = Select;

const QuickDonateBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Detect when user is near the bottom (above footer)
      if (scrollPosition >= documentHeight - 300) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(47, 130, 119, 0.95)', // Pale green with good visibility
        padding: '10px 30px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 1000,
        boxShadow: '0 -4px 12px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Quick Donate Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontWeight: 600, minWidth: '80px' }}>
        <HeartOutlined style={{ fontSize: '22px' }} />
        <span>দ্রুত দান</span>
      </div>

      {/* Type Dropdown */}
      <Select 
        defaultValue="general" 
        style={{ 
          width: 120, 
          borderRadius: '50px', 
          height: '40px', 
          minWidth: '120px', 
          fontSize: '14px', 
          backgroundColor: '#2f8277',
          color: '#cdcfce',
          transition: 'all 0.3s ease',
          transform: 'scale(1)',
          paddingLeft: '16px',           // Added left padding
        }}
        dropdownStyle={{ borderRadius: '12px' }}
        suffixIcon={<span style={{ color: 'white' }}>▼</span>}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <Option value="general">প্রকার</Option>
        <Option value="zakat">জাকাত</Option>
        <Option value="qurbani">কুরবানি</Option>
        <Option value="education">শিক্ষা</Option>
        <Option value="food">খাদ্য সাহাজ্য</Option>
      </Select>

      {/* Campaign Dropdown */}
      <Select 
        defaultValue="emergency" 
        style={{ 
          width: 140, 
          borderRadius: '50px', 
          height: '40px', 
          minWidth: '140px', 
          fontSize: '14px', 
          backgroundColor: '#2f8277',
          color: '#cdcfce',
          transition: 'all 0.3s ease',
          transform: 'scale(1)',
          paddingLeft: '16px',           // Added left padding
        }}
        dropdownStyle={{ borderRadius: '12px' }}
        suffixIcon={<span style={{ color: 'white' }}>▼</span>}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <Option value="emergency">প্রচারণা</Option>
        <Option value="ramadan">রমজানে সাহাজ্য</Option>
        <Option value="qurbani2026">কুরবানি ২০২৬</Option>
        <Option value="orphan">এতিমের যত্ন</Option>
      </Select>

      {/* Amount Input Field */}
      <div style={{ 
        display: 'flex', 
        height: '40px', 
        minWidth: '160px', 
        alignItems: 'center', 
        background: '#2f8277',
        borderRadius: '50px', 
        padding: '4px 12px',
        color: '#cdcfce',
        border: '1px solid rgba(145, 144, 144, 0.6)',
      }}>
        <span style={{ color: '#cdcfce', marginRight: '4px', fontSize: '14px' }}>৳</span>
        <Input
          placeholder="পরিমাণ"
          style={{
            border: 'none',
            width: '100px',
            boxShadow: 'none',
            background: 'transparent',
            color: '#cdcfce',
            fontSize: '14px',
          }}
          type="number"
        />
      </div>

      {/* Donate Button */}
      <Button
        type="primary"
        style={{
          height: '40px',
          minWidth: '100px',
          background: 'white',
          color: '#2f8277',
          borderRadius: '50px',
          padding: '0 22px',
          fontWeight: 500,
          fontSize: '14px',
          transition: 'all 0.3s ease',
          transform: 'scale(1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        এখন দান করুন
      </Button>

      {/* Close Button - Only show when NOT at bottom */}
      {!isAtBottom && (
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={handleClose}
          style={{
            position: 'absolute',
            right: '20px',
            top: '12px',
            color: 'white',
            fontSize: '18px',
          }}
        />
      )}
    </div>
  );
};

export default QuickDonateBar;

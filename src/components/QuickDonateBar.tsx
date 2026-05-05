// src/components/QuickDonateBar.tsx
import React, { useState, useEffect } from 'react';
import { Button, Select, Input } from 'antd';
import { HeartOutlined, CloseOutlined } from '@ant-design/icons';

const { Option } = Select;

interface QuickDonateBarProps {
  onDonateClick?: () => void;     // ← Added this
}

const QuickDonateBar: React.FC<QuickDonateBarProps> = ({ onDonateClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

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

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(47, 130, 119, 0.95)',
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
        style={{ width: 120, borderRadius: '50px', height: '40px', backgroundColor: '#2b8478e7', color: '#cdcfce' }}
      >
        <Option value="general">প্রকার</Option>
        <Option value="zakat">জাকাত</Option>
        <Option value="qurbani">কুরবানি</Option>
        <Option value="education">শিক্ষা</Option>
      </Select>

      {/* Campaign Dropdown */}
      <Select 
        defaultValue="emergency" 
        style={{ width: 140, borderRadius: '50px', height: '40px', backgroundColor: '#2b8478e7', color: '#cdcfce' }}
      >
        <Option value="emergency">ক্যাম্পেইন</Option>
        <Option value="qurbani2026">কুরবানি ২০২৬</Option>
      </Select>

      {/* Amount Input */}
      <div style={{ 
        display: 'flex', 
        height: '40px', 
        alignItems: 'center', 
        background: '#2f8277',
        borderRadius: '50px', 
        padding: '4px 12px',
        color: '#cdcfce',
      }}>
        <span style={{ marginRight: '4px' }}>৳</span>
        <Input
          placeholder="পরিমাণ"
          style={{ border: 'none', width: '100px', background: 'transparent', color: '#cdcfce' }}
          type="number"
        />
      </div>

      {/* Donate Button - Now connected */}
      <Button
        type="primary"
        style={{
          height: '40px',
          minWidth: '110px',
          background: 'white',
          color: '#2f8277',
          borderRadius: '50px',
          fontWeight: 600,
        }}
        onClick={onDonateClick}     // ← This was missing
      >
        এখন দান করুন
      </Button>

      {/* Close Button */}
      {!isAtBottom && (
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={handleClose}
          style={{ position: 'absolute', right: '20px', top: '12px', color: 'white' }}
        />
      )}
    </div>
  );
};

export default QuickDonateBar;


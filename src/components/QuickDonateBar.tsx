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
        padding: '14px 40px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        zIndex: 1000,
        boxShadow: '0 -4px 12px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Quick Donate Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontWeight: 600, minWidth: '160px' }}>
        <HeartOutlined style={{ fontSize: '22px' }} />
        <span>Quick Donate</span>
      </div>

      {/* Type Dropdown */}
      <Select 
        defaultValue="general" 
        style={{ 
          width: 140, 
          borderRadius: '50px', 
          height: '50px', 
          minWidth: '140px', 
          fontSize: '18px', 
          backgroundColor: '#2f8277',
          color: 'white',
          transition: 'all 0.3s ease',
          transform: 'scale(1)',
        }}
        dropdownStyle={{ borderRadius: '12px' }}
        suffixIcon={<span style={{ color: 'white' }}>▼</span>}   // White dropdown arrow
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <Option value="general">Type</Option>
        <Option value="zakat">Zakat</Option>
        <Option value="qurbani">Qurbani</Option>
        <Option value="education">Education</Option>
        <Option value="food">Food Aid</Option>
      </Select>

      {/* Campaign Dropdown */}
      <Select 
        defaultValue="emergency" 
        style={{ 
          width: 160, 
          borderRadius: '50px', 
          height: '50px', 
          minWidth: '160px', 
          fontSize: '18px', 
          backgroundColor: '#2f8277',
          color: 'white',
          transition: 'all 0.3s ease',
          transform: 'scale(1)',
        }}
        dropdownStyle={{ borderRadius: '12px' }}
        suffixIcon={<span style={{ color: 'white' }}>▼</span>}   // White dropdown arrow
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <Option value="emergency">Campaign</Option>
        <Option value="ramadan">Ramadan Relief</Option>
        <Option value="qurbani2026">Qurbani 2026</Option>
        <Option value="orphan">Orphan Care</Option>
      </Select>

      {/* Amount Input Field */}
      <div style={{ 
        display: 'flex', 
        height: '50px', 
        minWidth: '160px', 
        alignItems: 'center', 
        background: '#2f8277',
        borderRadius: '50px', 
        padding: '4px 12px',
        color: 'white',
        border: '2px solid rgba(255, 255, 255, 0.6)',
      }}>
        <span style={{ color: 'white', fontWeight: 'bold', marginRight: '8px', fontSize: '18px' }}>৳</span>
        <Input
          placeholder="Amount"
          style={{
            border: 'none',
            width: '120px',
            boxShadow: 'none',
            background: 'transparent',
            color: 'white',
            fontSize: '16px',
          }}
          type="number"
        />
      </div>

      {/* Donate Button */}
      <Button
        type="primary"
        style={{
          height: '50px',
          minWidth: '160px',
          background: 'white',
          color: '#2f8277',
          borderRadius: '50px',
          padding: '0 32px',
          fontWeight: 700,
          fontSize: '16px',
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
        Donate Now
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

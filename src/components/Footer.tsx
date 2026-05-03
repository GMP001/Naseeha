import React from 'react';
import { Button } from 'antd';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#2f8277e7', color: 'white', padding: '80px 40px 40px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px' }}>
        
        {/* Left - Logo + Description + Contact */}
        <div>
          <img src="/naseeha-foundation-logo-white.png" alt="Naseeha Foundation" style={{ width: '68px', height: '68px' }} />
          <p style={{ marginTop: '20px', opacity: 0.9, lineHeight: '1.7' }}>
            নসীহা ফাউন্ডেসন সারা বাংলাদেশে টেকসই ও মানবিক সহায়তা প্রকল্পের মাধ্যমে, দারিদ্র্য ও দুর্ভোগ কমাতে প্রতিশ্রুতিবদ্ধ।
          </p>
          <div style={{ marginTop: '30px' }}>
            <p><strong>মোবাইল:</strong> +৮৮০১৩১১০৬৬০৩৩</p>
            <p><strong>ইমেইল:</strong> info@naseehafoundation.net</p>
            <p><strong>ঠিকানা:</strong> হাউজ ৪, রোড ৫/এ, সেক্টর ৫, উত্তরা, ঢাকা ১২৩০, বাংলাদেশ</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: '24px', fontSize: '18px' }}>লিংক সমূহ</h4>
          <p>হোম</p>
          <p>আবেদন</p>
          <p>অনুদান দিন</p>
          <p>জাকাত ক্যাল্কুলেটর</p>
          <p>পরিচিতি</p>
          <p>যুক্ত হোন</p>
        </div>

        {/* Legal */}
        <div>
          <h4 style={{ marginBottom: '24px', fontSize: '18px' }}>আইন</h4>
          <p>গোপনীয়তা নীতি</p>
          <p>শর্তাবলী</p>
          <p>কুকীর নীতি</p>
          <p>সুরক্ষা নীতি</p>
        </div>

        {/* Bank / Others */}
        <div>
          <h4 style={{ marginBottom: '24px', fontSize: '18px' }}>ব্যাংক ট্র্যান্সফার</h4>
          <p><strong>নাসীহা ফাউন্ডেসন</strong></p>
          <p>ইসলামী ব্যাংক বাংলাদেশ লিমিটেড</p>
          <p>একাউন্ট: [আপনার একাউন্ট নাম্বার]</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '80px', opacity: 0.6, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '30px' }}>
        © ২০২৬ নাসীহা ফাউন্ডেসন। সকল অধিকার সংরক্ষিত।
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import "../index.css";

const Marquee: React.FC = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <span className="marquee-text">আল্লাহর সন্তুষ্টির জন্য দান করুন <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>
        <span className="marquee-text">নাসীহা ফাউন্ডেশনের সাথে কুরবানি দিন <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>
        <span className="marquee-text">নাসীহা ফাউন্ডেশনের উদ্যোগে আপনার সহায়তা দিন <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>
        <span className="marquee-text">কুরবানির সুন্নাহ, অসহায়দের জন্য স্বস্তির উপহার <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>
        <span className="marquee-text">কুরবানি ২০২৬-এর জন্য অনুদান গ্রহণ শুরু হয়েছে <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>

        {/* Duplicate for seamless loop */}
        <span className="marquee-text">আল্লাহর সন্তুষ্টির জন্য দান করুন <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>
        <span className="marquee-text">নাসীহা ফাউন্ডেশনের সাথে কুরবানি দিন <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>
        <span className="marquee-text">নাসীহা ফাউন্ডেশনের উদ্যোগে আপনার সহায়তা দিন <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>
        <span className="marquee-text">কুরবানির সুন্নাহ, অসহায়দের জন্য স্বস্তির উপহার <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>
        <span className="marquee-text">কুরবানি ২০২৬-এর জন্য অনুদান গ্রহণ শুরু হয়েছে <span style={{fontSize: '18px', margin: '0 30px'}}></span></span>
      </div>
    </div>
  );
};

export default Marquee;

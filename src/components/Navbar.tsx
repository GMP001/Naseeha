// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar completely when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 999,
          backgroundColor: 'rgba(47, 130, 119, 0.50)',   // Fixed 50% opacity
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 40px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          
          // Important fixes for consistent transparency
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)', // subtle separator
          background: 'rgba(47, 130, 119, 0.50) !important',
        }}
      >
      {/* Logo + Name */}
      <div
        style={{
          minWidth: '200px',
          marginRight: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <img
          src="/naseeha-foundation-logo-white.png"
          alt="Naseeha Foundation"
          style={{ width: '68px', height: '68px' }}
        />
        <div
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: '15px',
            whiteSpace: 'nowrap',
            letterSpacing: '0.5px',
          }}
        >
          নাসীহা ফাউন্ডেসান
        </div>
      </div>

      {/* Islamic Date */}
      <div
        style={{
          minWidth: '200px',
          marginRight: '60px',
          color: 'white',
          fontWeight: '500',
          fontSize: '19px',
          borderLeft: '2px solid rgba(255,255,255,0.7)',
          paddingLeft: '30px',
        }}
      >
        ১৫ই যিলকদ ১৪৪৭ হিজরি
      </div>

      {/* Menu Items */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          flex: 1,
          color: 'white',
          fontWeight: '500',
          fontSize: '17px',
        }}
      >
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          হোম
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          আবেদন ▼
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          জাকাত
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          অনুদান সংগ্রহ
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          অনুষ্ঠান
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          যুক্ত হোন
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          পরিচিতি
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          চাকরী
        </a>

        <Button
          type="primary"
          style={{
            background: 'white',
            color: '#2f8277',
            borderRadius: '50px',
            fontWeight: '700',
            padding: '12px 32px',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          অনুদান দিন ❤️
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;













// //E:/naseeha-foundation/naseeha-foundation/src/components/Navbar.tsx
// import React, { useState, useEffect } from 'react';
// import { Button } from 'antd';

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setHidden(true);   // Scroll down → hide both
//       } else {
//         setHidden(false);  // Scroll up → show both
//       }
      
//       setScrolled(currentScrollY > 20);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   return (
//         <nav style={{
//           position: 'sticky',
//           top: 0,
//           zIndex: 999,
//           backgroundColor: 'rgba(47, 130, 119, 0.8)',        // ← Your requested color + 50% opacity
//           height: scrolled ? '70px' : '100px',
//           display: 'flex',
//           alignItems: 'center',
//           padding: '0 40px',
//           transition: 'all 0.4s ease',
//           transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
//           boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
//         }}>
//       {/* Logo + Name */}
//       <div style={{ minWidth: '120px', marginRight: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
//         <img src="/naseeha-foundation-logo-white.png" alt="Naseeha Foundation" style={{ width: '68px', height: '68px' }} />
//         <div style={{ color: 'white', fontWeight: '400', fontSize: '15px', whiteSpace: 'nowrap' }}>
//           নাসীহা ফাউন্ডেসান
//         </div>
//       </div>

//       {/* Islamic Date - English only */}
//       <div style={{ minWidth: '120px', marginRight: '80px', color: 'white', fontWeight: '400', fontSize: '20px', borderLeft: '2px solid rgba(255,255,255,0.8)', paddingLeft: '30px' }}>
//         ১৫ই যিলকদ ১৪৪৭ হিজরি
//       </div>

//       {/* Menu */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flex: 1, color: 'white', fontWeight: '400', fontSize: '18px' }}>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>হোম</a>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>আবেদন ▼</a>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>জাকাত</a>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>অনুদান সংগ্রহ</a>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>অনুষ্ঠান</a>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>যুক্ত হোন</a>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>পরিচিতি</a>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>চাকরী</a>
        
//         <Button type="primary" style={{ background: 'white', color: '#528e67', borderRadius: '50px', fontWeight: '700', padding: '12px 32px' }}>
//           অনুদান দিন ❤️
//         </Button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


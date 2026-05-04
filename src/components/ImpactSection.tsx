import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const impactStories = [
  {
    id: 1,
    tag: "Previous Appeal",
    title: "বাংলাদেশ অ্যাপিল - রমজান ২০২৬",
    image: "https://images.unsplash.com/photo-1582213782179-2c2f8f9c4b5e?w=800",
    description: "রমজানে আমরা বাংলাদেশের প্রত্যন্ত অঞ্চলে খাদ্য প্যাক, মেডিকেল সাহায্য এবং জরুরি ত্রাণ পৌঁছে দিয়েছি। আপনাদের দানের মাধ্যমে অনেক পরিবারের মুখে হাসি ফুটেছে।",
    detailPath: "/appeal/bangladesh-ramadan-2026"
  },
  {
    id: 2,
    tag: "Previous Appeal",
    title: "কুরবানি বিতরণ ২০২৫",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    description: "ঈদুল আজহায় আমরা সারা বাংলাদেশে দরিদ্র পরিবারের মাঝে কুরবানির মাংস বিতরণ করেছি। আপনাদের সাহায্যে অনেক অসহায় মানুষ আনন্দে ঈদ উদযাপন করতে পেরেছে।",
    detailPath: "/appeal/qurbani-2025"
  },
  {
    id: 3,
    tag: "Current Appeal",
    title: "Gaza Appeal - Ramadan 2026",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800",
    description: "Through your generosity, we delivered food, dignity packs, essentials and urgent medical care to families in Gaza.",
    detailPath: "/appeal/gaza-ramadan-2026"
  }
];

const ImpactSection: React.FC = () => {
  const navigate = useNavigate();

  const handleViewStory = (path: string) => {
    navigate(path);
  };

  return (
    <section style={{ padding: '100px 60px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            color: '#1f2937', 
            fontWeight: 700,
            marginBottom: '12px'
          }}>
            আমাদের প্রভাব
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: '#4b5563',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            দেশজুড়ে আমাদের প্রকল্পগুলো থেকে উঠে আসা পরিবর্তন ও প্রত্যাশার গল্প।
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))', 
          gap: '40px' 
        }}>
          
          {impactStories.map((story) => (
            <div 
              key={story.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img 
                src={story.image} 
                alt={story.title}
                style={{ 
                  width: '100%', 
                  height: '320px', 
                  objectFit: 'cover' 
                }} 
              />

              <div style={{ padding: '32px' }}>
                <span style={{
                  background: story.tag === "Current Appeal" ? '#e5f0eb' : '#f3f4f6',
                  color: story.tag === "Current Appeal" ? '#2f8277' : '#6b7280',
                  padding: '4px 14px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  {story.tag}
                </span>

                <h3 style={{ 
                  fontSize: '26px', 
                  margin: '20px 0 16px',
                  color: '#1f2937',
                  fontWeight: 700 
                }}>
                  {story.title}
                </h3>

                <p style={{ 
                  fontSize: '17px', 
                  lineHeight: '1.8', 
                  color: '#4b5563',
                  marginBottom: '28px'
                }}>
                  {story.description}
                </p>

                <Button 
                  type="link" 
                  onClick={() => handleViewStory(story.detailPath)}
                  style={{ 
                    padding: 0, 
                    fontSize: '17px', 
                    color: '#2f8277',
                    fontWeight: 600 
                  }}
                >
                  View Full Story <ArrowRightOutlined />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;


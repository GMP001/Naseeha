//E:/naseeha-foundation/naseeha-foundation/src/components/ImpactDetailPage.tsx

import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Collapse } from 'antd';
import { ArrowLeftOutlined, HeartOutlined, TeamOutlined, DollarOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';

const { Panel } = Collapse;

interface AppealData {
  id: string;
  title: string;
  tag: string;
  heroImage?: string;
  heroDescription: string;
  stats: {
    familiesSupported: string;
    peopleHelped: string;
    fundsRaised: string;
  };
  storyContent: string;
  aidCategories: Array<{ title: string; description: string; icon: string }>;
  faqs: Array<{ question: string; answer: string }>;
  trustStatement: string;
  partnerName: string;
  isActive: boolean;
  closingStatement: string;
}

const ImpactDetailPage: React.FC = () => {
  const { appealId } = useParams<{ appealId: string }>();
  const navigate = useNavigate();
  const [appealData, setAppealData] = useState<AppealData | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to get appeal from localStorage
const getAppealFromStorage = (slug: string): AppealData | null => {
  const savedAppeals = localStorage.getItem('naseeha-appeals');
  if (savedAppeals) {
    const appeals = JSON.parse(savedAppeals);
    const appeal = appeals.find((a: any) => a.slug === slug);
    if (appeal) {
      // Transform to match the component's expected shape
      return {
        id: appeal.id,
        title: appeal.title,
        tag: appeal.tag,
        heroImage: appeal.heroImage || '',
        heroDescription: appeal.heroDescription,
        stats: {
          familiesSupported: appeal.familiesSupported,
          peopleHelped: appeal.peopleHelped,
          fundsRaised: appeal.fundsRaised,
        },
        storyContent: appeal.storyContent,
        aidCategories: appeal.aidCategories,
        faqs: appeal.faqs,
        trustStatement: appeal.trustStatement,
        partnerName: appeal.partnerName,
        isActive: appeal.isActive,
        closingStatement: appeal.closingStatement,
      };
    }
  }
  return null;
};

  // Load appeal data from localStorage
  useEffect(() => {
    const loadAppeal = () => {
      setLoading(true);
      if (!appealId) {
        setLoading(false);
        return;
      }
      
      // First try to get from localStorage (admin panel)
      const storedAppeal = getAppealFromStorage(appealId);
      if (storedAppeal) {
        setAppealData(storedAppeal);
      } else {
        // Fallback to default data
        setAppealData(getFallbackData(appealId));
      }
      setLoading(false);
    };

    loadAppeal();
  }, [appealId]);


  const getFallbackData = (id: string): AppealData => {
    // Return different data based on appeal ID
    if (id === 'gaza-ramadan-2026') {
      return {
        id: 'gaza-ramadan-2026',
        title: 'Standing With Gaza This Ramadan',
        tag: 'Ramadan 2026 Appeal',
        heroImage: '',
        heroDescription: 'In the blessed month of Ramadan 2026, the Taha Foundation launched the Gaza Appeal in response to the worsening humanitarian crisis facing our brothers and sisters in Gaza.',
        stats: {
          familiesSupported: '5,000+',
          peopleHelped: '25,000+',
          fundsRaised: '£250K+'
        },
        storyContent: '<p>With families displaced, hospitals overwhelmed and basic supplies scarce, the urgency to act could not have been greater.</p><p>Through the generosity of donors across the UK and beyond, we partnered with <strong>Barakah Charity</strong> — a trusted organisation with established teams operating directly inside Gaza — to deliver food packs, dignity packs, essential household necessities, and urgent medical care to those most in need.</p><p style="font-style: italic; padding: 20px; background: #f0fdf4; border-radius: 12px; border-left: 4px solid #2f8277;">Every donation, no matter the size, contributed to easing the suffering of a family during the holiest month of the year. <strong>Jazakum Allahu Khairan</strong> to every donor, volunteer and supporter who stood with Gaza.</p>',
        aidCategories: [
          { title: 'Food Packs', description: 'Nutritious food parcels distributed to families facing severe shortages and displacement across Gaza.', icon: '🍲' },
          { title: 'Dignity Packs', description: 'Hygiene and dignity essentials delivered to women, children and the elderly during the most difficult conditions.', icon: '🧴' },
          { title: 'Essential Necessities', description: 'Blankets, clean water and core household items provided directly to those who lost everything.', icon: '🏠' },
          { title: 'Urgent Medical Care', description: 'Critical medical aid and supplies channelled to families through trusted partners on the ground.', icon: '🏥' }
        ],
        faqs: [
          {
            question: 'Who delivered the aid in Gaza?',
            answer: 'All distributions were carried out by our trusted partner Barakah Charity, with established teams operating directly on the ground in Gaza throughout Ramadan 2026.'
          },
          {
            question: 'What did the Ramadan 2026 Gaza Appeal cover?',
            answer: 'The appeal covered food packs, dignity packs for women and children, essential household necessities including blankets and clean water, and urgent medical care for displaced families.'
          },
          {
            question: 'Is the Gaza Appeal still open?',
            answer: 'The Ramadan 2026 Gaza Appeal has now closed, but our humanitarian mission continues. Please explore our current active appeals to keep making a difference.'
          },
          {
            question: 'How can I verify my donation reached the right people?',
            answer: 'We work with verified partners like Barakah Charity who provide regular updates, field evidence, and transparency reports. All donors receive impact reports and can request detailed documentation.'
          }
        ],
        trustStatement: 'Aid was delivered through our verified partner Barakah Charity, with on-the-ground teams ensuring every contribution reached vulnerable families directly. Updates and field evidence were shared with our community throughout the campaign.',
        partnerName: 'Barakah Charity',
        isActive: false,
        closingStatement: 'The Ramadan 2026 Gaza Appeal has now closed, but our humanitarian mission continues. Explore our live appeals to keep making a difference.'
      };
    }
    
    if (id === 'bangladesh-ramadan-2026') {
      return {
        id: 'bangladesh-ramadan-2026',
        title: 'বাংলাদেশ অ্যাপিল - রমজান ২০২৬',
        tag: 'Previous Appeal',
        heroImage: '',
        heroDescription: 'রমজানে আমরা বাংলাদেশের প্রত্যন্ত অঞ্চলে খাদ্য প্যাক, মেডিকেল সাহায্য এবং জরুরি ত্রাণ পৌঁছে দিয়েছি।',
        stats: {
          familiesSupported: '3,000+',
          peopleHelped: '15,000+',
          fundsRaised: '£150K+'
        },
        storyContent: '<p>রমজান মাসে বাংলাদেশের বিভিন্ন প্রত্যন্ত অঞ্চলে আমরা খাদ্য সহায়তা পৌঁছে দিয়েছি।</p>',
        aidCategories: [
          { title: 'Food Packs', description: 'Nutritious food parcels distributed to families.', icon: '🍲' },
          { title: 'Medical Aid', description: 'Emergency medical supplies provided.', icon: '🏥' }
        ],
        faqs: [
          {
            question: 'Which areas were covered?',
            answer: 'We covered multiple districts across Bangladesh.'
          }
        ],
        trustStatement: 'All aid was delivered through local partners.',
        partnerName: 'Local Partners',
        isActive: false,
        closingStatement: 'This appeal has now closed. Thank you for your support.'
      };
    }
    
    if (id === 'qurbani-2025') {
      return {
        id: 'qurbani-2025',
        title: 'কুরবানি বিতরণ ২০২৫',
        tag: 'Previous Appeal',
        heroImage: '',
        heroDescription: 'ঈদুল আজহায় আমরা সারা বাংলাদেশে দরিদ্র পরিবারের মাঝে কুরবানির মাংস বিতরণ করেছি।',
        stats: {
          familiesSupported: '2,000+',
          peopleHelped: '10,000+',
          fundsRaised: '£100K+'
        },
        storyContent: '<p>ঈদুল আজহার পবিত্র সময়ে আমরা ২০০০+ পরিবারের মাঝে কুরবানির মাংস বিতরণ করেছি।</p>',
        aidCategories: [
          { title: 'Meat Distribution', description: 'Fresh qurbani meat distributed.', icon: '🥩' }
        ],
        faqs: [],
        trustStatement: 'Distribution was done through verified local mosques.',
        partnerName: 'Local Mosques',
        isActive: false,
        closingStatement: 'Thank you for making Eid special for thousands of families.'
      };
    }
    
    // Default fallback
    return {
      id: id || 'default',
      title: 'Appeal Details',
      tag: 'Appeal',
      heroImage: '',
      heroDescription: 'Learn more about our impact and how your donations helped communities in need.',
      stats: { familiesSupported: '0', peopleHelped: '0', fundsRaised: '£0' },
      storyContent: '<p>Content coming soon.</p>',
      aidCategories: [],
      faqs: [],
      trustStatement: 'Transparency and trust are our core values.',
      partnerName: '',
      isActive: false,
      closingStatement: 'Thank you for your continued support.'
    };
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f8fafc'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!appealData || !appealId) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Appeal Not Found</h2>
          <Button 
            type="primary" 
            onClick={() => navigate('/')}
            style={{ marginTop: '20px', background: '#2f8277' }}
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #1f2937 0%, #0f172a 100%)',
        padding: '80px 60px',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Button 
            type="link" 
            onClick={() => navigate('/')}
            style={{ color: 'white', padding: 0, marginBottom: '40px', fontSize: '16px' }}
          >
            <ArrowLeftOutlined /> Back to Home
          </Button>
          
          <span style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '6px 16px',
            borderRadius: '30px',
            fontSize: '14px',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            {appealData.tag}
          </span>
          
          <h1 style={{ fontSize: '52px', fontWeight: 700, marginBottom: '20px', lineHeight: '1.2' }}>
            {appealData.title}
          </h1>
          
          <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6' }}>
            {appealData.heroDescription}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px' }}>
        
        {/* Stats Section */}
        <Row gutter={[24, 24]} style={{ marginBottom: '60px' }}>
          <Col xs={24} md={8}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '40px', color: '#2f8277', marginBottom: '16px' }}><HeartOutlined /></div>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#1f2937', marginBottom: '8px' }}>{appealData.stats.familiesSupported}</div>
              <div style={{ fontSize: '16px', color: '#6b7280' }}>Families Supported</div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '40px', color: '#2f8277', marginBottom: '16px' }}><TeamOutlined /></div>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#1f2937', marginBottom: '8px' }}>{appealData.stats.peopleHelped}</div>
              <div style={{ fontSize: '16px', color: '#6b7280' }}>People Helped</div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '40px', color: '#2f8277', marginBottom: '16px' }}><DollarOutlined /></div>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#1f2937', marginBottom: '8px' }}>{appealData.stats.fundsRaised}</div>
              <div style={{ fontSize: '16px', color: '#6b7280' }}>Funds Raised</div>
            </div>
          </Col>
        </Row>

        {/* Main Story Section */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '48px', marginBottom: '60px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '32px', color: '#1f2937', fontWeight: 700, marginBottom: '24px' }}>আমাদের প্রতিক্রিয়া</h2>
          <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#4b5563' }} dangerouslySetInnerHTML={{ __html: appealData.storyContent }} />
        </div>

        {/* Where Your Donations Went */}
        {appealData.aidCategories.length > 0 && (
          <>
            <h2 style={{ fontSize: '32px', color: '#1f2937', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
              আপনার দান গুলো কোথায় দেয়া হল?
            </h2>
            
            <Row gutter={[24, 24]} style={{ marginBottom: '60px' }}>
              {appealData.aidCategories.map((category, index) => (
                <Col xs={24} md={12} key={index}>
                  <div style={{ background: 'white', borderRadius: '16px', padding: '28px', height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>{category.icon}</div>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1f2937', marginBottom: '12px' }}>{category.title}</h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#6b7280' }}>{category.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </>
        )}

        {/* FAQ Section */}
        {appealData.faqs.length > 0 && (
          <div style={{ background: 'white', borderRadius: '20px', padding: '48px', marginBottom: '60px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '32px', color: '#1f2937', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
              সচরাচর করা প্রশ্নগুলোঃ
            </h2>
            <Collapse 
              bordered={false} 
              style={{ background: 'transparent' }}
              expandIconPosition="end"
            >
              {appealData.faqs.map((faq, index) => (
                <Panel 
                  key={index}
                  header={<span style={{ fontWeight: 600, color: '#1f2937' }}>{faq.question}</span>}
                  style={{
                    marginBottom: '16px',
                    background: '#f8fafc',
                    borderRadius: '12px',
                    border: 'none'
                  }}
                >
                  <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                    {faq.answer}
                  </p>
                </Panel>
              ))}
            </Collapse>
          </div>
        )}

        {/* Trust & Transparency Section */}
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          borderRadius: '20px',
          padding: '48px',
          marginBottom: '60px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '28px', color: '#1f2937', fontWeight: 700, marginBottom: '16px' }}>
            বিশ্বাস ও স্বচ্ছতার সাথে সরবরাহ করা হয়েছে
          </h2>
          <p style={{ fontSize: '18px', color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
            {appealData.trustStatement}
          </p>
        </div>

        {/* Continue Supporting */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '48px',
          textAlign: 'center',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ fontSize: '28px', color: '#1f2937', fontWeight: 700, marginBottom: '16px' }}>
            আমাদের কাজকে সমর্থন করতে থাকুন
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '32px' }}>
            {appealData.closingStatement}
          </p>
          <Button 
            type="primary"
            onClick={() => navigate('/')}
            style={{
              background: '#2f8277',
              borderColor: '#2f8277',
              padding: '12px 32px',
              height: 'auto',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '8px'
            }}
          >
            বর্তমান আবেদন গুলো দেখুন →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImpactDetailPage;

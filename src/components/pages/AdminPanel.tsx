import React, { useState, useEffect } from 'react';
import { 
  Button, Table, Modal, Form, Input, InputNumber, Upload, Tabs, 
  message, Space, Popconfirm, Tag, Card, Row, Col, Switch, Select
} from 'antd';
import { 
  PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined, 
  LogoutOutlined, PlusCircleOutlined, MinusCircleOutlined 
} from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';

const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;

// Campaign Interface (existing)
interface Campaign {
  id: number;
  title: string;
  description: string;
  amount: string;
  heroImage: string;
  images: string[];
  narration?: string;
  impact?: string;
}

// Appeal Interface (simplified for non-technical users)
interface Appeal {
  id: string;
  slug: string;
  title: string;
  tag: string;
  heroDescription: string;
  familiesSupported: string;
  peopleHelped: string;
  fundsRaised: string;
  storyContent: string;
  aidCategories: Array<{ title: string; description: string; icon: string }>;
  faqs: Array<{ question: string; answer: string }>;
  trustStatement: string;
  partnerName: string;
  isActive: boolean;
  closingStatement: string;
  heroImage?: string;
}

const AdminPanel: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [appeals, setAppeals] = useState<Appeal[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppealModalOpen, setIsAppealModalOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const [editingAppeal, setEditingAppeal] = useState<Appeal | null>(null);
  const [activeTab, setActiveTab] = useState('campaigns');
  
  const [campaignForm] = Form.useForm();
  const [appealForm] = Form.useForm();
  
  const [heroFileList, setHeroFileList] = useState<UploadFile[]>([]);
  const [galleryFileList, setGalleryFileList] = useState<UploadFile[]>([]);
  
  // Dynamic fields for categories and FAQs
  const [categories, setCategories] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);

  // Load campaigns from localStorage
  useEffect(() => {
    const savedCampaigns = localStorage.getItem('naseeha-campaigns');
    if (savedCampaigns) {
      setCampaigns(JSON.parse(savedCampaigns));
    }
    
    // Load appeals from localStorage
    const savedAppeals = localStorage.getItem('naseeha-appeals');
    if (savedAppeals) {
      const parsedAppeals = JSON.parse(savedAppeals);
      setAppeals(parsedAppeals);
    } else {
      // Initialize with default Gaza appeal
      const defaultAppeals: Appeal[] = [
        {
          id: '1',
          slug: 'gaza-ramadan-2026',
          title: 'Standing With Gaza This Ramadan',
          tag: 'Ramadan 2026 Appeal',
          heroDescription: 'In the blessed month of Ramadan 2026, the Taha Foundation launched the Gaza Appeal in response to the worsening humanitarian crisis facing our brothers and sisters in Gaza.',
          familiesSupported: '5,000+',
          peopleHelped: '25,000+',
          fundsRaised: '£250K+',
          storyContent: 'With families displaced, hospitals overwhelmed and basic supplies scarce, the urgency to act could not have been greater.\n\nThrough the generosity of donors across the UK and beyond, we partnered with Barakah Charity — a trusted organisation with established teams operating directly inside Gaza — to deliver food packs, dignity packs, essential household necessities, and urgent medical care to those most in need.',
          aidCategories: [
            { title: 'Food Packs', description: 'Nutritious food parcels distributed to families facing severe shortages and displacement across Gaza.', icon: '🍲' },
            { title: 'Dignity Packs', description: 'Hygiene and dignity essentials delivered to women, children and the elderly during the most difficult conditions.', icon: '🧴' },
            { title: 'Essential Necessities', description: 'Blankets, clean water and core household items provided directly to those who lost everything.', icon: '🏠' },
            { title: 'Urgent Medical Care', description: 'Critical medical aid and supplies channelled to families through trusted partners on the ground.', icon: '🏥' }
          ],
          faqs: [
            { question: 'Who delivered the aid in Gaza?', answer: 'All distributions were carried out by our trusted partner Barakah Charity, with established teams operating directly on the ground in Gaza throughout Ramadan 2026.' },
            { question: 'What did the Ramadan 2026 Gaza Appeal cover?', answer: 'The appeal covered food packs, dignity packs for women and children, essential household necessities including blankets and clean water, and urgent medical care for displaced families.' },
            { question: 'Is the Gaza Appeal still open?', answer: 'The Ramadan 2026 Gaza Appeal has now closed, but our humanitarian mission continues. Please explore our current active appeals to keep making a difference.' }
          ],
          trustStatement: 'Aid was delivered through our verified partner Barakah Charity, with on-the-ground teams ensuring every contribution reached vulnerable families directly. Updates and field evidence were shared with our community throughout the campaign.',
          partnerName: 'Barakah Charity',
          isActive: false,
          closingStatement: 'The Ramadan 2026 Gaza Appeal has now closed, but our humanitarian mission continues. Explore our live appeals to keep making a difference.'
        },
        {
          id: '2',
          slug: 'bangladesh-ramadan-2026',
          title: 'বাংলাদেশ অ্যাপিল - রমজান ২০২৬',
          tag: 'Previous Appeal',
          heroDescription: 'রমজানে আমরা বাংলাদেশের প্রত্যন্ত অঞ্চলে খাদ্য প্যাক, মেডিকেল সাহায্য এবং জরুরি ত্রাণ পৌঁছে দিয়েছি।',
          familiesSupported: '3,000+',
          peopleHelped: '15,000+',
          fundsRaised: '£150K+',
          storyContent: 'রমজান মাসে বাংলাদেশের বিভিন্ন প্রত্যন্ত অঞ্চলে আমরা খাদ্য সহায়তা পৌঁছে দিয়েছি।\n\nআপনাদের দানের মাধ্যমে আমরা ৩০০০+ পরিবারের কাছে খাদ্য পৌঁছে দিতে সক্ষম হয়েছি।',
          aidCategories: [
            { title: 'Food Packs', description: 'Nutritious food parcels distributed to families.', icon: '🍲' },
            { title: 'Medical Aid', description: 'Emergency medical supplies provided.', icon: '🏥' }
          ],
          faqs: [
            { question: 'Which areas were covered?', answer: 'We covered multiple districts across Bangladesh including rural and remote areas.' }
          ],
          trustStatement: 'All aid was delivered through local partners with full transparency.',
          partnerName: 'Local Partners',
          isActive: false,
          closingStatement: 'This appeal has now closed. Thank you for your support.'
        },
        {
          id: '3',
          slug: 'qurbani-2025',
          title: 'কুরবানি বিতরণ ২০২৫',
          tag: 'Previous Appeal',
          heroDescription: 'ঈদুল আজহায় আমরা সারা বাংলাদেশে দরিদ্র পরিবারের মাঝে কুরবানির মাংস বিতরণ করেছি।',
          familiesSupported: '2,000+',
          peopleHelped: '10,000+',
          fundsRaised: '£100K+',
          storyContent: 'ঈদুল আজহার পবিত্র সময়ে আমরা ২০০০+ পরিবারের মাঝে কুরবানির মাংস বিতরণ করেছি।\n\nআপনাদের সহযোগিতায় অনেক অসহায় মানুষ আনন্দের সাথে ঈদ উদযাপন করতে পেরেছে।',
          aidCategories: [
            { title: 'Meat Distribution', description: 'Fresh qurbani meat distributed to needy families.', icon: '🥩' }
          ],
          faqs: [],
          trustStatement: 'Distribution was done through verified local mosques and community centers.',
          partnerName: 'Local Mosques',
          isActive: false,
          closingStatement: 'Thank you for making Eid special for thousands of families.'
        }
      ];
      setAppeals(defaultAppeals);
      localStorage.setItem('naseeha-appeals', JSON.stringify(defaultAppeals));
    }
  }, []);

  const saveCampaignsToStorage = (data: Campaign[]) => {
    localStorage.setItem('naseeha-campaigns', JSON.stringify(data));
    setCampaigns(data);
  };

  const saveAppealsToStorage = (data: Appeal[]) => {
    localStorage.setItem('naseeha-appeals', JSON.stringify(data));
    setAppeals(data);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // Generate slug from title (for non-technical users)
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);
  };

  // Campaign CRUD operations
  const openCampaignModal = (campaign?: Campaign) => {
    setEditingCampaign(campaign || null);
    campaignForm.resetFields();
    setHeroFileList([]);
    setGalleryFileList([]);

    if (campaign) {
      campaignForm.setFieldsValue({
        title: campaign.title,
        description: campaign.description,
        amount: campaign.amount,
        narration: campaign.narration,
        impact: campaign.impact,
      });
    }
    setIsModalOpen(true);
  };

  const handleSaveCampaign = async () => {
    try {
      const values = await campaignForm.validateFields();

      let heroImage = editingCampaign?.heroImage || '';
      if (heroFileList.length > 0 && heroFileList[0].originFileObj) {
        heroImage = await convertToBase64(heroFileList[0].originFileObj);
      }

      let newGallery: string[] = editingCampaign?.images || [];
      for (const file of galleryFileList) {
        if (file.originFileObj) {
          const base64 = await convertToBase64(file.originFileObj);
          newGallery.push(base64);
        }
      }

      const newCampaign: Campaign = {
        id: editingCampaign ? editingCampaign.id : Date.now(),
        title: values.title,
        description: values.description,
        amount: values.amount,
        heroImage,
        images: newGallery,
        narration: values.narration,
        impact: values.impact,
      };

      if (editingCampaign) {
        const updated = campaigns.map(c => c.id === newCampaign.id ? newCampaign : c);
        saveCampaignsToStorage(updated);
        message.success('ক্যাম্পেইন সফলভাবে আপডেট হয়েছে');
      } else {
        saveCampaignsToStorage([...campaigns, newCampaign]);
        message.success('নতুন ক্যাম্পেইন যোগ হয়েছে');
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      message.error('সংরক্ষণে সমস্যা হয়েছে');
    }
  };

  const deleteCampaign = (id: number) => {
    const filtered = campaigns.filter(c => c.id !== id);
    saveCampaignsToStorage(filtered);
    message.success('ক্যাম্পেইন মুছে ফেলা হয়েছে');
  };

  // Appeal CRUD operations
  const openAppealModal = (appeal?: Appeal) => {
    setEditingAppeal(appeal || null);
    appealForm.resetFields();
    setCategories(appeal?.aidCategories || []);
    setFaqs(appeal?.faqs || []);

    if (appeal) {
      appealForm.setFieldsValue({
        title: appeal.title,
        tag: appeal.tag,
        heroDescription: appeal.heroDescription,
        familiesSupported: appeal.familiesSupported,
        peopleHelped: appeal.peopleHelped,
        fundsRaised: appeal.fundsRaised,
        storyContent: appeal.storyContent,
        trustStatement: appeal.trustStatement,
        partnerName: appeal.partnerName,
        isActive: appeal.isActive,
        closingStatement: appeal.closingStatement,
      });
    }
    setIsAppealModalOpen(true);
  };

  const handleSaveAppeal = async () => {
    try {
      const values = await appealForm.validateFields();
      
      // Auto-generate slug from title if not provided
      let slug = generateSlug(values.title);
      
      const newAppeal: Appeal = {
        id: editingAppeal ? editingAppeal.id : Date.now().toString(),
        slug: slug,
        title: values.title,
        tag: values.tag,
        heroDescription: values.heroDescription,
        familiesSupported: values.familiesSupported,
        peopleHelped: values.peopleHelped,
        fundsRaised: values.fundsRaised,
        storyContent: values.storyContent,
        aidCategories: categories,
        faqs: faqs,
        trustStatement: values.trustStatement,
        partnerName: values.partnerName,
        isActive: values.isActive,
        closingStatement: values.closingStatement,
      };

      if (editingAppeal) {
        const updated = appeals.map(a => a.id === newAppeal.id ? newAppeal : a);
        saveAppealsToStorage(updated);
        message.success('Appeal successfully updated');
      } else {
        saveAppealsToStorage([...appeals, newAppeal]);
        message.success('New appeal added successfully');
      }

      setIsAppealModalOpen(false);
    } catch (error) {
      console.error(error);
      message.error('Error saving appeal');
    }
  };

  const deleteAppeal = (id: string) => {
    const filtered = appeals.filter(a => a.id !== id);
    saveAppealsToStorage(filtered);
    message.success('Appeal deleted successfully');
  };

  const campaignColumns = [
    { title: 'ID', dataIndex: 'id', width: 70 },
    { title: 'টাইটেল', dataIndex: 'title', ellipsis: true, render: (text: string) => <strong>{text}</strong> },
    { title: 'অ্যামাউন্ট', dataIndex: 'amount' },
    { title: 'ছবি', render: (_: any, record: Campaign) => <img src={record.heroImage} alt="" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} /> },
    { title: 'অ্যাকশন', key: 'action', render: (_: any, record: Campaign) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => openCampaignModal(record)} />
          <Popconfirm title="আপনি নিশ্চিত?" onConfirm={() => deleteCampaign(record.id)}>
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const appealColumns = [
    { title: 'Title', dataIndex: 'title', ellipsis: true, render: (text: string) => <strong>{text}</strong> },
    { title: 'Tag', dataIndex: 'tag', render: (text: string) => <Tag color="green">{text}</Tag> },
    { title: 'Status', dataIndex: 'isActive', render: (active: boolean) => active ? <Tag color="blue">Current Appeal</Tag> : <Tag>Previous Appeal</Tag> },
    { title: 'Families', dataIndex: 'familiesSupported', width: 100 },
    { title: 'Funds', dataIndex: 'fundsRaised', width: 100 },
    { title: 'Action', key: 'action', width: 120, render: (_: any, record: Appeal) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => openAppealModal(record)} />
          <Popconfirm title="Delete this appeal?" onConfirm={() => deleteAppeal(record.id)}>
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '40px', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#2f8277', marginBottom: '40px', fontSize: '36px' }}>
          নাসীহা ফাউন্ডেশন - অ্যাডমিন প্যানেল
        </h1>
        
        <div style={{ position: 'absolute', top: '30px', right: '40px' }}>
          <Button 
            danger 
            icon={<LogoutOutlined />}
            onClick={() => {
              localStorage.removeItem('adminAuthenticated');
              window.location.reload();
            }}
          >
            লগআউট
          </Button>
        </div>

        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab="Campaigns" key="campaigns">
            <div style={{ marginBottom: '24px', textAlign: 'right' }}>
              <Button type="primary" size="large" icon={<PlusOutlined />} onClick={() => openCampaignModal()}>
                নতুন ক্যাম্পেইন যোগ করুন
              </Button>
            </div>
            <Table columns={campaignColumns} dataSource={campaigns} rowKey="id" pagination={{ pageSize: 8 }} />
          </TabPane>

          <TabPane tab="Impact Stories (Appeals)" key="appeals">
            <div style={{ marginBottom: '24px', textAlign: 'right' }}>
              <Button type="primary" size="large" icon={<PlusOutlined />} onClick={() => openAppealModal()}>
                Add New Impact Story
              </Button>
            </div>
            <Table columns={appealColumns} dataSource={appeals} rowKey="id" pagination={{ pageSize: 8 }} />
          </TabPane>
        </Tabs>

        {/* Campaign Modal (existing) */}
        <Modal
          title={editingCampaign ? "ক্যাম্পেইন এডিট করুন" : "নতুন ক্যাম্পেইন যোগ করুন"}
          open={isModalOpen}
          onOk={handleSaveCampaign}
          onCancel={() => setIsModalOpen(false)}
          width={800}
          okText="সংরক্ষণ করুন"
          cancelText="বাতিল"
        >
          <Form form={campaignForm} layout="vertical">
            <Form.Item name="title" label="ক্যাম্পেইনের নাম" rules={[{ required: true }]}>
              <Input size="large" placeholder="যেমন: কুরবানি ২০২৬" />
            </Form.Item>
            <Form.Item name="description" label="সংক্ষিপ্ত বর্ণনা" rules={[{ required: true }]}>
              <TextArea rows={4} placeholder="ক্যাম্পেইন সম্পর্কে বিস্তারিত লিখুন..." />
            </Form.Item>
            <Form.Item name="amount" label="টাকার পরিমাণ / প্যাকেজ" rules={[{ required: true }]}>
              <Input size="large" placeholder="ছোট পশু ১২,০০০ টাকা" />
            </Form.Item>
            <Form.Item label="হিরো ইমেজ (মেইন ছবি)">
              <Upload listType="picture-card" fileList={heroFileList} onChange={({ fileList }) => setHeroFileList(fileList)} beforeUpload={() => false} maxCount={1}>
                {heroFileList.length < 1 && <div><UploadOutlined /><div>আপলোড</div></div>}
              </Upload>
            </Form.Item>
            <Form.Item label="গ্যালারি ছবি (একাধিক)">
              <Upload listType="picture-card" fileList={galleryFileList} onChange={({ fileList }) => setGalleryFileList(fileList)} beforeUpload={() => false} multiple>
                <div><UploadOutlined /><div>আপলোড</div></div>
              </Upload>
            </Form.Item>
            <Form.Item name="narration" label="বিস্তারিত ন্যারেশন (ঐচ্ছিক)">
              <TextArea rows={5} />
            </Form.Item>
          </Form>
        </Modal>

        {/* User-Friendly Appeal Modal */}
        <Modal
          title={editingAppeal ? "Edit Impact Story" : "Add New Impact Story"}
          open={isAppealModalOpen}
          onOk={handleSaveAppeal}
          onCancel={() => setIsAppealModalOpen(false)}
          width={900}
          okText="Save Story"
          cancelText="Cancel"
          style={{ top: 20 }}
        >
          <div style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: '16px' }}>
            <Form form={appealForm} layout="vertical">
              {/* Basic Information */}
              <Card title="Basic Information" size="small" style={{ marginBottom: '16px' }}>
                <Form.Item name="title" label="Story Title" rules={[{ required: true }]} tooltip="Example: Standing With Gaza This Ramadan">
                  <Input size="large" placeholder="Enter a meaningful title for this story" />
                </Form.Item>

                <Form.Item name="tag" label="Category Tag" rules={[{ required: true }]} tooltip="Example: Ramadan 2026 Appeal, Winter Appeal, Emergency Relief">
                  <Input size="large" placeholder="e.g., Ramadan 2026 Appeal" />
                </Form.Item>

                <Form.Item name="heroDescription" label="Main Description" rules={[{ required: true }]} tooltip="This appears at the top of the page">
                  <TextArea rows={3} placeholder="Write a brief description of this appeal..." />
                </Form.Item>

                <Form.Item name="isActive" label="Show as 'Current Appeal'" valuePropName="checked" tooltip="If checked, this will be highlighted as a current appeal on the homepage">
                  <Switch checkedChildren="Yes" unCheckedChildren="No" />
                </Form.Item>
              </Card>

              {/* Impact Statistics */}
              <Card title="Impact Statistics" size="small" style={{ marginBottom: '16px' }}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item name="familiesSupported" label="Families Supported" rules={[{ required: true }]} tooltip="Number of families helped">
                      <Input placeholder="e.g., 5,000+" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="peopleHelped" label="People Helped" rules={[{ required: true }]} tooltip="Total number of beneficiaries">
                      <Input placeholder="e.g., 25,000+" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="fundsRaised" label="Funds Raised" rules={[{ required: true }]} tooltip="Total amount collected">
                      <Input placeholder="e.g., £250,000+" />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>

              {/* Story Content */}
              <Card title="Story Details" size="small" style={{ marginBottom: '16px' }}>
                <Form.Item name="storyContent" label="Full Story" rules={[{ required: true }]} tooltip="Write the complete story of this appeal. Use blank lines to separate paragraphs.">
                  <TextArea rows={8} placeholder="Write the full story here...&#10;&#10;Use empty lines to create new paragraphs. No need to use HTML tags." />
                </Form.Item>
              </Card>

              {/* Aid Categories */}
              <Card 
                title="What Was Delivered" 
                size="small" 
                style={{ marginBottom: '16px' }}
                extra={<Button type="dashed" icon={<PlusCircleOutlined />} onClick={() => setCategories([...categories, { title: '', description: '', icon: '📦' }])}>Add Item</Button>}
              >
                {categories.map((cat, index) => (
                  <Card key={index} size="small" style={{ marginBottom: '12px', background: '#f8fafc' }}>
                    <Row gutter={8}>
                      <Col span={2}>
                        <Input 
                          placeholder="Icon" 
                          value={cat.icon} 
                          onChange={(e) => {
                            const newCats = [...categories];
                            newCats[index].icon = e.target.value;
                            setCategories(newCats);
                          }}
                          maxLength={2}
                        />
                      </Col>
                      <Col span={10}>
                        <Input 
                          placeholder="Item name (e.g., Food Packs)" 
                          value={cat.title} 
                          onChange={(e) => {
                            const newCats = [...categories];
                            newCats[index].title = e.target.value;
                            setCategories(newCats);
                          }}
                        />
                      </Col>
                      <Col span={10}>
                        <Input 
                          placeholder="Brief description" 
                          value={cat.description} 
                          onChange={(e) => {
                            const newCats = [...categories];
                            newCats[index].description = e.target.value;
                            setCategories(newCats);
                          }}
                        />
                      </Col>
                      <Col span={2}>
                        <Button danger icon={<MinusCircleOutlined />} onClick={() => setCategories(categories.filter((_, i) => i !== index))} />
                      </Col>
                    </Row>
                  </Card>
                ))}
                {categories.length === 0 && (
                  <div style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
                    Click "Add Item" to list what was delivered (Food, Medical aid, etc.)
                  </div>
                )}
              </Card>

              {/* FAQs */}
              <Card 
                title="Frequently Asked Questions" 
                size="small" 
                style={{ marginBottom: '16px' }}
                extra={<Button type="dashed" icon={<PlusCircleOutlined />} onClick={() => setFaqs([...faqs, { question: '', answer: '' }])}>Add FAQ</Button>}
              >
                {faqs.map((faq, index) => (
                  <Card key={index} size="small" style={{ marginBottom: '12px', background: '#f8fafc' }}>
                    <Row gutter={8}>
                      <Col span={11}>
                        <Input 
                          placeholder="Question" 
                          value={faq.question} 
                          onChange={(e) => {
                            const newFaqs = [...faqs];
                            newFaqs[index].question = e.target.value;
                            setFaqs(newFaqs);
                          }}
                        />
                      </Col>
                      <Col span={11}>
                        <Input 
                          placeholder="Answer" 
                          value={faq.answer} 
                          onChange={(e) => {
                            const newFaqs = [...faqs];
                            newFaqs[index].answer = e.target.value;
                            setFaqs(newFaqs);
                          }}
                        />
                      </Col>
                      <Col span={2}>
                        <Button danger icon={<MinusCircleOutlined />} onClick={() => setFaqs(faqs.filter((_, i) => i !== index))} />
                      </Col>
                    </Row>
                  </Card>
                ))}
                {faqs.length === 0 && (
                  <div style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
                    Click "Add FAQ" to add common questions and answers
                  </div>
                )}
              </Card>

              {/* Trust & Partner Information */}
              <Card title="Trust & Partnership" size="small" style={{ marginBottom: '16px' }}>
                <Form.Item name="partnerName" label="Partner Organization" tooltip="Who helped deliver this aid?">
                  <Input placeholder="e.g., Barakah Charity" />
                </Form.Item>

                <Form.Item name="trustStatement" label="Trust & Transparency Statement" tooltip="Explain how donations were used transparently">
                  <TextArea rows={3} placeholder="Example: Aid was delivered through our verified partner with on-the-ground teams ensuring every contribution reached vulnerable families directly..." />
                </Form.Item>

                <Form.Item name="closingStatement" label="Closing Message" tooltip="What to say at the end of this page?">
                  <TextArea rows={2} placeholder="Example: This appeal has now closed, but our humanitarian mission continues..." />
                </Form.Item>
              </Card>

              <div style={{ background: '#e6f7ff', padding: '12px', borderRadius: '8px', marginTop: '8px' }}>
                <small>💡 <strong>Tip:</strong> The web address (URL) will be automatically created from your title. No need to enter it manually.</small>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminPanel;

import React, { useState, useEffect } from 'react';
import { 
  Button, Table, Modal, Form, Input, InputNumber, Upload, 
  message, Space, Popconfirm, Tag 
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface'; 
import { LogoutOutlined } from '@ant-design/icons';

interface Campaign {
  id: number;
  title: string;
  description: string;
  amount: string;
  heroImage: string;        // Base64 or URL
  images: string[];         // Array of Base64 strings
  narration?: string;
  impact?: string;
}

interface Impact {
  id: string;
  slug: string;
  title: string;
  tag: string;
  heroDescription: string;
  stats: { familiesSupported: string; peopleHelped: string; fundsRaised: string };
  storyContent: string;
  aidCategories: Array<{ title: string; description: string; icon: string }>;
  faqs: Array<{ question: string; answer: string }>;
  trustStatement: string;
  isActive: boolean;
}

const AdminPanel: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const [form] = Form.useForm();
  const [heroFileList, setHeroFileList] = useState<UploadFile[]>([]);
  const [galleryFileList, setGalleryFileList] = useState<UploadFile[]>([]);

  // Load campaigns
  useEffect(() => {
    const saved = localStorage.getItem('naseeha-campaigns');
    if (saved) {
      setCampaigns(JSON.parse(saved));
    }
  }, []);

  const saveToStorage = (data: Campaign[]) => {
    localStorage.setItem('naseeha-campaigns', JSON.stringify(data));
    setCampaigns(data);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const openModal = (campaign?: Campaign) => {
    setEditingCampaign(campaign || null);
    form.resetFields();
    setHeroFileList([]);
    setGalleryFileList([]);

    if (campaign) {
      form.setFieldsValue({
        title: campaign.title,
        description: campaign.description,
        amount: campaign.amount,
        narration: campaign.narration,
        impact: campaign.impact,
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();

      // Handle Hero Image
      let heroImage = editingCampaign?.heroImage || '';
      if (heroFileList.length > 0 && heroFileList[0].originFileObj) {
        heroImage = await convertToBase64(heroFileList[0].originFileObj);
      }

      // Handle Gallery Images
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
        saveToStorage(updated);
        message.success('ক্যাম্পেইন সফলভাবে আপডেট হয়েছে');
      } else {
        saveToStorage([...campaigns, newCampaign]);
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
    saveToStorage(filtered);
    message.success('ক্যাম্পেইন মুছে ফেলা হয়েছে');
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', width: 70 },
    { 
      title: 'টাইটেল', 
      dataIndex: 'title', 
      ellipsis: true,
      render: (text: string) => <strong>{text}</strong>
    },
    { title: 'অ্যামাউন্ট', dataIndex: 'amount' },
    {
      title: 'ছবি',
      render: (_: any, record: Campaign) => (
        <img src={record.heroImage} alt="" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} />
      )
    },
    {
      title: 'অ্যাকশন',
      key: 'action',
      render: (_: any, record: Campaign) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => openModal(record)} />
          <Popconfirm title="আপনি নিশ্চিত?" onConfirm={() => deleteCampaign(record.id)}>
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
        <div style={{ marginBottom: '24px', textAlign: 'right' }}>
          <Button 
            type="primary" 
            size="large" 
            icon={<PlusOutlined />} 
            onClick={() => openModal()}
            style={{ height: '52px', fontSize: '18px' }}
          >
            নতুন ক্যাম্পেইন যোগ করুন
          </Button>
        </div>

        <Table 
          columns={columns} 
          dataSource={campaigns} 
          rowKey="id"
          pagination={{ pageSize: 8 }}
        />

        {/* Modal */}
        <Modal
          title={editingCampaign ? "ক্যাম্পেইন এডিট করুন" : "নতুন ক্যাম্পেইন যোগ করুন"}
          open={isModalOpen}
          onOk={handleSave}
          onCancel={() => setIsModalOpen(false)}
          width={800}
          okText="সংরক্ষণ করুন"
          cancelText="বাতিল"
        >
          <Form form={form} layout="vertical">
            <Form.Item name="title" label="ক্যাম্পেইনের নাম" rules={[{ required: true }]}>
              <Input size="large" placeholder="যেমন: কুরবানি ২০২৬" />
            </Form.Item>

            <Form.Item name="description" label="সংক্ষিপ্ত বর্ণনা" rules={[{ required: true }]}>
              <Input.TextArea rows={4} placeholder="ক্যাম্পেইন সম্পর্কে বিস্তারিত লিখুন..." />
            </Form.Item>

            <Form.Item name="amount" label="টাকার পরিমাণ / প্যাকেজ" rules={[{ required: true }]}>
              <Input size="large" placeholder="ছোট পশু ১২,০০০ টাকা" />
            </Form.Item>

            <Form.Item label="হিরো ইমেজ (মেইন ছবি)">
              <Upload 
                listType="picture-card"
                fileList={heroFileList}
                onChange={({ fileList }) => setHeroFileList(fileList)}
                beforeUpload={() => false}
                maxCount={1}
              >
                {heroFileList.length < 1 && (
                  <div><UploadOutlined /><div>আপলোড</div></div>
                )}
              </Upload>
            </Form.Item>

            <Form.Item label="গ্যালারি ছবি (একাধিক)">
              <Upload 
                listType="picture-card"
                fileList={galleryFileList}
                onChange={({ fileList }) => setGalleryFileList(fileList)}
                beforeUpload={() => false}
                multiple
              >
                <div><UploadOutlined /><div>আপলোড</div></div>
              </Upload>
            </Form.Item>

            <Form.Item name="narration" label="বিস্তারিত ন্যারেশন (ঐচ্ছিক)">
              <Input.TextArea rows={5} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default AdminPanel;

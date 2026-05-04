import React, { useState } from 'react';
import { Modal, Form, Input, Select, Radio, Button, message, Tabs } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

interface DonationModalProps {
  open: boolean;
  onClose: () => void;
}

const hadith = `সায়ীদ ইবনে ইয়াসার (রহঃ) হইতে বর্ণিত, রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলিয়াছেন, যে ব্যক্তি হালাল উপায়ে অর্জিত মাল সদকা করে, আল্লাহ তা’আলা হালাল অর্থাৎ পবিত্রকেই কবুল করেন – তাহা হইলে উক্ত সদকা সে আল্লাহর হাতে দিল। আল্লাহ্ পাক তাহাকে এইভাবে লালন-পালন করেন, যেইভাবে তোমরা ঘোড়ার বাচ্চা কিংবা উটের বাচ্চা লালন-পালন কর। শেষ পর্যন্ত সেই সদকা (বর্ধিত হইয়া) পর্বতসমান হইয়া যায়।`;

const DonationModal: React.FC<DonationModalProps> = ({ open, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string | number>('500');
  const [showCustomAmount, setShowCustomAmount] = useState(false);

  const presetAmounts = [500, 1000, 2000, 5000, 10000, 30000, 50000];

  const handleAmountSelect = (amount: number | string) => {
    setSelectedAmount(amount);
    setShowCustomAmount(amount === 'other');
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const finalAmount = showCustomAmount ? values.customAmount : selectedAmount;

    console.log('✅ Donation Submitted:', { ...values, amount: finalAmount });

    setTimeout(() => {
      message.success('🎉 অনুদানের অনুরোধ গৃহীত হয়েছে! জাযাকাল্লাহু খাইরান।');
      form.resetFields();
      setSelectedAmount('500');
      setShowCustomAmount(false);
      onClose();
      setLoading(false);
    }, 1200);
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={1000}
      centered
    >
      <div style={{ textAlign: 'center', padding: '20px 0 30px' }}>
        <img 
          src="/assets/donate-collage.jpg" 
          alt="Donate" 
          style={{ width: '100%', borderRadius: '12px', marginBottom: '30px' }}
        />
        <h2 style={{ fontSize: '32px', color: '#2f8277' }}>আপনার দানে সাহায্য করুন</h2>
      </div>

      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Tabs defaultActiveKey="1">
          
          {/* ==================== TAB 1 ==================== */}
          <TabPane tab="দানের বিবরণ" key="1">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <Form.Item label="নাম" name="name" rules={[{ required: true }]}>
                <Input size="large" placeholder="আপনার নাম" />
              </Form.Item>
              <Form.Item label="ইমেইল" name="email">
                <Input size="large" placeholder="আপনার ইমেইল" />
              </Form.Item>
              <Form.Item label="মোবাইল নম্বর" name="mobile" rules={[{ required: true }]}>
                <Input size="large" placeholder="01XXXXXXXXX" />
              </Form.Item>
              <Form.Item label="দানের ধরন" name="category" rules={[{ required: true }]}>
                <Select size="large">
                  <Option value="general">সাধারণ দান</Option>
                  <Option value="zakat">যাকাত</Option>
                  <Option value="qurbani">কুরবানি</Option>
                  <Option value="madrasa">মাদরাসাতুস নাসীহা প্রকল্প</Option>
                </Select>
              </Form.Item>
            </div>

            {/* Amount Selection */}
            <Form.Item label="দানের পরিমাণ" required>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {presetAmounts.map((amt) => (
                  <Button
                    key={amt}
                    type={selectedAmount === amt ? "primary" : "default"}
                    onClick={() => handleAmountSelect(amt)}
                    style={{ height: '52px', minWidth: '110px', borderRadius: '12px' }}
                  >
                    ৳ {amt}
                  </Button>
                ))}
                <Button
                  type={selectedAmount === 'other' ? "primary" : "default"}
                  onClick={() => handleAmountSelect('other')}
                  style={{ height: '52px', borderRadius: '12px' }}
                >
                  অন্যান্য
                </Button>
              </div>

              {showCustomAmount && (
                <Form.Item name="customAmount" rules={[{ required: true }]} style={{ marginTop: '15px' }}>
                  <Input size="large" type="number" placeholder="পরিমাণ লিখুন" prefix="৳" />
                </Form.Item>
              )}
            </Form.Item>

            <Form.Item label="পেমেন্ট মেথড" name="paymentMethod" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="bKashPersonal">বিকাশ পার্সোনাল</Radio>
                <Radio value="bKashMerchant">বিকাশ মার্চেন্ট</Radio>
                <Radio value="nagadPersonal">নগদ পার্সোনাল</Radio>
                <Radio value="nagadMerchant">নগদ মার্চেন্ট</Radio>
                <Radio value="bank">ব্যাংক ট্রান্সফার</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Hadith in Tab 1 */}
            <div style={{ 
              marginTop: '30px', 
              padding: '25px', 
              background: '#f8f1e9', 
              borderRadius: '12px',
              borderLeft: '6px solid #2f8277'
            }}>
              <p style={{ fontStyle: 'italic', lineHeight: '1.85', color: '#444', fontSize: '15.5px' }}>
                {hadith}
              </p>
            </div>
          </TabPane>

          {/* ==================== TAB 2 ==================== */}
          <TabPane tab="ব্যাংক ও মোবাইল তথ্য" key="2">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <h3 style={{ color: '#2f8277' }}>সাদাকাহ / সাধারণ দান</h3>
                <p><strong>A/C Name:</strong> Naseeha Foundation</p>
                <p><strong>A/C No:</strong> 20502070100711207</p>
                <p><strong>Routing:</strong> 125264639</p>
                <p><strong>Bank:</strong> Islami Bank Bangladesh Ltd, Uttara Branch</p>
              </div>
              <div>
                <h3 style={{ color: '#2f8277' }}>যাকাত</h3>
                <p><strong>A/C Name:</strong> Naseeha Foundation (Zakat Fund)</p>
                <p><strong>A/C No:</strong> 20502070100711106</p>
                <p><strong>Routing:</strong> 125264639</p>
                <p><strong>Bank:</strong> Islami Bank Bangladesh Ltd, Uttara Branch</p>
              </div>
            </div>

            <div style={{ marginTop: '35px' }}>
              <h3 style={{ color: '#2f8277' }}>মোবাইল ওয়ালেট সমূহ</h3>
              <p><strong>Bkash/Nagad/Rocket:</strong> 01311060705 (Personal)</p>
              <p><strong>Bkash/Nagad:</strong> 01311066033 (Merchant)</p>
              <p style={{ marginTop: '15px', fontWeight: 600, color: '#d32f2f' }}>
                টাকা পাঠানোর সময় Reference এ কোন খাতে পাঠাচ্ছেন উল্লেখ করুন।
              </p>
            </div>

            {/* Hadith in Tab 2 */}
            <div style={{ 
              marginTop: '40px', 
              padding: '25px', 
              background: '#f8f1e9', 
              borderRadius: '12px',
              borderLeft: '6px solid #2f8277'
            }}>
              <p style={{ fontStyle: 'italic', lineHeight: '1.85', color: '#444', fontSize: '15.5px' }}>
                {hadith}
              </p>
            </div>
          </TabPane>
        </Tabs>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            size="large"
            loading={loading}
            style={{ height: '60px', fontSize: '20px', padding: '0 60px', borderRadius: '50px' }}
          >
            অনুদান জমা দিন
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default DonationModal;

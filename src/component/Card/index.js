import { useState } from "react";

import { Button, Modal, Checkbox, Form, Input, Select } from "antd";
import { SettingOutlined, DragOutlined } from "@ant-design/icons";
const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ width: 300 }}>
      <div className="title">
        <span>我是标题</span>
        <span onClick={showModal}>
          <SettingOutlined />
        </span>
        <span>
          <DragOutlined />
        </span>
        <Modal
          title="设置"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="标题"
              name="title"
              rules={[
                {
                  message: "可以修改标题",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="width" label="卡片宽度">
              <Select placeholder="卡片宽度" allowClear>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Card;

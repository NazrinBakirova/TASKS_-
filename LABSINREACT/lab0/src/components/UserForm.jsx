
import { Form, Input, Button, Modal } from 'antd';
import { useEffect } from 'react';

const UserForm = ({ visible, onCreate, onCancel, editingUser }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingUser) {
      form.setFieldsValue(editingUser);
    } else {
      form.resetFields();
    }
  }, [editingUser, form]);

  return (
    <Modal
      visible={visible}
      title={editingUser ? "Edit User" : "Add User"}
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            onCreate({ ...editingUser, ...values });
            form.resetFields();
          });
      }}
    >
      <Form form={form} layout="vertical" name="user_form">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;

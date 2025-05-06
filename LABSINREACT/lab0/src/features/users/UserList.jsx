
import { Table, Button, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { userDeleted, userAdded, userUpdated } from './usersSlice';
import { useState } from 'react';
import UserForm from '../../components/UserForm';

const UsersList = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const showModal = (user = null) => {
    setEditingUser(user);
    setModalVisible(true);
  };

  const handleCreate = user => {
    editingUser ? dispatch(userUpdated(user)) : dispatch(userAdded(user));
    setModalVisible(false);
  };

  const handleDelete = id => {
    dispatch(userDeleted(id));
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Actions',
      render: (_, record) => (
        <>
          <Button onClick={() => showModal(record)} type="link">Edit</Button>
          <Popconfirm title="Silinsin?" onConfirm={() => handleDelete(record.id)}>
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => showModal()} style={{ marginBottom: 16 }}>
        Add User
      </Button>
      <Table dataSource={users} columns={columns} rowKey="id" />
      <UserForm
        visible={isModalVisible}
        onCreate={handleCreate}
        onCancel={() => setModalVisible(false)}
        editingUser={editingUser}
      />
    </div>
  );
};

export default UsersList;

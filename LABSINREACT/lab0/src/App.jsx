
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import UsersList from './features/users/UserList';
import 'antd/dist/reset.css';

const App = () => (
  <Provider store={store}>
    <div style={{ padding: 24 }}>
      <h1>User Management</h1>
      <UsersList />
    </div>
  </Provider>
);

export default App;

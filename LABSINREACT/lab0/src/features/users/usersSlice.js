
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: nanoid(), name: 'Nazrin Bakirova', email: 'nazrin@mail.com' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(user) {
        return { payload: { ...user, id: nanoid() } };
      },
    },
    userUpdated(state, action) {
      const { id, name, email } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    userDeleted(state, action) {
      return state.filter(user => user.id !== action.payload);
    },
  },
});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;
export default usersSlice.reducer;

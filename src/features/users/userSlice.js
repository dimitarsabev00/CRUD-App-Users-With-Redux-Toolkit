import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Ivan", email: "ivan@mail.com" },
  { id: "1", name: "Dimitar", email: "dimitar@mail.com" },
];
const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;

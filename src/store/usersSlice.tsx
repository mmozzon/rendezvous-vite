import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  isLoggedIn: boolean;
  firstname: string;
  name: string;
  email: string;
  password: string;
}

// État initial
interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      //state.isLoggedIn = false;
      //state.firstname = action.payload.name;
      //state.name = action.payload.name;
      //state.email = action.payload.email;
      //state.password = action.payload.password;
    },
    signInUser: function (state, action: PayloadAction<User>) {
      state.users = state.users.map(function (user) {
        if (user.email === action.payload.email) {
          return { ...user, isLoggedIn: true };
        } else {
          return user;
        }
      });
    },
    signOutUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.map((user) =>
        user.email === action.payload.email
          ? { ...user, isLoggedIn: false }
          : user
      );
    }
  }
});

export const { registerUser } = usersSlice.actions;
export const { signInUser } = usersSlice.actions;
export const { signOutUser } = usersSlice.actions;
export default usersSlice.reducer;

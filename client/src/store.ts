import {
    configureStore,
    createSlice,
    PayloadAction,
    Slice,
    Draft
  } from "@reduxjs/toolkit";
  
  interface UserState {
    value: {
      isLogin: boolean;
      username: string;
      email: string;
    };
  }
  
  const initialUserState: UserState = {
    value: { isLogin: false, username: "", email: "" },
  };
  
  const userSlice: Slice<UserState> = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
      login: (
        state: UserState | Draft<UserState>,
        action: PayloadAction<{ userId: string }>
      ) => {
          state.value = { ...state.value, ...action.payload };
          state.value.isLogin = true;
      },
      logout: (state: UserState | Draft<UserState>) => {
        state.value = initialUserState.value;
      }
    },
  });
  
  export const { login, logout } = userSlice.actions;
  
  export const store = configureStore({
    reducer: {
      user: userSlice.reducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
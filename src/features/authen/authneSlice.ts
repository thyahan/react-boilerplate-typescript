/* eslint-disable no-param-reassign */
import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { AuthenState, LoginBody } from "./@types";
import { loginValidate } from "./utils";

const initialState: AuthenState = {
  isAuthen: false
};

const authenSlice = createSlice({
  name: "authen",
  initialState,
  reducers: {
    logedIn: (state) => {
      state.isAuthen = true;
    },
    logedOut: (state) => {
      state.isAuthen = false;
    }
  }
});

export const { logedIn, logedOut } = authenSlice.actions;

export const login = (loginBody: LoginBody) => (dispatch: Dispatch) => {
  const { username, password } = loginBody;
  if (loginValidate(username, password)) dispatch(logedIn());
  dispatch(logedOut());
};

export const logout = (username: string) => (dispatch: Dispatch) => {
  if (username) dispatch(logedOut());
};

export const selectIsAuthen = (state: any) => state.authne.isAuthen;

export default authenSlice.reducer;

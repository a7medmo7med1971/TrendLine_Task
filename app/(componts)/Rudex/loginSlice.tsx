import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* ======================
   1️ Interfaces
====================== */

export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginUser {
  id: number;
  type: string;
  name: string;
  email: string;
  mobile: string;
  mobile_country_code: string;
  image: string;
  email_verified_at: boolean;
  count_items_cart: number;
  token: string;
}
export interface LoginResponse {
  status: boolean;
  status_code: number;
  message: string;
  data: LoginUser;
}
export interface LoginState {
  user: LoginUser | null;
  loading: boolean;
  error: string | null;
  success: string | null;
}

/* ======================
   2️ Initial State
====================== */
const token =
  typeof window !== "undefined"
    ? localStorage.getItem("token")
    : null;

const initialState:LoginState = {
  user: token
    ? ({ token } as LoginUser) // مؤقت لحد ما نجيب البروفايل
    : null,
  loading: false,
  error: null,
  success: null,
};

/* ======================
   3️ Login Thunk
====================== */

export const login = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>(
  "login/user",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://tinytales.trendline.marketing/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok || result.status === false) {
        return rejectWithValue(result.message || "Login failed");
      }

      return result;
    } catch (error: any) {
      return rejectWithValue(
        error?.message || "Network error, please try again"
      );
    }
  }
);


/* ======================
   4️ Slice
====================== */



const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //  لما الطلب يبدأ
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      //  لما ينجح
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data; 
        state.success = action.payload.message;
        localStorage.setItem("token", action.payload.data.token);
      })

      //  لما يفشل
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

/* ======================
   5️ Exports
====================== */

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;

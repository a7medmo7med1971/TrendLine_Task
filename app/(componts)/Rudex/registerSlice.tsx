import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* ======================
   1️ Interfaces
====================== */

export interface RegisterPayload {
  name: string;
  email: string;
  mobile: string;
  password: string;
  password_confirmation: string;
  mobile_country_code: string;
}

export interface RegisterUser {
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

export interface RegisterResponse {
  status: boolean;
  status_code: number;
  message: string;
  data: RegisterUser;
}

export interface RegisterState {
  user: RegisterUser | null;
  loading: boolean;
  error: string | null;
  success: string | null;
}

/* ======================
   2️ Initial State
====================== */

const initialState: RegisterState = {
  user: null,
  loading: false,
  error: null,
  success: null,
};

/* ======================
   3️ Login Thunk
====================== */

export const register = createAsyncThunk<
  RegisterResponse,
  RegisterPayload,
  { rejectValue: string }
>(
  "register/user",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://tinytales.trendline.marketing/api/auth/register",
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

      // error
      if (!response.ok || result.status === false) {
        return rejectWithValue(result.message || "Registration failed");
      }

      // done
      return result;
    } catch (error: unknown|any) {
      return rejectWithValue(
        error?.message || "Network error, please try again"
      );
    }
  }
);


/* ======================
   4️ Slice
====================== */

 const registerSlice = createSlice({
name: "register",
initialState,
reducers: {
    logout(state) {
    state.user = null;
    },
},
extraReducers: (builder) => {
    builder

    .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
    })

  
    .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.success = action.payload.message;
        localStorage.setItem("token", action.payload.data.token);
    })

  
    .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
    });
},
});

/* ======================
   5️ Exports
====================== */

export const { logout } = registerSlice.actions;
export default registerSlice.reducer;

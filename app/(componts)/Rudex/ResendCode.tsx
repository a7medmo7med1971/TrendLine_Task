import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* ================== Types ================== */

export interface ResendVerifyResponse {
  status: boolean;
  status_code: number;
  data: null;
  message: string;
}

export interface ResendVerifyState {
  loading: boolean;
  error: string | null;
  success: string | null;
}

/* ================== Initial State ================== */

const initialState: ResendVerifyState = {
  loading: false,
  error: null,
  success: null,
};

/* ================== Thunk ================== */

export const resendVerifyCode = createAsyncThunk<
  ResendVerifyResponse,
  void,
  { rejectValue: string }
>("verify/resend-code", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "https://tinytales.trendline.marketing/api/auth/verify-email/resend-code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();

    if (!response.ok || result.status === false) {
      return rejectWithValue(result.message);
    }

    return result;
  } catch (error: any) {
    return rejectWithValue(error?.message || "Failed to resend code");
  }
});

/* ================== Slice ================== */

const resendVerifySlice = createSlice({
  name: "resendVerify",
  initialState,
  reducers: {
    resetResendVerify(state) {
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resendVerifyCode.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })

      .addCase(resendVerifyCode.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload.status) {
          state.success = action.payload.message;
          state.error = null;
        } else {
          state.error = action.payload.message;
          state.success = null;
        }
      })

      .addCase(resendVerifyCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetResendVerify } = resendVerifySlice.actions;
export default resendVerifySlice.reducer;

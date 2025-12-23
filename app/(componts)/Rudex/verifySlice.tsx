import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export interface VerifyPayload {
  code: string; 
}

export interface VerifyResponse {
  status: boolean;
  status_code: number;
  data: null;
  message: string;
}

export interface VerifyState {
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: VerifyState = {
  loading: false,
  error: null,
  success: null,
};


export const verifyEmail = createAsyncThunk<
  VerifyResponse,
  VerifyPayload,
  { rejectValue: string }
>(
  "verify/email",
  async (data, { rejectWithValue }) => {
    try {
         const token = localStorage.getItem("token");
      const response = await fetch(
        "https://tinytales.trendline.marketing/api/auth/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
             body: JSON.stringify({
            code: data.code, // ✅ بس
          }), // { code }
        }
      );

      const result = await response.json();

      if (!response.ok || result.status === false) {
        return rejectWithValue(result.message);
      }

      return result;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Verification failed");
    }
  }
);


const verifySlice = createSlice({
  name: "verify",
  initialState,
  reducers: {
    resetVerify(state) {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })

      .addCase(verifyEmail.fulfilled, (state, action) => {
    state.loading = false;

  if (action.payload.status) {
    state.success = action.payload.message;
    state.error = null;
  } else {
    state.error = action.payload.message;
    state.success = null;
  }
      })

      .addCase(verifyEmail.rejected, (state, action) => {
         state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetVerify } = verifySlice.actions;
export default verifySlice.reducer;
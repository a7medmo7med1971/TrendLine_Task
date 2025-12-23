import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* ======================
   Interfaces
====================== */

export interface UserData {
  id: number;
  type: string;
  name: string;
  email: string;
  mobile_country_code: string;
  mobile: string;
  image: string;
  email_verified_at: boolean;
  count_items_cart: number;
  token: string;
}

interface UserDataResponse {
  status: boolean;
  status_code: number;
  message: string;
  data: UserData;
}

interface UserDataState {
  user: UserData | null;
  loading: boolean;
  error: string | null;
}

/* ======================
   Initial State
====================== */

const initialState: UserDataState = {
  user: null,
  loading: false,
  error: null,
};

/* ======================
   Thunk (API Call)
====================== */

export const getUserData = createAsyncThunk<
  UserDataResponse,
  void,
  { rejectValue: string }
>("user/getUserData", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "https://tinytales.trendline.marketing/api/auth/user-data",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();

    if (!response.ok || result.status === false) {
      return rejectWithValue(result.message || "فشل تحميل بيانات المستخدم");
    }

    return result;
  } catch (error: any) {
    return rejectWithValue(
      error?.message || "خطأ في الاتصال بالسيرفر"
    );
  }
});

/* ======================
   Slice
====================== */

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    clearUserData(state) {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

/* ======================
   Exports
====================== */

export const { clearUserData } = userDataSlice.actions;
export default userDataSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "@/app/(componts)/Rudex/registerSlice";
import loginSlice from "@/app/(componts)/Rudex/loginSlice";
import verifySlice from "@/app/(componts)/Rudex/verifySlice";
import userDataSlice from "@/app/(componts)/Rudex/getUserDataSlice";
import resendVerifySlice from "@/app/(componts)/Rudex/ResendCode";



export const store = configureStore({
  reducer: {
    register: registerSlice,
    login:loginSlice,
    verify:verifySlice,
    userData:userDataSlice,
    ResendCode:resendVerifySlice,
  },
});

/* ===== Types ===== */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

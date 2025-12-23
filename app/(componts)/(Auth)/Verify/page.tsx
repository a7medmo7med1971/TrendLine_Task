"use client";
import React, { useRef } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../Rudex/hooks";
import { verifyEmail } from "@/app/(componts)/Rudex/verifySlice";
import { resendVerifyCode } from "@/app/(componts)/Rudex/ResendCode";

export default function Verify() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const { loading, error, success } = useAppSelector(
    (state) => state.verify
  );

  const {
    loading: resendLoading,
    error: resendError,
    success: resendSuccess,
  } = useAppSelector((state) => state.verify);

  const formik = useFormik({
    initialValues: {
      code: ["", "", "", "", "", ""],
    },

    onSubmit: async (values) => {
      const finalCode = values.code.join("");

      const res: any = await dispatch(
        verifyEmail({ code: finalCode })
      );

      if (
        res.meta.requestStatus === "fulfilled" &&
        res.payload?.status === true
      ) {
        router.push("/Login");
      }
    },
  });

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    formik.setFieldValue(`code[${index}]`, value);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !formik.values.code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    dispatch(resendVerifyCode());
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h1 className="mb-4 text-center text-2xl font-semibold text-slate-900">
          Email Verification
        </h1>

        <p className="mb-6 text-center text-sm text-slate-600">
          Enter the 6-digit verification code sent to your email address
        </p>

        {/* Verify Success */}
        {success && (
          <p className="mb-4 rounded-lg bg-green-100 p-3 text-sm text-green-700">
            {success}
          </p>
        )}

        {/* Resend Error */}
        {resendError && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {resendError}
          </p>
        )}

        {/* Resend Success */}
        {resendSuccess && (
          <p className="mb-4 rounded-lg bg-green-100 p-3 text-sm text-green-700">
            {resendSuccess}
          </p>
        )}

        {/* OTP Inputs */}
        <div className="mb-6 flex justify-between gap-2">
          {formik.values.code.map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength={1}
              value={formik.values.code[index]}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              className="h-12 w-12 rounded-xl border border-slate-300 text-center text-lg font-semibold
              focus:border-[#BE968E] focus:ring-2 focus:ring-blue-500/20 outline-none"
            />
          ))}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mb-4 w-full rounded-xl bg-[#BE968E] px-4 py-3 text-sm font-semibold text-white
          hover:bg-[#6d3c32] disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Confirm"}
        </button>

        {/* Resend Code */}
        <button
          type="button"
          onClick={handleResend}
          disabled={resendLoading}
          className="w-full text-center text-sm font-medium text-[#6d3c32] cursor-pointer hover:underline disabled:opacity-60"
        >
          Resend verification code
        </button>
      </form>
    </div>
  );
}

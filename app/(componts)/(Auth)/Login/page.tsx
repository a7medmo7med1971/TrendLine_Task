"use client";
import { useEffect } from "react";
import { useFormik } from "formik";
import { login } from "@/app/(componts)/Rudex/loginSlice";
import { useAppDispatch, useAppSelector } from "../../Rudex/hooks";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading, error, user } = useAppSelector(
    (state) => state.login
  );

  const loginSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  // Redirect after successful login
useEffect(() => {
  if (user) {
    toast.success("Login successful ");
    router.push("/");
  } if (error) {
    toast.error(error);
  }
}, [user, router,error]);


  const errorStyle = "mt-1 text-sm text-red-600";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={formikLogin.handleSubmit}
        className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h1 className="mb-6 text-center text-2xl font-semibold text-[#BE968E]">
          Sign In
        </h1>

        {/* API Error */}
        {error && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-[#BE968E]">
            Email Address
          </label>
          <input
            placeholder="ahmed_mohamed@gmail.com"
            type="email"
            name="email"
            onChange={formikLogin.handleChange}
            onBlur={formikLogin.handleBlur}
            value={formikLogin.values.email}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
          />
          {formikLogin.touched.email && formikLogin.errors.email && (
            <p className={errorStyle}>{formikLogin.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-[#BE968E]">
            Password
          </label>
          <input
            placeholder="A7m123@"
            type="password"
            name="password"
            onChange={formikLogin.handleChange}
            onBlur={formikLogin.handleBlur}
            value={formikLogin.values.password}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
          />
          {formikLogin.touched.password && formikLogin.errors.password && (
            <p className={errorStyle}>{formikLogin.errors.password}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#BE968E] px-4 py-3 text-sm font-semibold text-white
          hover:bg-yellow-900 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link
            href="/Register"
            className="font-medium text-[#BE968E] hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}

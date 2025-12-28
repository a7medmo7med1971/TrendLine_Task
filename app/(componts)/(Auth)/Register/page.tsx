"use client";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/app/(componts)/Rudex/registerSlice";
import type { AppDispatch, RootState } from "@/app/(componts)/Rudex/store";
import Link from "next/link";
import * as Yup from "yup";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



export default function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const router=useRouter()
  const { loading, error, success } = useSelector(
    (state: RootState) => state.register
  );

const registerSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  password_confirmation: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),

  mobile: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{9,15}$/, "Invalid phone number"),

  mobile_country_code: Yup.string()
    .required("Country code is required")
    .matches(/^[0-9]{1,4}$/, "Invalid country code"),
});


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      mobile: "",
      mobile_country_code: "20",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });
  useEffect(() => {
  if (success) {
    toast.dismiss();
    toast.success(success);
    router.push("/Verify");
  }

  if (error) {
    toast.dismiss();
    toast.error(error);
  }
}, [success, error]);


  const errorStyle = "mt-1 text-sm text-red-600";

  return (
    <div className="flex items-center justify-center  bg-slate-50 ">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
      >
        <h1 className="mb-6 text-center text-2xl font-semibold text-[#BE968E]">
          Create an account
        </h1>

        {success && (
          <p className="mb-4 rounded-lg bg-green-100 p-3 text-sm text-green-700">
            {success}
          </p>
        )}

        {error && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#BE968E]"> Full Name:</label>
          <input
            placeholder="ahmed_mohamed"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full rounded-xl border px-4 py-3"
          />
          {formik.touched.name && formik.errors.name && (
            <p className={errorStyle}>{formik.errors.name}</p>
          )}
        </div>

        {/* Email address */}
        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#BE968E]"> Email address:</label>
          <input
            placeholder="ahmed_mohamed@gmail.com"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full rounded-xl border px-4 py-3"
          />
          {formik.touched.email && formik.errors.email && (
            <p className={errorStyle}>{formik.errors.email}</p>
          )}
        </div>

        {/* Password  */}
        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#BE968E]">Password: </label>
          <input
            placeholder="A7m123@"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full rounded-xl border px-4 py-3"
          />
          {formik.touched.password && formik.errors.password && (
            <p className={errorStyle}>{formik.errors.password}</p>
          )}
        </div>

        {/*  Confirm password  */}
        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#BE968E]"> Confirm Password: </label>
          <input
            placeholder="A7m123@"
            type="password"
            name="password_confirmation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password_confirmation}
            className="w-full rounded-xl border px-4 py-3"
          />
          {formik.touched.password_confirmation &&
            formik.errors.password_confirmation && (
              <p className={errorStyle}>
                {formik.errors.password_confirmation}
              </p>
            )}
        </div>

        {/* Phone number */}
        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#BE968E]">Phone Number;</label>
          <input
           placeholder="(20+)10889922"
            name="mobile"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            className="w-full rounded-xl border px-4 py-3"
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <p className={errorStyle}>{formik.errors.mobile}</p>
          )}
        </div>

        {/*Country Code*/}
        <div className="mb-6">
          <label className="block mb-1 text-sm text-[#BE968E]">Country Code </label>
          <input
           placeholder="20"
            name="mobile_country_code"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile_country_code}
            className="w-full rounded-xl border px-4 py-3"
          />
          {formik.touched.mobile_country_code &&
            formik.errors.mobile_country_code && (
              <p className={errorStyle}>
                {formik.errors.mobile_country_code}
              </p>
            )}
        </div>
          
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#BE968E] px-4 py-3 text-white"
        >
          {loading ? "Creating account..." : "Sign in"}
        </button>
       
        <p className="mt-6 text-center text-sm">
         Already have an account?{" "}
          <Link href="/Login" className="text-[#BE968E]">
           Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

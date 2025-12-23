"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/(componts)/Rudex/hooks";
import { getUserData } from "@/app/(componts)/Rudex/getUserDataSlice";
import Image from "next/image";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector(
    (state) => state.userData
  );

  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  /* ================= Loading ================= */
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-b-yellow-800 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-yellow-800 text-lg font-medium">
            Loading your data...
          </p>
        </div>
      </div>
    );
  }

  /* ================= Error ================= */
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-red-100">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-3">
            Something went wrong
          </h2>
          <p className="text-slate-600 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-white p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mt-10">
          <h1 className="text-5xl font-bold text-slate-900 mb-3">
            Welcome, {user.name}
          </h1>
          <p className="text-slate-600 text-lg">
            Here’s a quick overview of your account
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10 border border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="relative w-28 h-28 rounded-full overflow-hidden flex items-center justify-center shadow-xl">
                {!imgError && user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  <span className="text-white text-4xl font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>

              {/* Email Status */}
              <div
                className={`absolute bottom-1 right-1 w-7 h-7 rounded-full border-4 border-white shadow-lg ${
                  user.email_verified_at
                    ? "bg-green-500"
                    : "bg-amber-500"
                }`}
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {user.name}
              </h2>
              <p className="text-slate-600 mb-4 text-lg">
                {user.email}
              </p>

              <span
                className={`inline-block px-5 py-2 rounded-full text-sm font-semibold shadow-md ${
                  user.email_verified_at
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {user.email_verified_at
                  ? "✓ Email Verified"
                  : "⏳ Email Not Verified"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

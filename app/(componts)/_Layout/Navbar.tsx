"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/(componts)/Rudex/hooks";
import { logout } from "@/app/(componts)/Rudex/loginSlice";
import { useRouter } from "next/navigation";
import { clearUserData } from "../Rudex/getUserDataSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.login);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUserData());
    localStorage.removeItem("token");
    router.push("/Login");
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-yellow-900">
      <div className="mx-auto max-w-screen-xl px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-white">MyTask</span>

          {/* ================= Desktop ================= */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            {user && (
              <li>
                <Link href="/">Dashboard</Link>
              </li>
            )}

            {!user ? (
              <>
                <li>
                  <Link href="/Login">Sign in</Link>
                </li>
                <li>
                  <Link href="/Register">Create an account</Link>
                </li>
              </>
            ) : (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>

        {/* ================= Mobile ================= */}
        {open && (
          <ul className="mt-4 flex flex-col gap-3 rounded-xl bg-white p-4 text-sm md:hidden">
            {user && (
              <li>
                <Link href="/" onClick={() => setOpen(false)}>
                  Dashboard
                </Link>
              </li>
            )}

            {!user ? (
              <>
                <li>
                  <Link href="/Login" onClick={() => setOpen(false)}>
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/Register" onClick={() => setOpen(false)}>
                    Create an account
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full rounded-lg bg-yellow-900 px-4 py-2 text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
}

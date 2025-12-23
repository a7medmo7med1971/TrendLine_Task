"use client";
import {
  Home,
  LayoutGrid,
  Info,
  Phone,
  HelpCircle,
  Heart,
  ShoppingCart,
  User,
  Menu,
} from "lucide-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppDispatch, useAppSelector } from "../Rudex/hooks";
import { useRouter } from "next/navigation";
import { logout } from "../Rudex/loginSlice";
import { clearUserData } from "../Rudex/getUserDataSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUserData());

    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }

    router.replace("/Login");
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* LEFT GROUP */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logoheader.png"
              alt="Tinytales"
              width={66}
              height={51}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-Poppins text-[#8A8A8A]">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-yellow-900 transition"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>

            <Link
              href="/categories"
              className="flex items-center gap-2 hover:text-yellow-900 transition"
            >
              <LayoutGrid className="h-4 w-4" />
              Our Category
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 hover:text-yellow-900 transition"
            >
              <Info className="h-4 w-4" />
              About Us
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-yellow-900 transition"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </Link>

            <Link
              href="/faqs"
              className="flex items-center gap-2 hover:text-yellow-900 transition"
            >
              <HelpCircle className="h-4 w-4" />
              FAQs
            </Link>
          </nav>
        </div>

        {/* RIGHT GROUP */}
        <div className="hidden lg:flex items-center gap-4">
          <Heart className="h-5 w-5 cursor-pointer hover:text-yellow-900 transition" />
          <ShoppingCart className="h-5 w-5 cursor-pointer hover:text-yellow-900 transition" />

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-yellow-900"
              >
                EN
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer">EN</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">AR</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex items-center gap-1"
              >
                <User className="h-5 w-5" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {!user ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/Login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/Register">Register</Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem disabled>
                    {user.name || "My Account"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/dashboardUser"}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 cursor-pointer"
                  >
                    Logout
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-72">
              <div className="mb-6">
                <Image
                  src="/assets/logo.svg"
                  alt="Tinytales"
                  width={80}
                  height={40}
                />
              </div>

              <nav className="flex flex-col gap-4 text-sm font-medium">
                <Link href="/">Home</Link>
                <Link href="/categories">Our Category</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/faqs">FAQs</Link>

                <hr className="my-4" />

                <Link href="/Login">Login</Link>
                <Link href="/Register">Register</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

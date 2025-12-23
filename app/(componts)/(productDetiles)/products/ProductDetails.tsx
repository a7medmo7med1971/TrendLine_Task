import Header from "../../_Layout/Header";
import Image from "next/image";
import Link from "next/link";
import ProductDetailsSection from "./ProductDetailsSection";
import Rating from "./Rating";
import SimilarItems from "./SimilarItems";
import Footer from "../../_Layout/Footer";

export default function ProductDetails() {
  return (
    <>
      <Header />
      {/* ===== Hero Section ===== */}
      <div className="w-full relative h-[130px] md:h-[230px] flex flex-col items-center justify-center">
        <Image
          src="/assets/heading.png"
          alt="section-heading"
          fill
          className="absolute inset-0"
        />
        <p
          className="text-transparent font-bold text-[36px] sm:text-[50px] md:text-[80px] absolute"
          style={{
            WebkitTextStroke: "1px rgba(0, 0, 0, 0.05)",
          }}
        >
          Product Details
        </p>
        <h3 className="font-semibold text-xl sm:text-3xl">Product Details</h3>
      </div>
      {/* ===== Breadcrumb ===== */}
      <div className="mx-auto max-w-7xl px-4 mt-8">
        <div className="rounded-xl bg-[#ECECEC66] px-6 py-4  flex items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-yellow-900 transition font-Poppins"
          >
            Home
          </Link>
          <span>›</span>
          <Link
            href="/categories"
            className="hover:text-yellow-900 transition font-Poppins"
          >
            Our Category
          </Link>
          <span>›</span>
          <span className="text-[#8A8A8A] font-Poppins">Product Details</span>
        </div>
      </div>
      <ProductDetailsSection />
      {/* Rating */}
      <Rating />
      {/* Similar Items */}
      <SimilarItems />
      <Footer />
    </>
  );
}

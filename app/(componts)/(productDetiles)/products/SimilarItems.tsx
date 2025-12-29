"use client";
import { Heart, ShoppingBag, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type Product = {
  id: number;
  category: string;
  title: string;
  price: number;
  oldPrice: number | null;
  discount: string | null;
  rating: number;
  reviews: number;
  image: string;
  colors: string[];
  hasMoreColors: number;
  badges: string[];
};

  const products: Product[]= [
  {
    id: 1,
    badges: ["favorite"],
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 900,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 2910,
    image: "/assets/image-slider1.png",
    colors: ["#D4A5A5", "#2C2C2C", "#F5F5F5"],
    hasMoreColors: 2,
   
  },
  {
    id: 2,
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 900,
    oldPrice: 1300,
    discount: "25% OFF",
    rating: 4.5,
    reviews: 2910,
    image: "/assets/image-slider2.png",
    colors: ["#D4A5A5", "#2C2C2C"],
    hasMoreColors: 2,
    badges: [],
  },
  {
    id: 3,
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 900,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 2910,
    image: "/assets/image-slider3.png",
    colors: ["#D4A5A5", "#2C2C2C"],
    hasMoreColors: 2,
    badges: ["new", "favorite"],
  },
  {
    id: 4,
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 900,
    oldPrice: 1300,
    discount: "25% OFF",
    rating: 4.5,
    reviews: 2910,
    image: "/assets/image-slider1.png",
    colors: ["#D4A5A5", "#2C2C2C"],
    hasMoreColors: 2,
    badges: [],
  },
  {
    id: 5,
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 900,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 2910,
    image: "/assets/image-slider4.png",
    colors: ["#D4A5A5", "#2C2C2C"],
    hasMoreColors: 2,
    badges: [],
  },
];

export default function SimilarItems() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold">Similar Items</h2>
        <div className="w-10 h-1 bg-[#BE968E] mt-2 rounded-full" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".similar-next",
          prevEl: ".similar-prev",
        }}
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group bg-white rounded-xl overflow-hidden border hover:shadow-lg transition">
              {/* Image */}
              <div className="relative aspect-square ">
                <Image
                  src={product.image}
                  fill
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />

                {/* Discount */}
                {product.discount && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white rounded-full text-xs font-semibold text-[#BE968E]">
                    {product.discount}
                  </span>
                )}

                {/* Icons */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow">
                    <ShoppingBag className="w-5 h-5 text-[#BE968E]" />
                  </button>
                  <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow">
                      <Heart
                    className={`w-5 h-5 transition ${
                      product.badges?.includes("favorite")
                        ? "text-black fill-black"
                        : "text-[#BE968E]"
                    }`}
                  />
                </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#BE968E] text-[#BE968E]" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-400">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <p className="text-sm font-medium line-clamp-2">
                  {product.title}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-lg">
                      AED {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        AED {product.oldPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    {product.colors.map((c, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                    <span className="text-xs font-medium">
                      +{product.hasMoreColors}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-10">
        <button className="cursor-pointer similar-prev w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <ChevronLeft />
        </button>
        <button className="cursor-pointer similar-next w-12 h-12 rounded-full bg-[#BE968E] text-white flex items-center justify-center">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Handbag,
} from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const colors = [
  { name: "Red", value: "red", bg: "bg-red-600" },
  { name: "Blue", value: "blue", bg: "bg-blue-300" },
  { name: "Khaki", value: "khaki", bg: "bg-yellow-700" },
  { name: "SkyBlue", value: "skyblue", bg: "bg-blue-400" },
  { name: "Gray", value: "gray", bg: "bg-gray-600" },
];

const thumbnails = [
  { id: 1, image: "/assets/image1.png" },
  { id: 2, image: "/assets/image2.png" },
  { id: 3, image: "/assets/image3.png" },
  { id: 4, image: "/assets/image3.png", extra: "+2" },
];

export default function ProductDetailsPage() {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedType, setSelectedType] = useState("Cotton");
  const [selectedSize, setSelectedSize] = useState("2XL");

  const price = 300;
  const oldPrice = 360;

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % thumbnails.length);

  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? thumbnails.length - 1 : prev - 1));

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ================= LEFT / IMAGES ================= */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-[4/5] rounded-2xl bg-gray-100 overflow-hidden">
            <Image
              src={thumbnails[currentImage].image}
              alt="Product Image"
              fill
              className="object-contain"
              priority
            />

            {/* Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-[48px] w-[48px] rounded-full bg-[#C4C4C4] text-white cursor-pointer shadow flex items-center justify-center"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-[48px] w-[48px] rounded-full bg-[#BE968E] hover:bg-[#89716c] cursor-pointer text-white shadow flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {thumbnails.map((thumb, index) => (
              <button
                key={thumb.id}
                onClick={() => setCurrentImage(index)}
                className={`relative aspect-[4/5] rounded-xl overflow-hidden ${
                  currentImage === index ? "ring-2 ring-black" : ""
                }`}
              >
                <Image
                  src={thumb.image}
                  alt="Thumbnail"
                  fill
                  className="object-contain bg-[#F5F5F5]"
                />

                {thumb.extra && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xl font-semibold">
                    {thumb.extra}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ================= RIGHT / INFO ================= */}
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <span className="px-4 py-3 rounded-full border border-[#BE968E] text-[14px] font-Poppins text-[#BE968E]">
              T-Shirt
            </span>

            <div className="flex gap-2">
              <button className="h-10 w-10 border border-[#e0d9d9a6] text-[#BE968E] rounded-lg flex items-center justify-center cursor-pointer">
                <ShoppingBag />
              </button>
              <button className="h-10 w-10 border border-[#e0d9d9a6] text-[#BE968E] rounded-lg flex items-center justify-center cursor-pointer">
                <Heart />
              </button>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-semibold leading-snug">
            J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
          </h1>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">${price.toFixed(2)}</span>
            <span className="line-through text-gray-400">
              ${oldPrice.toFixed(2)}
            </span>
          </div>

          <p className="text-sm text-gray-500">
            This price is exclusive of taxes.
          </p>

          {/* Description */}
          <p className=" text/black-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy.
          </p>
          <div className="h-[1px] w-full bg-[#E6E6E6] opacity-80" />

          {/* Type */}
          <div className="relative w-[299px]">
            <label className="absolute -top-2 left-3 z-10 bg-white px-1 text-xs font-medium text-dark">
              Type
            </label>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-[48px] w-[300px] p-6 rounded-lg border px-4 text-sm focus:ring-2 focus:ring-gray-300">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Cotton">Cotton</SelectItem>
                <SelectItem value="Linen">Linen</SelectItem>
                <SelectItem value="Polyester">Polyester</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Size */}
          <div className="relative w-[299px]">
            <label className="absolute -top-2 left-3 z-10 bg-white px-1 text-xs font-medium text-dark">
              Size
            </label>

            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="h-[48px] w-[300px] p-6 rounded-lg border px- text-sm focus:ring-2 focus:ring-gray-300">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="M">M</SelectItem>
                <SelectItem value="L">L</SelectItem>
                <SelectItem value="XL">XL</SelectItem>
                <SelectItem value="2XL">2XL</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Colors */}
          <div>
            <p className="font-medium mb-2">Colors</p>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setSelectedColor(c.value)}
                  className={`h-10 w-10 rounded-full  cursor-pointer ${c.bg} ${
                    selectedColor === c.value
                      ? "ring-2 ring-black ring-offset-2"
                      : ""
                  }`}
                />
              ))}
            </div>
            <p className="text-sm mt-2 capitalize">{selectedColor}</p>
          </div>

          {/* Quantity */}
          <div>
            <p className="font-medium mb-2">
              Quantity{" "}
              <span className="text-gray-400">
                (${price.toFixed(2)} for Piece)
              </span>
            </p>

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 rounded-xl bg-[#F6F6F6] px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="
                          min-h-[44px] min-w-[44px]
                          rounded-[12px] bg-white text-xl font-medium
                          shadow flex items-center justify-center
                          hover:bg-gray-100 active:scale-95
                          transition
                        "
                >
                  −
                </button>

                <span className="px-4 py-2 min-w-[48px] text-center text-lg font-semibold">
                  {String(quantity).padStart(2, "0")}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="
                    min-h-[44px] min-w-[44px]
                    rounded-[12px] bg-white text-xl font-medium
                    shadow flex items-center justify-center
                    hover:bg-gray-100 active:scale-95
                    transition
                  "
                >
                  +
                </button>
              </div>

              <span className="text-xl font-semibold">
                ${(quantity * price).toFixed(2)}
              </span>
              {/* Add to Cart */}
             <button
              className="
                min-h-[48px]
                min-w-[70px]

                px-6
                
                rounded-[14px]

                bg-[#BE968E]
                hover:bg-[#89716c]

                text-white text-base font-medium

                flex items-center justify-center gap-2
                shadow

                transition
                active:scale-95
              "
            >
              Add To Cart
              <Handbag className="w-5 h-5" />
            </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

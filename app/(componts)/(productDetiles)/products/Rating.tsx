"use client";

import { MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ratingData = [
  { stars: 5, percent: 67 },
  { stars: 4, percent: 15 },
  { stars: 3, percent: 6 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 9 },
];
const reviewsClient = [
  {
    id: 1,
    name: "Alex Daewn",
    rating: 4,
    date: "4 months ago",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  },
  {
    id: 2,
    name: "Alex Daewn",
    rating: 4,
    date: "4 months ago",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  },
  {
    id: 3,
    name: "Alex Daewn",
    rating: 4,
    date: "4 months ago",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  },
  {
    id: 4,
    name: "Alex Daewn",
    rating: 4,
    date: "4 months ago",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  },
];

export default function Rating() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-24">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Rating & Reviews</h2>
        <div className="h-1 w-12 bg-[#BE968E] mt-2"></div>
      </div>

      {/* Rating Summary */}
      <div className="flex flex-col lg:flex-row items-center gap-40 m-auto">
        {/* Score */}
          <div className="flex items-baseline gap-8">
            <span
              className="
                text-[96px]
                sm:text-[96px]
                md:text-[96px]
                lg:text-[96px]
                font-medium
                leading-none
                whitespace-nowrap
              "
            >
              4.5
            </span>

            <span
              className="
                text-[24px]
                text-gray-400
                leading-none
              "
            >
              /5
            </span>
          </div>


        {/* Bars */}
        <div className="w-full max-w-[520px] space-y-3">
          {ratingData.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-3">
              <Star className="text-[#BE968E]" fill="#BE968E" />
              <span className="w-3 font-medium">{rating.stars}</span>

              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-[#BE968E] rounded-full"
                  style={{ width: `${rating.percent}%` }}
                />
              </div>

              <span className="w-12 text-[#545454] font-medium">
                %{rating.percent}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="hidden lg:flex flex-col items-center gap-5 min-w-[200px]">
          <div className="text-center">
            <p className="text-sm text-[#545454] mb-2">Total Reviews</p>
            <p className="text-6xl font-semibold">3.0K</p>
          </div>

          <Button className="bg-[#BE968E] hover:bg-[#a87f79] text-white px-12 py-6 rounded-lg">
            Add Comment
            <MessageSquare className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Reviews */}
      <div className="w-full max-w-[1500px] mx-auto space-y-5 pt-10">
        {reviewsClient.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6">
            <div className="flex justify-between mb-3">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-[#BE968E] fill-[#BE968E]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-[#545454]">{review.date}</span>
            </div>
            <p className="text-[#020202] text-sm">{review.comment}</p>
          </div>
        ))}

        <div className="flex justify-center pt-6">
          <Button
            variant="outline"
            className="bg-[#F5F5F5] px-8 py-6 rounded-lg"
          >
            View More Comments
          </Button>
        </div>
      </div>
    </div>
  );
}

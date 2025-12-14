import React from 'react';
import { CONTENT } from "@/lib/content";
import { COLORS } from "@/lib/constants";

export default function Reviews() {
  const { reviews } = CONTENT;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 p-10 pt-0">
      {/* Header Section */}
      <div className="gap-10 flex flex-col items-center font-sans">
        <h1 className="text-5xl font-bold text-black text-center">
          {reviews.title}
        </h1>
        <p className="text-xl text-center w-[60svw]" style={{ color: COLORS.grayText }}>
          {reviews.description}
        </p>
      </div>

      {/* Reviews Masonry Grid */}
      <div className="w-[60svw]">
        <div
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          style={{
            columnFill: 'balance'
          }}
        >
          {reviews.testimonials.map((review, index) => (
            <div
              key={review.author + index}
              className="bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all duration-200 ease-in-out p-6 break-inside-avoid mb-8 inline-block w-full"
            >
              {/* Quote Icon */}
              <div className="text-6xl font-bold leading-none" style={{ color: COLORS.primaryDark }}>&ldquo;</div>

              {/* Review Text */}
              <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.grayText }}>
                {review.text}
              </p>

              {/* Author Info */}
              <div className="border-t-2 pt-4" style={{ borderColor: COLORS.backgroundGrid }}>
                <h4 className="text-xl font-bold mb-1" style={{ color: COLORS.primaryDark }}>
                  {review.author}
                </h4>
                <p className="text-lg" style={{ color: COLORS.grayText }}>
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

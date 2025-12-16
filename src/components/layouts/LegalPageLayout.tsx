import React from 'react';
import { COLORS } from "@/lib/constants";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              {title}
            </h1>
            <p className="text-lg" style={{ color: COLORS.grayText }}>
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
}

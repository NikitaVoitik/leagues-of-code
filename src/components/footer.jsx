'use client';

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Button from '@/components/Button';

export default function Footer() {
  return (
    <div
      className="w-full p-4 md:p-10"
      style={{
        backgroundColor: '#1836CF',
        backgroundImage: `
          linear-gradient(to right, #2644E0 1px, transparent 1px),
          linear-gradient(to bottom, #2644E0 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    >
      {/* Main Footer Content */}
      <div className="flex flex-col mx-auto gap-8 md:gap-16 w-full max-w-[90svw] md:w-[60svw]">
        {/* CTA Section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all duration-200 ease-in-out p-6 md:p-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4">
              Discover personalised learning with us. Book a free session
            </h2>
            <p className="text-lg md:text-xl text-[#626262] leading-relaxed">
              Once a meeting is booked, our representative will reach out and offer direction for the next steps. Expect a response within 1-2 business days.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button onClick={() => window.open('https://harbour-space.typeform.com/to/qaVsoIqp?typeform-source=join.leaguesofcode.com', '_blank')}>BOOK A FREE CLASS</Button>
          </div>
        </div>


        {/* Footer Bottom Section */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-10">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#1836CF] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white">Leagues of Code</h3>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 mb-6">
              <a href="/terms" className="text-white text-lg hover:underline">Terms & Conditions</a>
              <a href="/privacy" className="text-white text-lg hover:underline">Privacy Policy</a>
              <p className="text-white text-lg">Carrer de Rosa Sensat, 9-11, 08005 Barcelona</p>
            </div>

            <p className="text-white text-lg">© 2025 Leagues of Code. All Rights Reserved</p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto">
            {/* Email Display */}
            <div className="flex items-center gap-3 bg-white border-2 border-black rounded-md px-4 md:px-6 py-3 md:py-4 w-full sm:w-80">
              <Mail className="text-[#626262] flex-shrink-0" size={20} />
              <span className="text-lg text-black truncate">hello@leaguesofcode.com</span>
            </div>

            {/* Phone Display */}
            <div className="flex items-center gap-3 bg-white border-2 border-black rounded-md px-4 md:px-6 py-3 md:py-4 w-full sm:w-80">
              <Phone className="text-[#626262] flex-shrink-0" size={20} />
              <span className="text-lg text-black">+34 671 498 303</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { Copy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ReferralCardProps {
  referralCode: string;
  referralAmount: number;
}

export function ReferralCard({ referralCode, referralAmount }: ReferralCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-[#00205B] text-white rounded-t-3xl p-8 text-center relative">
        <h1 className="text-2xl font-semibold mb-4">
          Refer your friends<br />and earn
        </h1>
        
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src="/gift-box.png"
            alt="Gift Box"
            fill
            className="object-contain"
          />
        </div>

        <div className="text-3xl font-bold mb-2">
          ₹ {referralAmount}
        </div>
        <div className="text-sm text-gray-300 mb-6">
          Refer Money
        </div>

        <p className="text-sm mb-8">
          Your friend gets ₹{referralAmount}/- on booking<br />
          and you get ₹{referralAmount}/- too every time on booking!
        </p>

        <div className="border border-dashed border-white rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm mb-1">Your referral code</div>
              <div className="text-xl font-bold">{referralCode}</div>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
            >
              <Copy size={16} />
              <span>{copied ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>
        </div>

        <div className="text-center mb-4">
          Share your Referral Code via
        </div>
      </div>

      {/* Curved bottom section with social buttons */}
      <div className="bg-[#00205B] rounded-b-[40px] pb-12 px-6">
        <div className="flex justify-between items-center gap-4 -mt-2">
          <a
            href="#"
            className="flex-1 bg-[#29B6F6] text-white py-3 px-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="text-lg">⟨</span> Telegram
          </a>
          <a
            href="#"
            className="flex-1 bg-[#1877F2] text-white py-3 px-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span>f</span> Facebook
          </a>
          <a
            href="#"
            className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-6 space-y-4">
        <details className="group">
          <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="font-medium">What is Refer and Earn Program?</span>
            <span className="transition group-open:rotate-180">▼</span>
          </summary>
          <p className="mt-2 text-gray-600">
            Our referral program rewards you for bringing friends to our platform.
          </p>
        </details>

        <details className="group">
          <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="font-medium">How it Works?</span>
            <span className="transition group-open:rotate-180">▼</span>
          </summary>
          <p className="mt-2 text-gray-600">
            Share your unique referral code with friends. When they use it, both of you get rewards!
          </p>
        </details>

        <details className="group">
          <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="font-medium">Where can I use this Money?</span>
            <span className="transition group-open:rotate-180">▼</span>
          </summary>
          <p className="mt-2 text-gray-600">
            The earned money can be used for future bookings on our platform.
          </p>
        </details>
      </div>
    </div>
  );
}
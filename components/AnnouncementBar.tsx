'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('aai_announcement_dismissed');
    if (!dismissed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem('aai_announcement_dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#0D3B17] text-[#FFF8E1] px-4 py-2 flex items-center justify-between text-sm font-ui relative z-50">
      <div className="flex-1 text-center pr-8">
        <span className="hidden sm:inline">Now exporting premium Ghanaian yams and agricultural commodities to the UK and EU. </span>
        <span className="sm:hidden">UK/EU Export Programme now open. </span>
        <Link href="/export" className="underline font-bold hover:text-white ml-1">
          Learn more
        </Link>
      </div>
      <button
        onClick={dismiss}
        className="p-1 hover:bg-[#1B5E20] rounded-full transition-colors flex-shrink-0"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}

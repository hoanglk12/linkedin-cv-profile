'use client';

import { Download } from 'lucide-react';

interface DownloadButtonProps {
  variant?: 'header' | 'cta';
}

export default function DownloadButton({ variant = 'header' }: DownloadButtonProps) {
  const handleDownload = () => {
    // Open the PDF in a new tab for immediate viewing
    window.open('/cv.pdf', '_blank');
  };

  if (variant === 'cta') {
    return (
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        aria-label="Download CV as PDF"
      >
        <Download className="w-6 h-6" />
        <span className="text-lg">Download Complete CV</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
      aria-label="Download CV as PDF"
    >
      <Download className="w-4 h-4" />
      <span className="hidden sm:inline">Download CV</span>
    </button>
  );
}

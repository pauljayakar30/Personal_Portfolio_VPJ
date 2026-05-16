import React from 'react';
import { Download } from 'lucide-react';
import { Metadata } from 'next';
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: 'Resume | Vasu Paul Jayakar',
  description: 'Resume of Vasu Paul Jayakar',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 border-b border-black/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Vasu Paul Jayakar&apos;s Resume</h1>
          </div>
          <a
            href="/Vasu%20Paul%20Jayakar%20Resume%20-%20JT%20New.pdf"
            download
            className="mt-6 md:mt-0 hidden md:flex items-center gap-2 bg-[#1d1d1f] text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-[0.98] active:scale-95 transition-transform w-max shadow-sm"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        {/* Mobile: Download-only card */}
        <div className="flex md:hidden flex-col items-center justify-center py-20 px-6 text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#1d1d1f]/5 flex items-center justify-center mb-6">
            <Download size={32} className="text-[#1d1d1f]" />
          </div>
          <p className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Download Resume</p>
          <p className="text-sm text-[#86868B] mb-8 max-w-xs">
            PDF preview isn&apos;t available on mobile. Tap below to download.
          </p>
          <a
            href="/Vasu%20Paul%20Jayakar%20Resume%20-%20JT%20New.pdf"
            download
            className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-sm font-medium hover:scale-[0.98] active:scale-95 transition-transform shadow-sm"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        {/* Desktop: PDF Viewer */}
        <div className="hidden md:block w-full max-w-5xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl border border-black/5 p-2 md:p-4 shadow-sm">
          <div className="w-full relative rounded-xl overflow-hidden shadow-sm border border-black/5 bg-gray-50/50 flex flex-col items-center justify-center min-h-[80vh]" style={{ aspectRatio: '8.5/11' }}>
            <object
              data="/Vasu%20Paul%20Jayakar%20Resume%20-%20JT%20New.pdf#view=FitH"
              type="application/pdf"
              className="absolute inset-0 w-full h-full z-10"
            >
              <div className="flex flex-col items-center justify-center p-8 text-center h-full">
                <p className="text-lg font-medium text-[#1d1d1f] mb-2">Resume PDF could not be displayed.</p>
                <p className="text-sm text-gray-500 mb-4">
                  Your browser might not support embedded PDFs.
                </p>
                <a
                  href="/Vasu%20Paul%20Jayakar%20Resume%20-%20JT%20New.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-[0.98] transition-transform"
                >
                  <Download size={16} />
                  Download PDF Instead
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

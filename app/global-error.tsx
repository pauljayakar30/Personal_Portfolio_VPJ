"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Critical global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased bg-[#f5f5f7] text-[#1d1d1f] min-h-screen flex flex-col items-center justify-center px-4 font-sans">
        <div className="flex flex-col items-center text-center max-w-2xl w-full mx-auto p-10 bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[3rem]">
          <div className="w-20 h-20 mb-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Critical System Error</h2>
          <p className="text-lg text-black/60 mb-10 max-w-md font-medium">
            A critical error occurred at the root level. Please try refreshing the page or returning later.
          </p>
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-[#1d1d1f] text-white rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}

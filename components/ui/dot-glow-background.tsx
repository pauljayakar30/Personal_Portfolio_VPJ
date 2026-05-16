"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const DotGlowBackground = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("min-h-screen w-full relative bg-white", className)}>
      {/* Noise Texture (Darker Dots) Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.25) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      

      
      {/* Your Content/Components */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

"use client";

import React, { useEffect } from 'react';

function Page() {
  return (
    <div className="min-h-screen flex bg-black items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="w-full max-w-4xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScw-gc2Uzjn95G2yw-39ojeUmCGQCXUL3b9zbxqkQ41KDU4JQ/viewform?embedded=true"
          className="w-full rounded-lg border-none"
          style={{
            height: '80vh', // Dynamic height for mobile and PC
            aspectRatio: '3 / 2', // Maintains a proper ratio across devices
            maxHeight: '100vh',
          }}
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Page;

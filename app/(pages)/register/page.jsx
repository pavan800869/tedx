import React from 'react';

function Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 overflow-hidden">
      <div className="w-full max-w-4xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScw-gc2Uzjn95G2yw-39ojeUmCGQCXUL3b9zbxqkQ41KDU4JQ/viewform?embedded=true"
          className="w-full h-full rounded-lg border-none"
          style={{ height: '380vh', overflow: 'hidden' }}
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Page;

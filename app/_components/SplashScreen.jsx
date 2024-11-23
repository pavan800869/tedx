// _components/SplashScreen.js
import React from 'react';

const SplashScreen = ({ onAnimationEnd }) => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        onEnded={onAnimationEnd}
      >
        <source src="/tedx/events/animation.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
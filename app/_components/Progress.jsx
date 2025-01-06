import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let rafId;
    let lastScrollY = 0;
    let currentProgress = 0;

    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    const smoothScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetProgress = (window.scrollY / totalHeight) * 100;
      
      // Smooth interpolation
      const ease = 0.1;
      currentProgress += (targetProgress - currentProgress) * ease;
      
      if (Math.abs(targetProgress - currentProgress) > 0.01) {
        setProgress(currentProgress);
        rafId = requestAnimationFrame(smoothScroll);
      } else {
        setProgress(targetProgress);
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(smoothScroll);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 md:h-2 bg-transparent z-50">
      <div 
        className="h-full bg-red-500 transition-transform duration-300 ease-out"
        style={{
          width: `${progress}%`,
          left: isMobile ? '0' : `${50 - progress/2}%`,
          position: 'absolute',
          transform: `scaleX(${progress / 100})`,
          transformOrigin: isMobile ? 'left' : 'center'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
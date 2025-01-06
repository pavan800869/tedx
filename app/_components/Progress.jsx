import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', updateScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 md:h-2 bg-transparent z-50">
      <div 
        className="h-full bg-red-500 transition-all duration-150"
        style={{
          width: `${progress}%`,
          left: isMobile ? '0' : `${50 - progress/2}%`,
          position: 'absolute'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
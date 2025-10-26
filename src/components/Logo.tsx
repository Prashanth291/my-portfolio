import { useState } from 'react';

const Logo = ({ className = 'w-10 h-10' }: { className?: string }) => {
  // Try PNG first (user-provided), fall back to SVG placeholder if PNG isn't present
  const [src, setSrc] = useState('/logo.png');

  return (
    <img
      src={src}
      alt="Prasanth Kumar logo"
      className={className}
      onError={() => {
        if (src !== '/logo.svg') setSrc('/logo.svg');
      }}
    />
  );
};

export default Logo;

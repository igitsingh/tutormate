import React from 'react';

const Logo = ({ size = 'md', light = false, style = {}, onClick }) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';
  
  const boxSize = isLarge ? 56 : isSmall ? 28 : 36;
  const fontSize = isLarge ? '3rem' : isSmall ? '1.1rem' : '1.5rem';
  const boxFontSize = isLarge ? '2rem' : isSmall ? '1rem' : '1.25rem';
  const borderRadius = isLarge ? 16 : isSmall ? 8 : 10;
  const gap = isLarge ? 16 : isSmall ? 8 : 12;

  const textColor = light ? 'white' : 'var(--text-strong)';
  const mateColor = light ? 'rgba(255,255,255,0.6)' : 'inherit';

  return (
    <div 
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: gap,
        fontFamily: "'Outfit', sans-serif",
        cursor: 'pointer',
        ...style
      }}
    >
      {/* Icon Box */}
      <div style={{ 
        width: boxSize, 
        height: boxSize, 
        background: 'var(--primary-blue)', 
        borderRadius: borderRadius, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'white', 
        fontSize: boxFontSize, 
        fontWeight: 900,
        boxShadow: isLarge ? '0 8px 16px rgba(37, 99, 235, 0.3)' : 'none'
      }}>
        T
      </div>

      {/* Text Branding */}
      <div style={{ 
        fontSize: fontSize, 
        letterSpacing: '-0.04em',
        color: textColor,
        display: 'flex',
        alignItems: 'center'
      }}>
        <span style={{ fontWeight: 900 }}>tutor</span>
        <span style={{ fontWeight: 300, color: mateColor }}>mate</span>
      </div>
    </div>
  );
};

export default Logo;

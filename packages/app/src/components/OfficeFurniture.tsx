/**
 * OfficeFurniture - Retro tycoon-style office decorations
 * Desks, plants, filing cabinets, water coolers, etc.
 */

import React from 'react';

interface FurnitureProps {
  type: 'desk' | 'plant' | 'filing-cabinet' | 'water-cooler' | 'coffee-station' | 'meeting-table';
  className?: string;
}

export const OfficeFurniture: React.FC<FurnitureProps> = ({ type, className = '' }) => {
  const furnitureSVGs = {
    desk: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Desk surface */}
        <rect x="5" y="25" width="70" height="8" fill="#8B4513" rx="1" />
        <rect x="5" y="33" width="70" height="3" fill="#654321" />
        {/* Legs */}
        <rect x="10" y="36" width="5" height="20" fill="#654321" />
        <rect x="65" y="36" width="5" height="20" fill="#654321" />
        {/* Drawer */}
        <rect x="50" y="40" width="15" height="8" fill="#A0522D" rx="1" />
        <rect x="56" y="43" width="3" height="2" fill="#FFD700" rx="0.5" />
      </svg>
    ),
    plant: (
      <svg viewBox="0 0 60 80" className={`w-full h-full ${className}`}>
        {/* Pot */}
        <path d="M 25 60 L 20 75 L 40 75 L 35 60 Z" fill="#8B4513" />
        <ellipse cx="30" cy="60" rx="10" ry="4" fill="#A0522D" />
        {/* Plant leaves */}
        <ellipse cx="25" cy="50" rx="8" ry="15" fill="#228B22" transform="rotate(-20 25 50)" />
        <ellipse cx="35" cy="50" rx="8" ry="15" fill="#32CD32" transform="rotate(20 35 50)" />
        <ellipse cx="30" cy="40" rx="10" ry="18" fill="#2E8B57" />
        <ellipse cx="28" cy="30" rx="7" ry="12" fill="#228B22" transform="rotate(-15 28 30)" />
        <ellipse cx="32" cy="28" rx="6" ry="10" fill="#32CD32" transform="rotate(15 32 28)" />
      </svg>
    ),
    'filing-cabinet': (
      <svg viewBox="0 0 60 100" className={`w-full h-full ${className}`}>
        {/* Cabinet body */}
        <rect x="15" y="20" width="30" height="70" fill="#696969" rx="2" />
        {/* Drawers */}
        <rect x="17" y="25" width="26" height="20" fill="#808080" rx="1" />
        <rect x="17" y="47" width="26" height="20" fill="#808080" rx="1" />
        <rect x="17" y="69" width="26" height="20" fill="#808080" rx="1" />
        {/* Handles */}
        <rect x="28" y="33" width="4" height="4" fill="#C0C0C0" rx="1" />
        <rect x="28" y="55" width="4" height="4" fill="#C0C0C0" rx="1" />
        <rect x="28" y="77" width="4" height="4" fill="#C0C0C0" rx="1" />
        {/* Top */}
        <rect x="13" y="18" width="34" height="4" fill="#505050" rx="1" />
      </svg>
    ),
    'water-cooler': (
      <svg viewBox="0 0 60 100" className={`w-full h-full ${className}`}>
        {/* Base */}
        <rect x="20" y="75" width="20" height="20" fill="#4169E1" rx="2" />
        {/* Body */}
        <rect x="22" y="55" width="16" height="20" fill="#87CEEB" />
        {/* Water bottle */}
        <path d="M 25 25 L 23 55 L 37 55 L 35 25 Z" fill="#ADD8E6" opacity="0.7" />
        <ellipse cx="30" cy="25" rx="5" ry="3" fill="#B0E0E6" />
        {/* Water level */}
        <path d="M 25 40 L 23 55 L 37 55 L 35 40 Z" fill="#4682B4" opacity="0.5" />
        {/* Cap */}
        <ellipse cx="30" cy="22" rx="4" ry="2" fill="#4169E1" />
        <rect x="28" y="18" width="4" height="4" fill="#4169E1" rx="1" />
        {/* Dispensers */}
        <circle cx="25" cy="65" r="2" fill="#FF6B6B" />
        <circle cx="35" cy="65" r="2" fill="#4169E1" />
      </svg>
    ),
    'coffee-station': (
      <svg viewBox="0 0 80 80" className={`w-full h-full ${className}`}>
        {/* Counter */}
        <rect x="10" y="50" width="60" height="25" fill="#8B4513" rx="1" />
        <rect x="10" y="50" width="60" height="5" fill="#A0522D" />
        {/* Coffee machine */}
        <rect x="20" y="30" width="20" height="20" fill="#2C3E50" rx="2" />
        <rect x="25" y="25" width="10" height="5" fill="#34495E" rx="1" />
        <circle cx="30" cy="38" r="3" fill="#E74C3C" />
        {/* Mug */}
        <rect x="50" y="42" width="10" height="8" fill="#FFF" rx="1" />
        <path d="M 60 44 Q 64 46 60 48" stroke="#DDD" strokeWidth="2" fill="none" />
        {/* Steam */}
        <path d="M 53 38 Q 52 34 53 30" stroke="#AAA" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M 57 38 Q 58 34 57 30" stroke="#AAA" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    ),
    'meeting-table': (
      <svg viewBox="0 0 120 80" className={`w-full h-full ${className}`}>
        {/* Table surface */}
        <ellipse cx="60" cy="35" rx="55" ry="25" fill="#8B4513" />
        <ellipse cx="60" cy="32" rx="55" ry="25" fill="#A0522D" />
        {/* Legs */}
        <rect x="20" y="57" width="6" height="18" fill="#654321" />
        <rect x="94" y="57" width="6" height="18" fill="#654321" />
        {/* Chairs hint */}
        <circle cx="30" cy="20" r="4" fill="#4169E1" opacity="0.3" />
        <circle cx="90" cy="20" r="4" fill="#4169E1" opacity="0.3" />
        <circle cx="60" cy="10" r="4" fill="#4169E1" opacity="0.3" />
        <circle cx="60" cy="60" r="4" fill="#4169E1" opacity="0.3" />
      </svg>
    ),
  };

  return <div className="pointer-events-none opacity-40">{furnitureSVGs[type]}</div>;
};

/**
 * AnimalAvatar - SVG-based cartoon farm animal heads
 * Fat, cute cartoon style matching Figma design specs
 */

import React from 'react';
import { FarmAnimalType } from '@labware/shared';

interface AnimalAvatarProps {
  animal: FarmAnimalType;
  size?: number;
  color?: string;
  status?: 'available' | 'processing' | 'escalation' | 'offline';
  className?: string;
}

export const AnimalAvatar: React.FC<AnimalAvatarProps> = ({
  animal,
  size = 80,
  color = '#FFD700',
  status = 'available',
  className = '',
}) => {
  const statusColors = {
    available: '#22c55e',
    processing: '#f97316',
    escalation: '#3b82f6',
    offline: '#9ca3af',
  };

  const statusColor = statusColors[status];

  // SVG paths for each animal type (fat cartoon style)
  const animalSVGs: Record<FarmAnimalType, JSX.Element> = {
    bear: (
      <g>
        {/* Head */}
        <circle cx="50" cy="55" r="35" fill={color} />
        {/* Ears */}
        <circle cx="25" cy="25" r="15" fill={color} />
        <circle cx="75" cy="25" r="15" fill={color} />
        {/* Inner ears */}
        <circle cx="25" cy="25" r="8" fill="#8B4513" />
        <circle cx="75" cy="25" r="8" fill="#8B4513" />
        {/* Snout */}
        <ellipse cx="50" cy="65" rx="18" ry="15" fill="#D2691E" />
        {/* Nose */}
        <ellipse cx="50" cy="65" rx="8" ry="6" fill="#000" />
        {/* Eyes */}
        <circle cx="38" cy="50" r="5" fill="#000" />
        <circle cx="62" cy="50" r="5" fill="#000" />
        <circle cx="40" cy="48" r="2" fill="#fff" />
        <circle cx="64" cy="48" r="2" fill="#fff" />
      </g>
    ),
    dog: (
      <g>
        {/* Head */}
        <ellipse cx="50" cy="55" rx="32" ry="35" fill={color} />
        {/* Floppy ears */}
        <ellipse cx="20" cy="50" rx="12" ry="25" fill={color} transform="rotate(-20 20 50)" />
        <ellipse cx="80" cy="50" rx="12" ry="25" fill={color} transform="rotate(20 80 50)" />
        {/* Snout */}
        <ellipse cx="50" cy="70" rx="20" ry="18" fill="#F4A460" />
        {/* Nose */}
        <ellipse cx="50" cy="70" rx="8" ry="6" fill="#000" />
        {/* Eyes */}
        <circle cx="38" cy="48" r="6" fill="#000" />
        <circle cx="62" cy="48" r="6" fill="#000" />
        <circle cx="40" cy="46" r="2" fill="#fff" />
        <circle cx="64" cy="46" r="2" fill="#fff" />
        {/* Tongue */}
        <ellipse cx="50" cy="85" rx="8" ry="5" fill="#ff6b9d" />
      </g>
    ),
    cat: (
      <g>
        {/* Head */}
        <circle cx="50" cy="55" r="32" fill={color} />
        {/* Pointy ears */}
        <path d="M 25 30 L 15 10 L 35 25 Z" fill={color} />
        <path d="M 75 30 L 85 10 L 65 25 Z" fill={color} />
        {/* Inner ears */}
        <path d="M 25 30 L 20 18 L 30 28 Z" fill="#FFB6C1" />
        <path d="M 75 30 L 80 18 L 70 28 Z" fill="#FFB6C1" />
        {/* Eyes */}
        <ellipse cx="38" cy="50" rx="8" ry="10" fill="#32CD32" />
        <ellipse cx="62" cy="50" rx="8" ry="10" fill="#32CD32" />
        <ellipse cx="38" cy="52" rx="3" ry="6" fill="#000" />
        <ellipse cx="62" cy="52" rx="3" ry="6" fill="#000" />
        {/* Nose */}
        <path d="M 50 60 L 45 65 L 55 65 Z" fill="#FFB6C1" />
        {/* Whiskers */}
        <line x1="20" y1="58" x2="35" y2="56" stroke="#000" strokeWidth="1" />
        <line x1="20" y1="62" x2="35" y2="62" stroke="#000" strokeWidth="1" />
        <line x1="80" y1="58" x2="65" y2="56" stroke="#000" strokeWidth="1" />
        <line x1="80" y1="62" x2="65" y2="62" stroke="#000" strokeWidth="1" />
      </g>
    ),
    bunny: (
      <g>
        {/* Head */}
        <ellipse cx="50" cy="60" rx="30" ry="35" fill={color} />
        {/* Long ears */}
        <ellipse cx="35" cy="20" rx="8" ry="30" fill={color} />
        <ellipse cx="65" cy="20" rx="8" ry="30" fill={color} />
        {/* Inner ears */}
        <ellipse cx="35" cy="25" rx="4" ry="20" fill="#FFB6C1" />
        <ellipse cx="65" cy="25" rx="4" ry="20" fill="#FFB6C1" />
        {/* Eyes */}
        <circle cx="40" cy="55" r="6" fill="#000" />
        <circle cx="60" cy="55" r="6" fill="#000" />
        <circle cx="42" cy="53" r="2" fill="#fff" />
        <circle cx="62" cy="53" r="2" fill="#fff" />
        {/* Nose */}
        <ellipse cx="50" cy="68" rx="5" ry="4" fill="#FFB6C1" />
        {/* Mouth */}
        <path d="M 50 68 L 45 75 M 50 68 L 55 75" stroke="#000" strokeWidth="2" fill="none" />
        {/* Teeth */}
        <rect x="48" y="75" width="4" height="6" fill="#fff" rx="1" />
      </g>
    ),
    tiger: (
      <g>
        {/* Head */}
        <circle cx="50" cy="55" r="35" fill="#FFA500" />
        {/* Stripes */}
        <path d="M 30 40 Q 25 50 30 60" stroke="#000" strokeWidth="3" fill="none" />
        <path d="M 70 40 Q 75 50 70 60" stroke="#000" strokeWidth="3" fill="none" />
        <path d="M 40 35 L 38 45" stroke="#000" strokeWidth="2" />
        <path d="M 60 35 L 62 45" stroke="#000" strokeWidth="2" />
        {/* Ears */}
        <path d="M 22 30 L 15 18 L 30 25 Z" fill="#FFA500" />
        <path d="M 78 30 L 85 18 L 70 25 Z" fill="#FFA500" />
        {/* Eyes */}
        <ellipse cx="38" cy="50" rx="7" ry="9" fill="#FFD700" />
        <ellipse cx="62" cy="50" rx="7" ry="9" fill="#FFD700" />
        <ellipse cx="38" cy="52" rx="3" ry="6" fill="#000" />
        <ellipse cx="62" cy="52" rx="3" ry="6" fill="#000" />
        {/* Snout */}
        <ellipse cx="50" cy="68" rx="18" ry="12" fill="#fff" />
        {/* Nose */}
        <path d="M 50 65 L 45 70 L 50 72 L 55 70 Z" fill="#000" />
      </g>
    ),
    bull: (
      <g>
        {/* Head */}
        <ellipse cx="50" cy="60" rx="35" ry="32" fill={color} />
        {/* Horns */}
        <path d="M 20 45 Q 15 35 18 25 Q 20 30 22 35" fill="#D2691E" />
        <path d="M 80 45 Q 85 35 82 25 Q 80 30 78 35" fill="#D2691E" />
        {/* Ears */}
        <ellipse cx="22" cy="50" rx="10" ry="8" fill={color} />
        <ellipse cx="78" cy="50" rx="10" ry="8" fill={color} />
        {/* Eyes */}
        <circle cx="38" cy="55" r="6" fill="#fff" />
        <circle cx="62" cy="55" r="6" fill="#fff" />
        <circle cx="40" cy="55" r="4" fill="#000" />
        <circle cx="64" cy="55" r="4" fill="#000" />
        {/* Snout */}
        <ellipse cx="50" cy="75" rx="22" ry="18" fill="#F4A460" />
        {/* Nostrils */}
        <ellipse cx="42" cy="75" rx="4" ry="6" fill="#000" />
        <ellipse cx="58" cy="75" rx="4" ry="6" fill="#000" />
        {/* Ring */}
        <circle cx="50" cy="75" r="8" fill="none" stroke="#C0C0C0" strokeWidth="2" />
      </g>
    ),
    pig: (
      <g>
        {/* Head */}
        <circle cx="50" cy="55" r="35" fill="#FFB6C1" />
        {/* Ears */}
        <path d="M 25 35 L 18 20 L 32 30 Z" fill="#FFB6C1" />
        <path d="M 75 35 L 82 20 L 68 30 Z" fill="#FFB6C1" />
        {/* Eyes */}
        <circle cx="38" cy="50" r="5" fill="#000" />
        <circle cx="62" cy="50" r="5" fill="#000" />
        <circle cx="40" cy="48" r="2" fill="#fff" />
        <circle cx="64" cy="48" r="2" fill="#fff" />
        {/* Snout */}
        <ellipse cx="50" cy="68" rx="20" ry="16" fill="#FF69B4" />
        {/* Nostrils */}
        <ellipse cx="44" cy="68" rx="5" ry="7" fill="#8B008B" />
        <ellipse cx="56" cy="68" rx="5" ry="7" fill="#8B008B" />
      </g>
    ),
    chicken: (
      <g>
        {/* Head */}
        <circle cx="50" cy="50" r="30" fill="#fff" />
        {/* Comb */}
        <path d="M 40 25 Q 45 15 50 20 Q 55 15 60 25" fill="#ff0000" />
        {/* Beak */}
        <path d="M 50 55 L 42 58 L 50 60 Z" fill="#FFA500" />
        {/* Wattle */}
        <ellipse cx="50" cy="70" rx="8" ry="12" fill="#ff0000" />
        {/* Eyes */}
        <circle cx="38" cy="45" r="5" fill="#000" />
        <circle cx="62" cy="45" r="5" fill="#000" />
        <circle cx="40" cy="43" r="2" fill="#fff" />
        <circle cx="64" cy="43" r="2" fill="#fff" />
      </g>
    ),
    cow: (
      <g>
        {/* Head */}
        <ellipse cx="50" cy="58" rx="35" ry="33" fill="#fff" />
        {/* Spots */}
        <ellipse cx="35" cy="50" rx="12" ry="10" fill="#000" />
        <ellipse cx="68" cy="48" rx="10" ry="8" fill="#000" />
        <circle cx="50" cy="70" r="8" fill="#000" />
        {/* Horns */}
        <path d="M 22 40 Q 18 32 20 25" stroke="#D2691E" strokeWidth="4" fill="none" />
        <path d="M 78 40 Q 82 32 80 25" stroke="#D2691E" strokeWidth="4" fill="none" />
        {/* Ears */}
        <ellipse cx="20" cy="48" rx="10" ry="12" fill="#FFB6C1" />
        <ellipse cx="80" cy="48" rx="10" ry="12" fill="#FFB6C1" />
        {/* Eyes */}
        <circle cx="38" cy="52" r="6" fill="#000" />
        <circle cx="62" cy="52" r="6" fill="#000" />
        <circle cx="40" cy="50" r="2" fill="#fff" />
        <circle cx="64" cy="50" r="2" fill="#fff" />
        {/* Snout */}
        <ellipse cx="50" cy="75" rx="22" ry="16" fill="#FFB6C1" />
        {/* Nostrils */}
        <ellipse cx="43" cy="75" rx="4" ry="6" fill="#000" />
        <ellipse cx="57" cy="75" rx="4" ry="6" fill="#000" />
      </g>
    ),
    horse: (
      <g>
        {/* Head */}
        <ellipse cx="50" cy="60" rx="28" ry="35" fill={color} />
        {/* Ears */}
        <path d="M 32 30 L 28 15 L 38 28 Z" fill={color} />
        <path d="M 68 30 L 72 15 L 62 28 Z" fill={color} />
        {/* Mane */}
        <path d="M 35 35 Q 30 30 32 25 Q 35 30 38 35" fill="#8B4513" />
        <path d="M 65 35 Q 70 30 68 25 Q 65 30 62 35" fill="#8B4513" />
        {/* Eyes */}
        <ellipse cx="38" cy="52" rx="7" ry="8" fill="#000" />
        <ellipse cx="62" cy="52" rx="7" ry="8" fill="#000" />
        <circle cx="40" cy="50" r="2" fill="#fff" />
        <circle cx="64" cy="50" r="2" fill="#fff" />
        {/* Snout */}
        <ellipse cx="50" cy="78" rx="18" ry="15" fill="#D2B48C" />
        {/* Nostrils */}
        <ellipse cx="44" cy="78" rx="3" ry="5" fill="#000" />
        <ellipse cx="56" cy="78" rx="3" ry="5" fill="#000" />
      </g>
    ),
    sheep: (
      <g>
        {/* Fluffy head */}
        <circle cx="50" cy="50" r="35" fill="#fff" />
        {/* Fluffy texture circles */}
        <circle cx="30" cy="40" r="12" fill="#f5f5f5" />
        <circle cx="70" cy="40" r="12" fill="#f5f5f5" />
        <circle cx="50" cy="35" r="15" fill="#f5f5f5" />
        <circle cx="35" cy="60" r="10" fill="#f5f5f5" />
        <circle cx="65" cy="60" r="10" fill="#f5f5f5" />
        {/* Face (darker) */}
        <ellipse cx="50" cy="58" rx="18" ry="20" fill="#000" />
        {/* Eyes */}
        <circle cx="44" cy="55" r="4" fill="#fff" />
        <circle cx="56" cy="55" r="4" fill="#fff" />
        <circle cx="45" cy="55" r="2" fill="#000" />
        <circle cx="57" cy="55" r="2" fill="#000" />
        {/* Nose */}
        <ellipse cx="50" cy="65" rx="4" ry="3" fill="#666" />
      </g>
    ),
    goat: (
      <g>
        {/* Head */}
        <ellipse cx="50" cy="58" rx="30" ry="32" fill={color} />
        {/* Horns */}
        <path d="M 30 35 Q 25 25 28 15" stroke="#8B4513" strokeWidth="4" fill="none" />
        <path d="M 70 35 Q 75 25 72 15" stroke="#8B4513" strokeWidth="4" fill="none" />
        {/* Ears */}
        <ellipse cx="25" cy="45" rx="8" ry="14" fill={color} />
        <ellipse cx="75" cy="45" rx="8" ry="14" fill={color} />
        {/* Eyes */}
        <rect x="36" y="50" width="8" height="10" rx="2" fill="#FFD700" />
        <rect x="56" y="50" width="8" height="10" rx="2" fill="#FFD700" />
        <rect x="38" y="54" width="4" height="6" fill="#000" />
        <rect x="58" y="54" width="4" height="6" fill="#000" />
        {/* Snout */}
        <ellipse cx="50" cy="72" rx="16" ry="12" fill="#D2B48C" />
        {/* Beard */}
        <path d="M 45 80 Q 50 88 55 80" stroke="#8B4513" strokeWidth="3" fill="none" />
        {/* Nostrils */}
        <circle cx="45" cy="72" r="3" fill="#000" />
        <circle cx="55" cy="72" r="3" fill="#000" />
      </g>
    ),
    duck: (
      <g>
        {/* Head */}
        <circle cx="50" cy="50" r="32" fill="#FFD700" />
        {/* Bill */}
        <ellipse cx="48" cy="65" rx="18" ry="10" fill="#FFA500" />
        <line x1="30" y1="65" x2="66" y2="65" stroke="#FF8C00" strokeWidth="2" />
        {/* Eyes */}
        <circle cx="38" cy="45" r="6" fill="#fff" />
        <circle cx="62" cy="45" r="6" fill="#fff" />
        <circle cx="40" cy="45" r="4" fill="#000" />
        <circle cx="64" cy="45" r="4" fill="#000" />
        {/* Top of head bump */}
        <ellipse cx="50" cy="28" rx="20" ry="12" fill="#FFD700" />
      </g>
    ),
    fox: (
      <g>
        {/* Head */}
        <path d="M 50 75 L 25 35 L 35 25 L 50 30 L 65 25 L 75 35 Z" fill="#FF6347" />
        {/* White face marking */}
        <ellipse cx="50" cy="55" rx="18" ry="22" fill="#fff" />
        {/* Ears */}
        <path d="M 35 25 L 30 10 L 40 20 Z" fill="#FF6347" />
        <path d="M 65 25 L 70 10 L 60 20 Z" fill="#FF6347" />
        <path d="M 35 25 L 33 15 L 38 22 Z" fill="#000" />
        <path d="M 65 25 L 67 15 L 62 22 Z" fill="#000" />
        {/* Eyes */}
        <ellipse cx="42" cy="52" rx="5" ry="7" fill="#FFD700" />
        <ellipse cx="58" cy="52" rx="5" ry="7" fill="#FFD700" />
        <ellipse cx="42" cy="54" rx="2" ry="4" fill="#000" />
        <ellipse cx="58" cy="54" rx="2" ry="4" fill="#000" />
        {/* Nose */}
        <path d="M 50 60 L 46 64 L 54 64 Z" fill="#000" />
      </g>
    ),
    owl: (
      <g>
        {/* Head/Body */}
        <ellipse cx="50" cy="55" rx="35" ry="38" fill={color} />
        {/* Ear tufts */}
        <path d="M 25 25 L 22 15 L 28 20 Z" fill={color} />
        <path d="M 75 25 L 78 15 L 72 20 Z" fill={color} />
        {/* Eye circles */}
        <circle cx="38" cy="50" r="15" fill="#fff" />
        <circle cx="62" cy="50" r="15" fill="#fff" />
        <circle cx="38" cy="50" r="12" fill="#FFD700" />
        <circle cx="62" cy="50" r="12" fill="#FFD700" />
        {/* Pupils */}
        <circle cx="38" cy="52" r="6" fill="#000" />
        <circle cx="62" cy="52" r="6" fill="#000" />
        <circle cx="40" cy="50" r="2" fill="#fff" />
        <circle cx="64" cy="50" r="2" fill="#fff" />
        {/* Beak */}
        <path d="M 50 58 L 45 68 L 55 68 Z" fill="#FFA500" />
        {/* Wing pattern */}
        <path d="M 25 70 Q 20 75 25 80" stroke="#8B4513" strokeWidth="2" fill="none" />
        <path d="M 75 70 Q 80 75 75 80" stroke="#8B4513" strokeWidth="2" fill="none" />
      </g>
    ),
  };

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Background circle */}
        <circle cx="50" cy="50" r="48" fill="#f8fafc" />

        {/* Animal SVG */}
        {animalSVGs[animal] || animalSVGs.bear}
      </svg>

      {/* Status indicator (pulsing dot) */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <div
            className="w-4 h-4 rounded-full border-2 border-white"
            style={{ backgroundColor: statusColor }}
          />
          {status === 'processing' && (
            <div
              className="absolute inset-0 w-4 h-4 rounded-full animate-ping"
              style={{ backgroundColor: statusColor, opacity: 0.6 }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

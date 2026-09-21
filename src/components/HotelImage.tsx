'use client';

import React from 'react';
import Image from 'next/image';
import { isRemoteImage } from '@/lib/format';

interface HotelImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

/** Image wrapper: local AI photos use Next optimization, remote photos load direct. */
export default function HotelImage({ src, alt, fill, width, height, sizes, className, priority }: HotelImageProps) {
  const remote = isRemoteImage(src);
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        unoptimized={remote}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      sizes={sizes}
      className={className}
      priority={priority}
      unoptimized={remote}
    />
  );
}

'use client';

import React from 'react';
import {
  Wifi,
  Car,
  Clock,
  UtensilsCrossed,
  Presentation,
  BellRing,
  WashingMachine,
  Snowflake,
  Plane,
  Trees,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  parking: Car,
  reception: Clock,
  restaurant: UtensilsCrossed,
  conference: Presentation,
  roomservice: BellRing,
  laundry: WashingMachine,
  ac: Snowflake,
  airport: Plane,
  garden: Trees,
  security: ShieldCheck,
  power: Zap,
};

export default function AmenityIcon({ icon, className }: { icon: string; className?: string }) {
  const Cmp = ICONS[icon] ?? Sparkles;
  return <Cmp className={className ?? 'w-5 h-5'} />;
}

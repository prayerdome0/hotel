export const kwacha = (n: number): string => `K${n.toLocaleString('en-ZM')}`;

export const isRemoteImage = (src: string): boolean => src.startsWith('http');

export const nightsBetween = (checkIn: string, checkOut: string): number => {
  const a = new Date(checkIn).getTime();
  const b = new Date(checkOut).getTime();
  if (isNaN(a) || isNaN(b) || b <= a) return 0;
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
};

export const todayISO = (): string => new Date().toISOString().slice(0, 10);

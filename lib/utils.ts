import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomHour() {
  return Math.floor(Math.random() * 24) + 1
}

export function generateRandomChapter() {
  return Math.floor(Math.random() * (3000 - 100 + 1)) + 100
}

import { generateRandomHour, generateRandomChapter } from '@/lib/utils'

export interface Novel {
  title: string
  author: string
  cover: string
  time: string
  chapter: string
  href: string
}

let randomChapter = generateRandomChapter()
let randomHour = generateRandomHour()

export const oldNovels: Novel[] = [
  {
    title: 'React Rendezvous',
    author: 'Ethan Byte',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'react-rendezvous',
    cover:
      'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
  },
  {
    title: 'Async Awakenings 2',
    author: 'Nina Netcode',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'aysnc-awakenings-2',
    cover:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
  },
  {
    title: 'The Art of Reusability 2',
    author: 'Lena Logic',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'the-art-of-resuability-2',
    cover:
      'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80',
  },
  {
    title: 'Stateful Symphony 2',
    author: 'Beth Binary',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'stateful-symphony-2',
    cover:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
  },
]

export const newNovels: Novel[] = [
  {
    title: 'Thinking Components',
    author: 'Lena Logic',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'thinking-components',
    cover:
      'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
  },
  {
    title: 'Functional Fury',
    author: 'Beth Binary',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'functional-fury',
    cover:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
  },
  {
    title: 'React Rendezvous 2',
    author: 'Ethan Byte',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'react-rendezvous-2',
    cover:
      'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
  },
  {
    title: 'Stateful Symphony',
    author: 'Beth Binary',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'stateful-symphony',
    cover:
      'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
  },
  {
    title: 'Async Awakenings',
    author: 'Nina Netcode',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'async-awakenings',
    cover:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
  },
  {
    title: 'The Art of Reusability',
    author: 'Lena Logic',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'the-art-of-resuability',
    cover:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
  },
]

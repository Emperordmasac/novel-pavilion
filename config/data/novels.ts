import { generateRandomHour, generateRandomChapter } from '@/lib/utils'

export interface Novel {
  title: string
  author: string
  cover: string
  time: string
  chapter: string
  href: string
  chapters: Chapter[]
}

export interface Chapter {
  href: string
  title: string
  date: string
  description: string
  content: string
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
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with React Rendezvous',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
  },
  {
    title: 'Async Awakenings 2',
    author: 'Nina Netcode',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'aysnc-awakenings-2',
    cover:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with Async Awakenings 2',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
  },
  {
    title: 'The Art of Reusability 2',
    author: 'Lena Logic',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'the-art-of-resuability-2',
    cover:
      'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80',
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with The Art of Reusability 2',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
  },
  {
    title: 'Stateful Symphony 2',
    author: 'Beth Binary',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'stateful-symphony-2',
    cover:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with Stateful Symphony 2',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
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
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with Thinking Components',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
  },
  {
    title: 'Functional Fury',
    author: 'Beth Binary',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'functional-fury',
    cover:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with Functional Fury',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
  },
  {
    title: 'React Rendezvous 2',
    author: 'Ethan Byte',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'react-rendezvous-2',
    cover:
      'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with React Rendezvous 2',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
  },
  {
    title: 'Stateful Symphony',
    author: 'Beth Binary',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'stateful-symphony',
    cover:
      'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with Stateful Symphony',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
  },
  {
    title: 'Async Awakenings',
    author: 'Nina Netcode',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'async-awakenings',
    cover:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with Async Awakenings',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
  },
  {
    title: 'The Art of Reusability',
    author: 'Lena Logic',
    time: `${randomHour} hours ago`,
    chapter: `chapter ${randomChapter}`,
    href: 'the-art-of-resuability',
    cover:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    chapters: [
      {
        href: '1',
        title: 'Chapter 1: Getting Started with The Art of Reusability',
        date: '2023-09-01',
        description: 'Introduction to React',
        content: 'This is the content of Chapter 1...',
      },
      {
        href: '2',
        title: 'Chapter 2: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
      {
        href: '3',
        title: 'Chapter 3: Components and Props',
        date: '2023-09-02',
        description: 'Exploring React components',
        content: 'This is the content of Chapter 2...',
      },
    ],
  },
]

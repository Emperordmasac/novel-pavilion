// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity'

// // Get all posts
// export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
//     _id, title, slug
//   }`

// // Get a single post by its slug
// export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
//     title, mainImage, body
//   }`

// // Get all post slugs
// export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
//     "params": { "slug": slug.current }
//   }`

// Get all novels
export const novelsQuery = groq`*[_type == "novel" && defined(slug.current)]{
  _id, title, slug, author, mainImage, publishedAt, chapters
}`

// Get a single novel by its slug
export const novelQuery = groq`*[_type == "novel" && slug.current == $slug][0]{ 
  title, mainImage, author, publishedAt, chapters, slug
}`

// Get all novel slugs
export const novelPathsQuery = groq`*[_type == "novel" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`

/////////////

// Get all chapters belonging to a particular novel
export const chapterssQuery = groq`*[_type == 'novel' && slug.current == $slug][0].chapters[]{
  _id, title, slug, description
}`

// Get a single chapter by its slug
export const singleChapterQuery = groq`*[_type == 'novel-gpt' && slug.current == $slug][0].chapters[slug.current == $parentSlug][0]
`

// Get all chapters slugs
export const chapterssPathsQuery = groq`*[_type == 'novel' && defined(slug.current)][].chapters[].slug.current
`

////////////

// Get all chapters
export const chaptersQuery = groq`*[_type == "chapter" && defined(slug.current)]{
  _id, title, slug, description, body
}`

// Get a single chapter by its slug
export const chapterQuery = groq`*[_type == "chapter" && slug.current == $slug][0]{ 
  title, description, body
}`

// Get all chapters slugs
export const chapterPathsQuery = groq`*[_type == "chapter" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`

// // Get all novels chapters
// export const novelsChapterQuery = groq`*[_type == "novel" && defined(slug.current)]{
//   _id, title, slug, author, mainImage, publishedAt, chapters
// }`

// // Get a single novel chapters by its slug
// export const novelChapterQuery = groq`*[_type == 'novel' && slug.current == $slug][0]{
//   chapterTitle, slug, publishedAt, body
// }`

// // Get all novel slugs
// export const novelChapterPathsQuery = groq`*[_type == "novel" && defined(slug.current)][]{
//   "params": { "slug": slug.current }
// }`

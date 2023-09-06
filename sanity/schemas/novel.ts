// schemas/novel.js

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'novel',
  title: 'Novel',
  type: 'document',
  fields: [
    // ... other fields
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    {
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'date',
              title: 'Date',
              type: 'date',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            // Add a computed slug field for chapters
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: (document, { parent }) => {
                  // Generate the slug based on the novel title and chapter title
                  const novelTitle = parent?.title || 'unknown-novel-title'
                  const chapterTitle = document.title || 'unknown-chapter-title'
                  console.log('novel tite -->', novelTitle)
                  return `${novelTitle}`
                },
                maxLength: 200,
              },
            },
          ],
          // ... other field configurations for chapters
        },
      ],
    },
  ],
  // ... other configurations for the novel schema
})

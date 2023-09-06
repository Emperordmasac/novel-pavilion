import { defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (document) => {
          // Generate the hierarchical slug
          const categorySlug = document.category?.current?.slug?.current || ''
          const productTitle = document.title || 'product'
          return `${categorySlug}/${productTitle}`
        },
        maxLength: 200,
      },
    },
  ],
})

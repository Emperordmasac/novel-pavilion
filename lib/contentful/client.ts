import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN || '',
})

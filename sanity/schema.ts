import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import novel from "./schemas/novel"
import chapter from './schemas/chapter'
import product  from './schemas/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, novel, chapter, blockContent, product],
}

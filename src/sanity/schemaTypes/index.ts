import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './Category'
import order from './order'
import cartitem from './cartitem'
import users from './users'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Category,order,cartitem,users],
}

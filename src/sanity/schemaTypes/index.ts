import { type SchemaTypeDefinition } from 'sanity'
import items from "../items"
import review from "../review"
import order from "../order"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [items, review, order],
}

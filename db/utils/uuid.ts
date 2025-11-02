import { randomUUID } from 'node:crypto'
import { text } from 'drizzle-orm/sqlite-core'

export function uuid() {
  return text({ length: 36 }).$defaultFn(randomUUID)
}

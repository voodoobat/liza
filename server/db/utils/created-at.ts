import { sql } from 'drizzle-orm'
import { text } from 'drizzle-orm/sqlite-core'

export function createdAt() {
  return text().default(sql`(CURRENT_TIMESTAMP)`)
}

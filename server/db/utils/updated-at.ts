import { sql } from 'drizzle-orm'
import { text } from 'drizzle-orm/sqlite-core'

export function updatedAt() {
  return text()
    .default(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
}

import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { sqliteTable } from 'drizzle-orm/sqlite-core'
import { createdAt, updatedAt, uuid } from '../utils'

export const post = sqliteTable('post', (t) => ({
  id: uuid().primaryKey(),
  title: t.text().notNull(),
  slug: t.text().notNull().unique(),
  content: t.text(),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
}))

export type Post = InferSelectModel<typeof post>
export type PostInput = InferInsertModel<typeof post>
export type PostSelect = InferSelectModel<typeof post>

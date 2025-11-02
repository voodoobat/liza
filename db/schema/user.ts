import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { relations } from 'drizzle-orm'
import { sqliteTable } from 'drizzle-orm/sqlite-core'
import { createdAt, updatedAt, uuid } from '../utils'

export const user = sqliteTable('user', (t) => ({
  id: uuid().primaryKey(),
  email: t.text().notNull().unique(),
  password: t.text().notNull(),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
}))

export const userRelations = relations(user, ({ one }) => ({
  auths: one(user, {
    fields: [user.id],
    references: [user.id],
  }),
}))

export type User = InferSelectModel<typeof user>
export type UserInput = InferInsertModel<typeof user>
export type UserSelect = InferSelectModel<typeof user>

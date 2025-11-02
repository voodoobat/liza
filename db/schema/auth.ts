import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { relations } from 'drizzle-orm'
import { sqliteTable } from 'drizzle-orm/sqlite-core'
import { createdAt, updatedAt } from '../utils'
import { user } from './user'

export const auth = sqliteTable('auth', (t) => ({
  token: t.text().notNull().primaryKey(),
  userId: t.text({ length: 36 }).notNull(),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
}))

export const authRelations = relations(auth, ({ one }) => ({
  user: one(user, { fields: [auth.userId], references: [user.id] }),
}))

export type Auth = InferSelectModel<typeof auth>
export type AuthInput = InferInsertModel<typeof auth>
export type AuthSelect = InferSelectModel<typeof auth>

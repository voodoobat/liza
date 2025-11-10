import { hash } from 'bcrypt'
import { eq, sql } from 'drizzle-orm'
import db from '~~/server/db'
import { user, type UserInput, type UserSelect } from '~~/server/db/schema'

export const $user = {
  async create(body: UserInput) {
    const password = await hash(body.password, 10)

    return await db
      .insert(user)
      .values({
        ...body,
        password,
      })
      .returning({
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
      .get()
  },

  async find() {
    return await db
      .select({
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
      .from(user)
      .all()
  },

  findOne(
    key: keyof UserSelect,
    value: string,
    include = {
      password: false,
    },
  ) {
    return db
      .select({
        id: user.id,
        email: user.email,
        ...(include.password && { password: user.password }),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
      .from(user)
      .where(eq(user[key], value))
      .get()
  },

  async update(id: string, body: Partial<UserInput>) {
    return await db
      .update(user)
      .set(body)
      .where(sql`${user.id} = ${id}`)
      .returning({
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
      .get()
  },
}

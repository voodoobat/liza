import { compare } from 'bcrypt'
import { eq } from 'drizzle-orm'
import type { AuthLoginSchema } from '~~/zod'
import db from '~~/server/db'
import { auth } from '~~/server/db/schema'
import jwt from '~~/server/utils/jwt'
import { $user } from './user'

export const $auth = {
  async login(body: AuthLoginSchema, userAgent: string) {
    const user = await $user.findOne('email', body.email, {
      password: true,
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found',
      })
    }

    if (!(await compare(body?.password, user!.password!))) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      })
    }

    const tokens = jwt.gen(user!.id, userAgent)
    this.save(tokens.refreshToken, user!.id)

    return tokens
  },

  async save(refreshToken: string, userId: string) {
    await db.insert(auth).values({
      token: refreshToken,
      userId,
    })
  },

  async delete(refreshToken: string) {
    await db.delete(auth).where(eq(auth.token, refreshToken))
  },
}

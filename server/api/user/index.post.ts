import { userCreateSchema } from '@@/zod/user'
import { $user } from '@@/server/services'
import jwt from '@@/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const userAgent = getHeader(event, 'user-agent') ?? 'unknown'
  const body = await readValidatedBody(event, userCreateSchema.parse)

  if (!(await $user.find()).length) {
    throw createError({
      statusCode: 405,
      statusMessage: 'User already exists',
    })
  }

  const user = await $user.create(body)

  return jwt.gen(user.id, userAgent)
})

import { userCreateSchema } from '~~/zod/user'
import { $auth, $user } from '~~/server/services'
import jwt from '~~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const userAgent = getHeader(event, 'user-agent') ?? 'unknown'
  const body = await readValidatedBody(event, userCreateSchema.parse)

  if ((await $user.find()).length) {
    throw createError({
      statusCode: 405,
      statusMessage: 'User already exists',
    })
  }

  const user = await $user.create(body)
  const { accessToken, refreshToken } = await $auth.login(body, userAgent)

  setCookie(event, 'access-token', accessToken, { httpOnly: true })
  setCookie(event, 'refresh-token', refreshToken, { httpOnly: true })

  return jwt.gen(user.id, userAgent)
})

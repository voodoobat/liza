import { authLoginSchema } from '@@/zod'
import { $auth } from '@@/server/services'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, authLoginSchema.parse)
  const userAgent = getHeader(event, 'user-agent') ?? 'unknown'
  const { accessToken, refreshToken } = await $auth.login(body, userAgent)

  setCookie(event, 'access-token', accessToken, { httpOnly: true })
  setCookie(event, 'refresh-token', refreshToken, { httpOnly: true })
})

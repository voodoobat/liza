import { authLoginSchema } from '@@/zod'
import { $auth } from '@@/server/services'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, authLoginSchema.parse)
  const userAgent = getHeader(event, 'user-agent') ?? 'unknown'

  return $auth.login(body, userAgent)
})

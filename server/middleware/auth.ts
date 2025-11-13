import type { Jwt } from '~~/server/types'

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event)
  const accessToken = jwt.decode(cookies['access-token']) as Jwt | null

  if (!accessToken) {
    event.context.userId = null
    return
  }

  if (jwt.verify(cookies['access-token'])) {
    event.context.userId = accessToken?.id
    return
  }

  const refreshToken = jwt.decode(cookies['refresh-token']) as Jwt | null

  if (!refreshToken || !jwt.verify(cookies['refresh-token'])) {
    event.context.userId = null
    return
  } else {
    const accessToken = jwt.sign({
      id: refreshToken.id,
      userAgent: refreshToken.userAgent,
    })

    setCookie(event, 'access-token', accessToken, { httpOnly: true })
    event.context.userId = accessToken
  }
})

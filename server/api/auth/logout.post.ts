import { $auth } from '@@/server/services'

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, 'refresh-token')

  if (refreshToken) {
    await $auth.delete(refreshToken)
  }

  setCookie(event, 'access-token', '', { httpOnly: true })
  setCookie(event, 'refresh-token', '', { httpOnly: true })
})

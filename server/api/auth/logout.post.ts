export default defineEventHandler(async (event) => {
  setCookie(event, 'access-token', '', { httpOnly: true })
  setCookie(event, 'refresh-token', '', { httpOnly: true })
})

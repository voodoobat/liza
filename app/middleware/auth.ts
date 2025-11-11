export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.client) return

  const accessToken = useCookie('access-token')

  if (!accessToken.value) {
    return navigateTo('/backend/login')
  }
})

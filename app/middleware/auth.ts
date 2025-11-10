export default defineNuxtRouteMiddleware(() => {
  const accessToken = useCookie('access-token')

  if (import.meta.client) return
  if (!accessToken.value) {
    return navigateTo('/backend/login')
  }
})

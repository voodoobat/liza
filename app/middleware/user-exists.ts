export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.client) return

  const { data: userExists } = await useFetch('/api/user/exists')

  if (!userExists.value) {
    return navigateTo('/backend/register')
  }
})

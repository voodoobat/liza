import { $user } from '~~/server/services'

export default defineEventHandler(async () => {
  return Boolean((await $user.find()).length)
})

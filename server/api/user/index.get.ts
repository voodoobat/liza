import { $user } from '@@/server/services'

export default defineEventHandler(async () => {
  return await $user.find()
})

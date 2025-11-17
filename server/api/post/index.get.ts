import { $post } from '~~/server/services'

export default defineEventHandler(async () => {
  return await $post.find()
})

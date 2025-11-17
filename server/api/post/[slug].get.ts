import { $post } from '~~/server/services'
import { postParamsSchema } from '~~/zod'

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, postParamsSchema.parse)

  return await $post.findOne('slug', params.slug)
})

import { postParamsSchema } from '~~/zod'
import { $post } from '~~/server/services'

export default defineEventHandler(async (event) => {
  if (!event.context.userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const params = await getValidatedRouterParams(event, postParamsSchema.parse)
  return await $post.delete(params.slug)
})

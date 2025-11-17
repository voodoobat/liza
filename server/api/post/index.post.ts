import type { Evt } from '~~/server/types'
import { postCreateSchema } from '~~/zod'
import { $post } from '~~/server/services'

export default defineEventHandler(async (event: Evt) => {
  if (!event.context.userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const body = await readValidatedBody(event, postCreateSchema.parse)
  return await $post.create(body)
})

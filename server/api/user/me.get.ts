import type { Evt } from '~~/server/types'
import { $user } from '~~/server/services'

export default defineEventHandler(async (event: Evt) => {
  if (!event.context.userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  return await $user.findOne('id', event.context.userId)
})

import { userParamsSchema } from '@@/zod/user'
import { $user } from '@@/server/services'

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, userParamsSchema.parse)

  if (params?.id) {
    return await $user.findOne('id', params.id)
  }

  throw createError({
    statusCode: 400,
    statusMessage: 'Bad Request',
  })
})

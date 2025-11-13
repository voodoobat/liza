import { userParamsSchema, userUpdateSchema } from '~~/zod/user'
import { $user } from '~~/server/services'

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, userParamsSchema.parse)
  const body = await getValidatedQuery(event, userUpdateSchema.parse)

  return await $user.update(params.id, body)
})

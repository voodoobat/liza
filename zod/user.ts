import z from 'zod'

export const userCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type UserCreateSchema = z.infer<typeof userCreateSchema>

export const userUpdateSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
})

export type UserUpdateSchema = z.infer<typeof userUpdateSchema>

export const userParamsSchema = z.object({
  id: z.string().uuid(),
})

export type UserParamsSchema = z.infer<typeof userParamsSchema>

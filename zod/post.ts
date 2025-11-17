import z from 'zod'
import { slug } from './utils'

export const postCreateSchema = z.object({
  title: z.string(),
  slug: slug(),
  content: z.string().optional(),
})

export type PostCreateSchema = z.infer<typeof postCreateSchema>

export const postUpdateSchema = z.object({
  title: z.string().optional(),
  slug: slug().optional(),
  content: z.string().optional(),
})

export type PostUpdateSchema = z.infer<typeof postUpdateSchema>

export const postParamsSchema = z.object({
  slug: slug(),
})

export type PostParamsSchema = z.infer<typeof postParamsSchema>

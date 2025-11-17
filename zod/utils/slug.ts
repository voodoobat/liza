import z from 'zod'

export function slug() {
  return z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Invalid slug',
  })
}

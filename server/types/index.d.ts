import type { JwtPayload } from 'jsonwebtoken'

export type Evt = H3Event & {
  context: H3EventContext & {
    userId?: string
  }
}

export type Jwt = JwtPayload & {
  id: string
  userAgent: string
}

import jwt, { type SignOptions } from 'jsonwebtoken'

export default {
  decode(token: string) {
    return jwt.decode(token)
  },

  gen(userId: string, userAgent: string) {
    const accessToken = this.sign({ id: userId, userAgent }, '15m')
    const refreshToken = this.sign({ id: userId, userAgent }, '7d')

    return {
      accessToken,
      refreshToken,
    }
  },

  verify(token?: string) {
    const config = useRuntimeConfig()

    if (!token) {
      return null
    }

    try {
      return jwt.verify(token, config.JWT_SECRET as string) as {
        id: string
        userAgent: string
      }
    } catch {
      return null
    }
  },

  sign(data: { id: string; userAgent: string }, expiresIn: SignOptions['expiresIn'] = '15m') {
    const config = useRuntimeConfig()

    return jwt.sign(data, config.JWT_SECRET as string, { expiresIn })
  },
}

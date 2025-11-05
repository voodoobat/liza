import jwt, { type SignOptions } from 'jsonwebtoken'

export default {
  gen(userId: string, userAgent: string) {
    const accessToken = this.sign({ id: userId, userAgent }, '15m')
    const refreshToken = this.sign({ id: userId, userAgent }, '7d')

    return {
      accessToken,
      refreshToken,
    }
  },

  verify(token: string) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET as string) as {
        id: string
        userAgent: string
      }
    } catch {
      throw new Error('Invalid token')
    }
  },

  sign(data: { id: string; userAgent: string }, expiresIn: SignOptions['expiresIn'] = '15m') {
    return jwt.sign(data, process.env.JWT_SECRET as string, { expiresIn })
  },
}

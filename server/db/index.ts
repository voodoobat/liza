import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'

export default drizzle({
  connection: {
    url:
      process.env.NODE_ENV === 'production'
        ? 'file:../../data/db.prod.sqlite'
        : 'file:data/db.dev.sqlite',
  },
})

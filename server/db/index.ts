import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'

const db = drizzle({
  connection: {
    url:
      process.env.NODE_ENV === 'development'
        ? 'file:data/db.dev.sqlite'
        : 'file:../../data/db.prod.sqlite',
  },
})

export default db

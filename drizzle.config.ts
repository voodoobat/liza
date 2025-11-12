import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  out: './server/db/migrations',
  schema: './server/db/schema',
  dbCredentials: {
    url:
      process.env.NODE_ENV === 'development'
        ? 'file:data/db.dev.sqlite'
        : 'file:data/db.prod.sqlite',
  },
})

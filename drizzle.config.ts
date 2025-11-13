import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  out: './server/db/migrations',
  schema: './server/db/schema',
  dbCredentials: {
    url:
      process.env.NODE_ENV === 'production'
        ? 'file:data/db.prod.sqlite'
        : 'file:data/db.dev.sqlite',
  },
})

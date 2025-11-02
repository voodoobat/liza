import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  out: './db/migrations',
  schema: './db/schema',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
})

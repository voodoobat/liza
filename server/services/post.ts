import { eq, sql } from 'drizzle-orm'
import db from '~~/server/db'
import { post, type PostInput, type PostSelect } from '~~/server/db/schema'

export const $post = {
  async create(body: PostInput) {
    return await db
      .insert(post)
      .values({
        ...body,
      })
      .returning({
        id: post.id,
        title: post.title,
        content: post.content,
        slug: post.slug,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      })
      .get()
  },

  async find() {
    return await db
      .select({
        id: post.id,
        title: post.title,
        content: post.content,
        slug: post.slug,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      })
      .from(post)
      .all()
  },

  findOne(key: keyof PostSelect, value: string) {
    return db
      .select({
        id: post.id,
        title: post.title,
        content: post.content,
        slug: post.slug,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      })
      .from(post)
      .where(eq(post[key], value))
      .get()
  },

  async update(slug: string, body: Partial<PostInput>) {
    return await db
      .update(post)
      .set(body)
      .where(sql`${post.slug} = ${slug}`)
      .returning({
        id: post.id,
        title: post.title,
        content: post.content,
        slug: post.slug,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      })
      .get()
  },

  async delete(slug: string) {
    return await db.delete(post).where(eq(post.slug, slug))
  },
}

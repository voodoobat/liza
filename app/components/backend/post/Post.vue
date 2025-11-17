<template>
  <Form
    class="grid gap-3"
    :initial-values="post"
    :validation-schema="validationSchema"
    @submit="submit"
  >
    <Input name="title" type="text" label="Post title" @input="error = false" />
    <Input name="slug" type="text" label="Post slug" @input="error = false" />
    <Textarea name="content" type="text" label="Post content" />
    <Button class="w-fit mx-auto" type="submit">{{ buttonText }}</Button>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import type { Post } from '~~/server/db/schema'
import { postCreateSchema } from '~~/zod'

const { post } = defineProps<{ post?: Post }>()
const validationSchema = toTypedSchema(postCreateSchema)
const { createPost, error, updatePost } = usePost()

const buttonText = computed(() => (post ? 'Update post' : 'Create post'))

function submit(values: Record<string, unknown>) {
  if (post) {
    updatePost(post.slug, values)
  } else {
    createPost(values)
    // todo: move navigation into pages
    navigateTo(`/backend/post/${values.slug}`)
  }
}
</script>

<template>
  <div class="grid gap-2">
    <div
      v-for="post in posts"
      :key="post.id"
      class="flex items-center gap-4 justify-between border-b border-foreground/20 p-4"
    >
      <NuxtLink :to="`/backend/post/${post.slug}`">
        {{ post.title }}
      </NuxtLink>
      <button
        type="button"
        class="cursor-pointer hover:text-danger transition-colors"
        @click="deletePost(post)"
      >
        <Icon name="icon:trash" class="w-[1em] h-[1em]" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~~/server/db/schema'

const emit = defineEmits<{ (e: 'delete'): void }>()
defineProps<{ posts: Post[] }>()

async function deletePost(post: Post) {
  await useFetch(`/api/post/${post.slug}`, {
    method: 'DELETE',
  })

  emit('delete')
}
</script>

<template>
  <Screen class="flex justify-center items-center">
    <div class="grid gap-4">
      <h1 class="text-center">Posts:</h1>
      <BackendPostCollection v-if="posts" :posts="posts" @delete="refresh" />
    </div>
  </Screen>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'backend',
  middleware: 'auth',
})

const { data: posts, error, refresh } = await useFetch('/api/post')

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Posts not found',
  })
}
</script>

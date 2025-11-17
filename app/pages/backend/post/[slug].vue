<template>
  <Screen class="flex justify-center items-center">
    <BackendPost :post="post" />
  </Screen>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const slug = useRoute().params.slug as string
const { data: post, error } = await useFetch(`/api/post/${slug}`, {
  method: 'GET',
  immediate: true,
})

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}
</script>

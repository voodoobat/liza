<template>
  <Screen class="flex justify-center items-center">
    <BackendPost />
  </Screen>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'backend',
  middleware: 'auth',
})
</script>

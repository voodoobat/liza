<template>
  <Screen class="flex justify-center items-center">
    <BackendUser />
  </Screen>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

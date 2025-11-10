<template>
  <Screen class="flex justify-center items-center">
    <BackendUserAccount />
  </Screen>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

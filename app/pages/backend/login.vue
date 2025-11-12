<template>
  <Screen class="flex justify-center items-center">
    <BackendUserLogin />
  </Screen>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'user-exists',
})
</script>

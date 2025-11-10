<template>
  <div class="grid gap-3">
    <p>User account</p>
    <Button @click="signOut">Sign out</Button>
  </div>
</template>

<script lang="ts" setup>
async function signOut() {
  await useFetch('/api/auth/logout', {
    method: 'POST',
  })

  navigateTo('/')
}
</script>

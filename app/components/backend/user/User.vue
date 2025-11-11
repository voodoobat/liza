<template>
  <div class="grid gap-3">
    <p>{{ data?.email }}</p>
    <Button @click="signOut">Sign out</Button>
  </div>
</template>

<script lang="ts" setup>
const { data, error } = await useFetch('/api/user/me')

if (error.value) {
  console.error(error.value)
}

async function signOut() {
  await useFetch('/api/auth/logout', {
    method: 'POST',
  })

  navigateTo('/')
}
</script>

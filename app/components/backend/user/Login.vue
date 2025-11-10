<template>
  <Form class="grid gap-3" :validation-schema="validationSchema" @submit="signIn">
    <Input name="email" type="email" placeholder="email" icon="icon:user" @input="error = false" />
    <Input
      name="password"
      type="password"
      placeholder="password"
      icon="icon:key"
      @input="error = false"
    />
    <p v-if="error" class="text-danger text-xs">Invalid email or password</p>
    <Button class="w-fit mx-auto" type="submit">Sign in</Button>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { authLoginSchema } from '@@/zod'

const error = ref(false)
const validationSchema = toTypedSchema(authLoginSchema)

const accessToken = useCookie('access-token')

if (accessToken.value) {
  navigateTo('/backend')
}

async function signIn(values: Record<string, unknown>) {
  const { error: requestError } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: values,
  })

  if (requestError.value) {
    error.value = true
  } else {
    navigateTo('/backend')
  }
}
</script>

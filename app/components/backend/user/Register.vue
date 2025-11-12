<template>
  <Form class="grid gap-3" :validation-schema="validationSchema" @submit="createUser">
    <Input name="email" type="email" placeholder="email" icon="icon:user" @input="error = false" />
    <Input
      name="password"
      type="password"
      placeholder="password"
      icon="icon:key"
      @input="error = false"
    />
    <Input
      name="password-repeat"
      type="password"
      placeholder="repeat password"
      icon="icon:key"
      @input="error = false"
    />
    <p v-if="error" class="text-danger text-xs">Create user failed!</p>
    <Button class="w-fit mx-auto" type="submit">Create user</Button>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { userCreateSchema } from '@@/zod'

const error = ref(false)
const validationSchema = toTypedSchema(
  userCreateSchema
    .extend({
      'password-repeat': userCreateSchema.shape.password,
    })
    .refine((data) => data.password === data['password-repeat'], {
      message: 'Passwords do not match',
      path: ['password-repeat'],
    }),
)

async function createUser(values: Record<string, unknown>) {
  const { error: requestError } = await useFetch('/api/user', {
    method: 'POST',
    body: {
      email: values.email,
      password: values.password,
    },
  })

  if (requestError.value) {
    error.value = true
    return
  }

  navigateTo('/backend')
}
</script>

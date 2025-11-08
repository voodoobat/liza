<template>
  <Form class="grid gap-3" :validation-schema="validationSchema" @submit="submit">
    <Input name="email" type="email" placeholder="email" icon="icon:user" />
    <Input name="password" type="password" placeholder="password" icon="icon:key" />
    <Button class="w-fit mx-auto" type="submit">Sign in</Button>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { authLoginSchema } from '@@/zod'

const validationSchema = toTypedSchema(authLoginSchema)

function submit() {
  console.log('Form submitted with values')
}
</script>

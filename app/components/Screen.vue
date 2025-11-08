<template>
  <Primitive class="w-screen h-screen" :as="as" :as-child="asChild">
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'

const { as, asChild } = defineProps<PrimitiveProps>()
</script>

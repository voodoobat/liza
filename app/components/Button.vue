<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        'flex gap-2 py-sm px-lg text-xs rounded-sm focus:outline-0',
        themes[theme],
        disabled && 'opacity-50 cursor-not-allowed',
        $props.class,
      )
    "
    :disabled
  >
    <slot />
    <Icon v-if="icon" :name="icon" class="w-[1em] h-[1em]" />
  </Primitive>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'

const themes = {
  default: 'bg-foreground text-background hover:bg-foreground/50',
  outline: 'text-foreground border border-foreground hover:bg-foreground/50',
}

const {
  as = 'button',
  asChild,
  theme = 'default',
} = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    disabled?: boolean
    icon?: string
    type?: 'button' | 'submit' | 'reset'
    theme?: keyof typeof themes
  }
>()
</script>

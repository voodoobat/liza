<template>
  <Primitive :as :class="cn('relative', $props.class)">
    <div
      :class="
        cn(
          'flex items-center border border-foreground/20 rounded-sm gap-2 px-2 text-sm text-foreground/50 transition-colors',
          disabled && 'opacity-50 cursor-not-allowed',
          !focus && errors.length && 'border-danger text-danger',
          focus && 'border-foreground/20 text-foreground',
          icon && 'grid-cols-2',
        )
      "
    >
      <Icon v-if="icon" :name="icon" class="w-[1em] h-[1em]" />
      <input
        v-model="model"
        class="py-sm focus:outline-0"
        :type
        :placeholder
        :disabled
        @focus="onFocus"
        @blur="onBlur"
        @input="$emit('input', model)"
      />
    </div>
    <span v-if="!focus && touched && errors.length" class="text-xs text-danger">
      {{ errors[0] }}
    </span>
  </Primitive>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { useField } from 'vee-validate'

const emit = defineEmits<{
  (e: 'blur' | 'focus' | 'input', value: string): void
}>()

const { name, type = 'text' } = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    disabled?: boolean
    icon?: string
    name: string
    placeholder?: string
    type?: HTMLInputElement['type']
  }
>()

const { value: model, errors } = useField<string>(() => name)

const focus = ref(false)
const touched = ref(false)

function onFocus() {
  emit('focus', model.value)

  focus.value = true
}

function onBlur() {
  emit('blur', model.value)

  focus.value = false
  touched.value = true
}
</script>

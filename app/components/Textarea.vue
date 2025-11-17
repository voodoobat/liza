<template>
  <Primitive :as>
    <Label v-if="label" :for="name" class="text-sm text-foreground/50">{{ label }}</Label>
    <div
      :class="
        cn(
          'flex items-center border border-foreground/20 rounded-sm gap-2 px-2 text-sm text-foreground/50 transition-colors',
          disabled && 'opacity-50 cursor-not-allowed',
          !focus && errors.length && 'border-danger text-danger',
          focus && 'border-foreground/20 text-foreground',
        )
      "
    >
      <textarea
        :id="name"
        v-model="model"
        class="py-sm focus:outline-0 resize-none"
        :disabled
        :placeholder
        :rows
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
import { Label, Primitive, type PrimitiveProps } from 'reka-ui'
import { useField } from 'vee-validate'

const emit = defineEmits<{
  (e: 'blur' | 'focus' | 'input', value: string): void
}>()

const { name, rows = 3 } = defineProps<
  PrimitiveProps & {
    disabled?: boolean
    label?: string
    name: string
    placeholder?: string
    rows?: number
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

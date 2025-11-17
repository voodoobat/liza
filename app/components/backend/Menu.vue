<template>
  <Primitive :as>
    <DropdownMenuRoot v-model:open="open">
      <DropdownMenuTrigger>
        <Icon name="icon:menu" class="w-[1em] h-[1em]" />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          class="min-w-60 bg-white rounded-sm shadow-sm translate-y-1"
          align="end"
        >
          <DropdownMenuGroup class="py-2">
            <DropdownMenuLabel class="px-5 py-3 text-sm font-bold">Posts:</DropdownMenuLabel>
            <DropdownMenuItem class="px-5 py-2 text-xs">
              <NuxtLink class="flex items-center gap-3" to="/backend/post/create">
                <span>Create post</span>
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem class="px-5 py-2 text-xs">
              <NuxtLink class="flex items-center gap-3" to="/backend/post/">
                <span>Posts list</span>
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuLabel class="px-5 py-3 text-sm font-bold">User:</DropdownMenuLabel>
            <DropdownMenuItem class="px-5 py-2 text-xs">
              <NuxtLink class="flex items-center gap-3" to="/backend/">
                <span>User data</span>
              </NuxtLink>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  </Primitive>
</template>

<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  Primitive,
  type PrimitiveProps,
} from 'reka-ui'

const { as = 'nav' } = defineProps<PrimitiveProps>()
const open = ref(false)
</script>

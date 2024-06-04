<script setup lang="ts">
const props = defineProps<{
    title?: string
}>()
</script>

<template>
    <div class="flex flex-col gap-2">
        <span
            v-if="props.title"
            class="pop-up block text-sm pl-2 pointer-events-none"
        >
            {{ props.title }}
        </span>

        <div
            v-else-if="$slots.title"
            class="pop-up text-sm"
        >
            <slot name="title" />
        </div>

        <div
            :class="[
                'pop-up',
                'flex flex-col gap-2 p-2',
                'bg-darker shadow-xl',
                'rounded-md',
                'overflow-visible',
            ]"
        >
            <slot />
        </div>
    </div>
</template>

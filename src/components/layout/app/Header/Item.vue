<script setup lang="ts">
const props = defineProps<{
    mark?: boolean
    onClick: () => void
}>()
</script>

<template>
    <InputButton
        class="block px-1"
        @click="props.onClick"
    >
        <span
            :class="[
                'flex justify-center items-center',
                'bg-primary w-8 h-4 p-0.5 rounded-primary',
                'hover:!text-white',
                'group-hover:text-dark text-transparent',
                'transition-colors',
            ]"
        >
            <slot />
        </span>
    </InputButton>
</template>

<script setup lang="ts">
const { $emitter } = useNuxtApp()
const attrs = useAttrs()
const isLoading = ref<boolean>(false)

$emitter.on('app:loading', (payload) => {
    if (!attrs?.id || payload.id !== attrs.id) return

    isLoading.value = true
    payload.promise.finally(() => {
        isLoading.value = false
    })
})
</script>

<template>
    <button
        v-bind="attrs"
        class="d-btn"
    >
        <template v-if="isLoading">
            <span class="pop-up d-loading d-loading-dots d-loading-sm" />
        </template>

        <template v-else>
            <slot />
        </template>
    </button>
</template>

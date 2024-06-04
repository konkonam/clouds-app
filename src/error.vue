<script setup lang="ts">
const error = useError()

const handle = () => {
    clearError({
        redirect: '/',
    })
}
</script>

<template>
    <div
        class="min-h-screen relative flex flex-col rounded-lg bg-dark"
    >
        <div class="flex flex-col grow items-center mt-12">
            <span class="pop-up block text-3xl">
                {{ error?.statusCode }}
            </span>

            <span class="pop-up block text-center">
                {{ error?.statusMessage }}
            </span>

            <button
                class="d-btn d-btn-primary d-btn-xs w-min mt-4"
                @click="handle"
            >
                {{ useTranslate('general.back').value }}
            </button>
        </div>
    </div>
</template>

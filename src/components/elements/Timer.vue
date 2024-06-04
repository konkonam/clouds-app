<script setup lang="ts">
import { syncRef, useCssVar } from '@vueuse/core'

const props = defineProps<{
    id: string
    startedAt: Date
}>()

const { $emitter } = useNuxtApp()
const { getCurrent } = useTimer()

const hours = ref<HTMLDivElement>()
const minutes = ref<HTMLDivElement>()
const seconds = ref<HTMLDivElement>()

$emitter.on('app:timer:start', (id) => {
    if (id === props.id) {
        return
    }
})

$emitter.on('app:timer:stop', (id) => {
    if (id === props.id) {
        return
    }
})

onMounted(() => {
    const timer = getCurrent(props.startedAt)

    syncRef(useCssVar('--value', hours), computed<string>(() => String(timer.value.hours)))
    syncRef(useCssVar('--value', minutes), computed<string>(() => String(timer.value.minutes)))
    syncRef(useCssVar('--value', seconds), computed<string>(() => String(timer.value.seconds)))
})
</script>

<template>
    <div
        :id="props.id"
        class="grid grid-cols-3 gap-2 text-center auto-cols-max h-full text-4xl"
    >
        <div class="flex flex-col items-center justify-center px-1 py-0.5 bg-white text-dark rounded-md">
            <span class="d-countdown">
                <span ref="hours" />
            </span>
        </div>

        <div class="flex flex-col items-center justify-center px-1 py-0.5 bg-white text-dark rounded-md">
            <span class="d-countdown">
                <span ref="minutes" />
            </span>
        </div>

        <div class="flex flex-col items-center justify-center px-1 py-0.5 bg-white text-dark rounded-md">
            <span class="d-countdown">
                <span ref="seconds" />
            </span>
        </div>
    </div>
</template>

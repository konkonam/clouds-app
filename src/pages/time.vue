<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCssVar, useNow } from '@vueuse/core'

definePageMeta({
    layout: 'minion',
})

const hours = ref<HTMLElement>()
const minutes = ref<HTMLElement>()
const seconds = ref<HTMLElement>()
const now = useNow()

watch(now, () => {
    useCssVar('--value', hours.value).value = String(now.value.getHours())
    useCssVar('--value', minutes.value).value = String(now.value.getMinutes())
    useCssVar('--value', seconds.value).value = String(now.value.getSeconds())
})
</script>

<template>
    <div class="grid grid-cols-3 gap-1 text-center auto-cols-max h-full">
        <div class="flex flex-col items-center justify-center px-1 py-0.5 bg-white text-dark rounded-md">
            <span class="d-countdown font-mono">
                <span ref="hours" />h
            </span>
        </div>

        <div class="flex flex-col items-center justify-center px-1 py-0.5 bg-white text-dark rounded-md">
            <span class="d-countdown font-mono">
                <span ref="minutes" />m
            </span>
        </div>

        <div class="flex flex-col items-center justify-center px-1 py-0.5 bg-white text-dark rounded-md">
            <span class="d-countdown font-mono">
                <span ref="seconds" />s
            </span>
        </div>
    </div>
</template>

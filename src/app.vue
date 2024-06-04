<script setup lang="ts">
import '@fontsource-variable/sono'
import { useLocalStorage } from '@vueuse/core'
import type { Language } from '~/types'

const { $emitter } = useNuxtApp()
const runtimeConfig = useRuntimeConfig()
const language = useLocalStorage<Language>(
    'language',
    runtimeConfig.public.defaultLanguage as Language,
)

$emitter.on('app:lang:set', (value) => {
    language.value = value
})

provide('app:lang', language)
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
        <AppNotifications />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'

const { $emitter } = useNuxtApp()
const { back } = useRouter()
const route = useRoute()
const { isAuthenticated } = useAuth()

const loginLogout = () => {
    if (isAuthenticated) $emitter.emit('auth:logout')
    else navigateTo('/login')
}

const hidden = computed(() => route.meta.layout === 'clean')
</script>

<template>
    <div
        v-if="appWindow"
        :class="[
            'flex flex-row justify-between',
            'w-full pt-4',
            'select-none',
        ]"
    >
        <div class="flex items-center pointer-events-none leading-none">
            {{ useTranslate('general.title').value }}
            <span class="px-1">|</span>
            <span
                v-if="isAuthenticated"
                class="pop-up text-green-400"
            >
                {{ useTranslate('general.online').value }}
            </span>
            <span
                v-else
                class="pop-up text-red-400"
            >
                {{ useTranslate('general.offline').value }}
            </span>
        </div>

        <div
            v-if="!hidden"
            class="flex items-center leading-none"
        >
            <span
                :class="[
                    'd-btn d-btn-xs',
                    isAuthenticated ? 'd-btn-warning' : 'd-btn-primary',
                ]"
                @click.prevent="loginLogout"
            >

                {{ useTranslate(!isAuthenticated ? 'auth.login' : 'auth.logout').value }}
            </span>
        </div>
        <div
            v-else
            class="flex items-center leading-none"
        >
            <span
                class="d-btn d-btn-xs d-btn-warning"
                @click="back"
            >
                {{ useTranslate('general.back').value }}
            </span>
        </div>
    </div>
</template>

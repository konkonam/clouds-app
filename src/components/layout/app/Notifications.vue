<script setup lang="ts">
import { hash } from 'ohash'
import type { Notification } from '~/types'

const { $emitter } = useNuxtApp()

const notifications = ref<Notification[]>([])

$emitter.on('app:notification:add', (notification: Notification) => {
    if (notifications.value.length >= 3) {
        notifications.value = notifications.value.slice(1)
    }

    notification.id = hash(new Date().getTime().toString() + notification.id)
    notifications.value.push(notification)

    setTimeout(() => {
        notifications.value = notifications.value.filter(n => n.id !== notification.id)
    }, notification.duration ?? 3000)
})

$emitter.on('app:notification:remove', (id: string) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
})
</script>

<template>
    <div class="d-toast d-toast-top d-toast-end">
        <div
            v-for="notification in notifications"
            :key="notification.id"
            :class="[
                'bg-primary',
                'text-white',
                'rounded-primary',
                'p-2',
            ]"
        >
            {{ notification.why }}
        </div>
    </div>
</template>

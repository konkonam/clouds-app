<script setup lang="ts">
import z from 'zod'
import type { LoginPayload } from '~/types'

definePageMeta({
    layout: 'clean',
    alias: [
        '/login',
    ],
})

const { $emitter } = useNuxtApp()

const onGood = (payload: Record<string, unknown>) => {
    if (!payload.email || !payload.password) {
        $emitter.emit('app:notification:add', {
            id: 'auth:login:bad',
            why: 'please provide your data',
            type: 'error',
            duration: 3000,
        })

        return
    }

    $emitter.emit('auth:login', payload as LoginPayload)
}

const onBad = () => {
    $emitter.emit('app:notification:add', {
        id: 'auth:login:bad',
        why: 'please provide your data',
        type: 'error',
        duration: 3000,
    })
}
</script>

<template>
    <div class="flex items-center justify-center">
        <BasicForm
            id="login"
            :fields="[
                {
                    name: 'email',
                    type: 'email',
                    group: 'login',
                    value: '',
                    validation: z.string().email(),
                },
                {
                    name: 'password',
                    type: 'password',
                    group: 'login',
                    value: '',
                    validation: z.string().min(8, 'Password must be at least 8 characters long'),
                },
            ]"
            :on-good="onGood"
            :on-bad="onBad"
            class="grow mt-12"
        />
    </div>
</template>

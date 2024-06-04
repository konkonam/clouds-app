import { useLocalStorage } from '@vueuse/core'
import { useGraphql } from '~/graphql'
import type { User } from '~/types/generated/graphql'

export const useAuth = defineStore('auth', () => {
    const { $emitter } = useNuxtApp()
    const { user: userCalls } = useGraphql()

    const user = useLocalStorage<string | undefined>('user', undefined)
    const token = useLocalStorage<string | undefined>('token', undefined)

    const cleanup = () => {
        user.value = undefined
        token.value = undefined
    }

    $emitter.on('auth:login', async (payload) => {
        if (user.value) {
            $emitter.emit('app:notification:add', {
                id: 'auth:login:good',
                why: 'you are already logged in',
                type: 'error',
                duration: 5000,
            })

            $emitter.emit('auth:login:bad')
            return
        }

        const promise = userCalls.loginByEmail(payload)
        $emitter.emit('app:loading', {
            id: 'login',
            promise,
        })
        return promise
            .then((response) => {
                if (!response?.data?.login?.user || !response?.data?.login?.accessToken) {
                    $emitter.emit('app:notification:add', {
                        id: 'auth:login:bad',
                        why: 'could not login due to missing data in the response',
                        type: 'error',
                        duration: 5000,
                    })

                    $emitter.emit('auth:login:bad')
                    return
                }

                user.value = JSON.stringify(response?.data?.login?.user)
                token.value = response?.data?.login?.accessToken

                $emitter.emit('app:notification:add', {
                    id: 'notification:login:good',
                    why: 'login successful',
                    type: 'success',
                    duration: 5000,
                })

                navigateTo('/')

                $emitter.emit('auth:login:good')
            })
            .catch((error) => {
                console.error(error)
                $emitter.emit('app:notification:add', {
                    id: 'auth:login:bad',
                    why: 'something scary happened at the console, you should probably check it out',
                    type: 'error',
                    duration: 5000,
                })

                $emitter.emit('auth:login:bad')
                return
            })
    })

    $emitter.on('auth:logout', () => {
        cleanup()
        reloadNuxtApp({ path: '/' })
    })

    return {
        user: computed<User | undefined>(() => user.value ? JSON.parse(user.value) : undefined),
        token,
        isAuthenticated: computed(() => user.value !== undefined),
    }
})

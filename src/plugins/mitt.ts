import mitt from 'mitt'
import type { Events } from '~/types'

export default defineNuxtPlugin(() => {
    const emitter = mitt<Events>()

    return {
        provide: {
            emitter,
        },
    }
})

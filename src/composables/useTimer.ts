import { computed } from 'vue'
import { useNow } from '@vueuse/core'

export const useTimer = () => {
    const { floor } = Math
    const now = useNow()

    const calculateToTimer = (duration: number) => {
        duration /= 1000
        const durationNoHours = duration % 3600

        return {
            hours: floor(duration / 3600),
            minutes: floor(durationNoHours / 60),
            seconds: floor(durationNoHours % 60),
        }
    }

    const getReactiveTimer = (startTime: string, endTime?: string) => {
        return computed(() => {
            const start = new Date(startTime)
            const end = new Date(endTime ?? now.value.toISOString())

            return calculateToTimer(end.getTime() - start.getTime())
        })
    }

    return {
        calculateToTimer,
        getReactiveTimer,
    }
}

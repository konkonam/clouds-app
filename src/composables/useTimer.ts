import { computed } from 'vue'
import { useNow } from '@vueuse/core'

export const useTimer = () => {
    const now = useNow()

    const getCurrent = (startedAt: Date) => computed(() => {
        const elapsed = now.value.getTime() - startedAt.getTime()

        const totalSeconds = Math.floor(elapsed / 1000)
        const totalMinutes = Math.floor(totalSeconds / 60)
        const totalHours = Math.floor(totalMinutes / 60)

        const remSeconds = totalSeconds % 60
        const remMinutes = totalMinutes % 60

        console.log(`${totalHours}:${remMinutes}:${remSeconds}`)

        return {
            hours: totalHours,
            minutes: remMinutes,
            seconds: remSeconds,
        }
    })

    return {
        getCurrent,
    }
}

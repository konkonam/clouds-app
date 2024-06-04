<script setup lang="ts">
import { useNow } from '@vueuse/core'
import type { DetailedWorkTime } from '~/types/generated/graphql'
import type { Timer } from '~/types'
import { useDateHelpers } from '~/utils/useDateHelpers'

definePageMeta({
    middleware: 'auth',
})

const { user } = useAuth()
const { calculateToTimer, getReactiveTimer } = useTimer()
const { day } = useDateHelpers()
const now = useNow()

const latestWorkTimes = user?.latest_time_entry?.detailed_work_time as DetailedWorkTime[]

const wt = ref<Timer>()
const entries = user?.timeEntries ?? []
if (entries.length < 1 && user?.latest_time_entry) entries.push(user.latest_time_entry)

let result = 0 as number
console.log(entries)
entries.forEach((entry) => {
    const from = new Date(entry?.finished_at ?? 0).getTime() as number
    const to = new Date(entry?.started_at ?? 0).getTime() as number

    result += to - from
})

wt.value = calculateToTimer(result)
const getTimer = (start?: string, end?: string) => getReactiveTimer(
    start ?? now.value.toISOString(),
    end ?? now.value.toISOString(),
)
</script>

<template>
    <div class="grid grid-cols-1 gap-2">
        <Card
            v-for="workTime in latestWorkTimes"
            :key="workTime.startTime?.toString()"
            title="+time"
            class="p-2"
        >
            {{ day.format(new Date(workTime.startTime ?? 0).getDay()) }}
            {{ getTimer(workTime?.startTime ?? '', workTime.endTime ?? '').value.hours }}h
            {{ getTimer(workTime?.startTime ?? '', workTime.endTime ?? '').value.minutes }}m
            {{ getTimer(workTime?.startTime ?? '', workTime.endTime ?? '').value.seconds }}s
        </Card>
    </div>
</template>

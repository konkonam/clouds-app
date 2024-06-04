<script setup lang="ts">
import type { DetailedWorkTime } from '~/types/generated/graphql'

definePageMeta({
    middleware: 'auth',
})

const { user } = useAuth()
const { getCurrent } = useTimer()

// Initialize startedAt with a valid date if available
const startedAt = user?.latest_time_entry?.started_at ? new Date(user.latest_time_entry.started_at) : new Date()

const latestWorkTimes = user?.latest_time_entry?.detailed_work_time as DetailedWorkTime[]

function formatDuration(milliseconds: number) {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)

    const seconds = totalSeconds % 60
    const minutes = totalMinutes % 60
    const hours = totalHours

    return {
        hours,
        minutes,
        seconds,
    }
}

console.log(user?.latest_time_entry?.detailed_work_time)
</script>

<template>
    <div class="grid grid-cols-1 gap-2">
        <Card
            v-for="workTime in latestWorkTimes"
            :key="workTime.startTime?.toString()"
            title="timer"
            class="p-2"
        >
            {{ formatDuration(workTime.duration ?? 0).hours }}h
            {{ formatDuration(workTime.duration ?? 0).minutes }}m
            {{ formatDuration(workTime.duration ?? 0).seconds }}s
        </Card>
    </div>
</template>

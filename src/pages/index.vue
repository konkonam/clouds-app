<script setup lang="ts">
const { user } = useAuth()

const timeEntry = user?.latest_time_entry?.detailed_work_time?.find(value => !value?.endTime)
const startedAt = computed(() => new Date(timeEntry?.startTime ?? 0))
</script>

<template>
    <div class="grid grid-cols-2 gap-2">
        <Card
            class="rounded-lg col-span-2 gap-2"
        >
            <template #title>
                <Snippet name="timer.planning" />
            </template>
            <Timer
                id="main"
                :started-at="startedAt"
            />
        </Card>

        <Card
            class="col-span-2 rounded-lg"
        >
            <div class="grid grid-cols-2 gap-2">
                <button class="d-btn d-btn-success !border-none">
                    {{ useTranslate('timer.start').value }}
                </button>

                <button class="d-btn d-btn-error !border-none">
                    {{ useTranslate('timer.stop').value }}
                </button>
            </div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import type { FormField, SnippetKey } from '~/types'
import lang from '~/configs/lang'

const props = defineProps<{
    fields: Array<FormField>
    prefix?: boolean
}>()

const UNGROUPED = 'ungrouped'

const groupedFields = computed<Record<string, FormField[]>>(() => {
    const result: Record<string, FormField[]> = {}

    props.fields.forEach((field: FormField) => {
        const name = field.group ?? UNGROUPED
        if (!result[name]) result[name] = []

        result[name].push(field)
    })

    return result
})
</script>

<template>
    <div
        v-for="(groupFields, groupKey) in groupedFields"
        :key="groupKey"
        class="flex flex-col gap-2"
    >
        <span
            v-if="groupKey !== UNGROUPED"
            class="pop-up block text-sm pl-2 pointer-events-none"
        >
            {{ useTranslate('groups.' + groupKey, groupKey).value }}
        </span>
        <template
            v-for="(field) in groupFields"
            :key="field.name"
        >
            <label
                :class="[
                    'flex grow items-center gap-2 !outline-none',
                    'd-input w-full bg-darker',
                    field.errors?.length ? 'd-input-error' : '',
                ]"
            >
                <span
                    v-if="props.prefix"
                    class="block min-w-20 text-xs opacity-30 pointer-events-none"
                >{{ field.name }}</span>
                <input
                    v-model="field.value"
                    :type="field.type"
                    :placeholder="field.name"
                    class="grow text-sm !outline-none overflow-hidden"
                    :value="field.value"
                >
            </label>

            <PartialsFormErrors :errors="field.errors ?? []" />
        </template>
    </div>
</template>

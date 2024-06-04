<script setup lang="ts">
import z from 'zod'
import { useLocalStorage } from '@vueuse/core'
import type { Ref } from 'vue'
import type { FormField, Language } from '~/types'

const validations = {
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
} satisfies Record<string, z.ZodTypeAny>

const storage = useLocalStorage<string | undefined>('storage', JSON.stringify([
    {
        name: 'browser',
        group: 'general',
        type: 'text',
        value: 'chrome',
    },
    {
        name: 'profilePath',
        group: 'general',
        type: 'text',
        value: '/etc/var/www',
    },
    {
        name: 'addEntryLabel',
        group: 'sap',
        type: 'text',
        value: 'Add time entry',
    },
]))

const fields = computed<FormField[]>(() => {
    const data = JSON.parse(storage.value ?? '[]')
    return data.map((value: FormField) => {
        return {
            ...value,
            validation: validations[value.name as keyof typeof validations],
        }
    })
})

const onGood = (payload: Record<string, unknown>, currentFields: Array<FormField>) => {
    storage.value = JSON.stringify(currentFields, null, 4)
}

const globalLang = inject<Ref<Language>>('app:lang')
const newLang = computed<Language>(() => {
    if (!globalLang) return 'en'

    return globalLang.value === 'en' ? 'de' : 'en'
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <BasicForm
            id="settings"
            :prefix="true"
            :watch="true"
            :grow="true"
            :fields="fields"
            :on-good="onGood"
            class="pr-8"
        >
            <template #submit>
                <span />
            </template>
        </BasicForm>

        <InputComboBox />

        <button
            class="d-btn d-btn-primary"
            @click="() => $emitter.emit('app:lang:set', newLang)"
        >
            {{ useTranslate('general.changeLanguage').value }}
        </button>

        <InputButton
            id="app:settings:reset:id"
            class="d-btn-error"
            @click="() => $emitter.emit('app:notification:add', {
                id: 'settings:reset',
                why: 'reset settings',
                type: 'error',
                duration: 3000,
            })"
        >
            {{ useTranslate('general.wipeSettings').value }}
        </InputButton>
    </div>
</template>

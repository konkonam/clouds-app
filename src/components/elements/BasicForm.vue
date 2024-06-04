<script setup lang="ts">
import z from 'zod'
import { watchDebounced } from '@vueuse/shared'
import type { FormField } from '~/types'

const props = defineProps<{
    id: string
    prefix?: boolean
    watch?: boolean
    grow?: boolean
    fields: Array<FormField>
    onGood: (payload: Record<string, unknown>, currentFields: Array<FormField>) => void
    onBad?: () => void
}>()

const schema = z.object({})
const formFields = ref<Array<FormField>>(props.fields)
const hasErrors = computed(() => formFields.value
    .some(value => value?.errors?.length))

formFields.value.map((field) => {
    schema.setKey(field.name, field.validation)
})

const onSubmit = () => {
    const payload = formFields.value.reduce((acc: Record<string, unknown>, field) => {
        return {
            ...acc,
            ...{ [field.name]: field.value },
        }
    }, {})

    schema.parseAsync(payload)
        .then(() => {
            props.onGood(payload, formFields.value as Array<FormField>)
        })
        .catch(() => {
            props.onBad?.()
        })
}

onMounted(() => {
    formFields.value.forEach((field) => {
        watch(() => field.value, (value) => {
            const result = field.validation.safeParse(value)
            field.errors = result?.error?.errors ?? []
        })

        if (props.watch) {
            watchDebounced(field, () => onSubmit(), { debounce: 300 })
        }
    })
})
</script>

<template>
    <div
        :class="[
            'flex flex-col gap-4',
            props.grow ? 'w-full' : 'w-full max-w-form',
        ]"
    >
        <PartialsFormFields
            :fields="formFields as Array<FormField>"
            :prefix="props.prefix"
        />

        <slot
            name="submit"
            :has-errors="hasErrors"
            :on-submit="onSubmit"
        >
            <InputButton
                :id="props.id"
                :class="[
                    'd-btn-primary w-full',
                    hasErrors ? '!text-white/50' : '',
                ]"
                :disabled="hasErrors"
                @click="onSubmit"
            >
                {{ useTranslate('general.submit').value }}
            </InputButton>
        </slot>
    </div>
</template>

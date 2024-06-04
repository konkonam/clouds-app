import type { ZodError, ZodTypeAny } from 'zod'
import type { Ref } from 'vue'
import type lang from '~/configs/lang'

export type Notification = {
    id: string
    why?: string
    type?: 'success' | 'error'
    duration?: number
}

export type FormField = {
    name: string
    group?: string
    type: string
    ref?: Ref<HTMLInputElement | undefined>
    value?: string
    validation: ZodTypeAny
    errors?: ZodError['errors']
}

export type SnippetKey<T> = {
    [K in keyof T]: T[K] extends Record<string, unknown>
        ? `${K & string}.${Extract<keyof T[K], string>}`
        : never
}[keyof T]

export type Language = keyof typeof lang.languages
export type FormGroup = keyof typeof lang.groups

import type { Language, Notification } from './entities'

export type LoginPayload = {
    email: string
    password: string
}

export type FormGoodPayload = {
    name: string
    payload: Record<string, unknown>
}

export type FormBadPayload = {
    name: string
    why: string
}

export type AppLoadingPayload = {
    id: string
    promise: Promise<unknown>
}

export type Events = {
    'auth:login': LoginPayload
    'auth:login:good': undefined
    'auth:login:bad': undefined
    'auth:logout': undefined
    'app:notification:add': Notification
    'app:notification:remove': string
    'form:submit:good': FormGoodPayload
    'form:submit:bad': FormBadPayload
    'app:timer:start': string
    'app:timer:stop': string
    'app:lang:set': Language
    'app:loading': AppLoadingPayload
}

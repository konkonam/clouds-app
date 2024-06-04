import { faker } from '@faker-js/faker'
import z from 'zod'

export const useDependency = () => {
    return {
        faker,
        z,
    }
}

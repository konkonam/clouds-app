import { useUser } from './useUser'
import { useTimeEntry } from './useTimeEntry'

export const useGraphql = () => {
    return {
        user: useUser(),
        timeEntries: useTimeEntry(),
    }
}

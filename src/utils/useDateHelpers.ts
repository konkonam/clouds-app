export const useDateHelpers = () => {
    const day = () => {
        enum Mapping {
            Monday = 1,
            Tuesday = 2,
            Wednesday = 3,
            Thursday = 4,
            Friday = 5,
            Saturday = 6,
            Sunday = 7,
        }

        const format = (day: Mapping) => {
            switch (day) {
                case Mapping.Monday: return 'Monday'
                case Mapping.Tuesday: return 'Tuesday'
                case Mapping.Wednesday: return 'Wednesday'
                case Mapping.Thursday: return 'Thursday'
                case Mapping.Friday: return 'Friday'
                case Mapping.Saturday: return 'Saturday'
                case Mapping.Sunday: return 'Sunday'
                default: return 'Unknown'
            }
        }

        return {
            ...Mapping,
            format,
        }
    }

    return {
        day: day(),
    }
}

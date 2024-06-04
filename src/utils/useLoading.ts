const loading = ref<boolean>(true)

export const useLoading = () => {
    return {
        loading,
        withLoading: async <T>(promise: Promise<T>): Promise<T> => {
            return promise
                .then((data) => {
                    loading.value = false

                    return data
                })
                .catch((error) => {
                    loading.value = false
                    throw error
                })
        },
    }
}

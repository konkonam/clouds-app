export default defineNuxtRouteMiddleware(async () => {
    const { user, token } = storeToRefs(useAuth())

    console.log('auth middleware', user.value, token.value)

    if (!user.value || !token.value) {
        throw showError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        })
    }
})

import { provideApolloClient } from '@vue/apollo-composable'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { createFragmentRegistry } from '@apollo/client/cache'
import fragmentDefinitions from '~/graphql/fragments'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const { token } = useAuth()

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        console.error('networkError', networkError)
        console.error('graphQLErrors', graphQLErrors)
    })

    const headerLink = setContext((_, { headers, ...context }) => {
        return {
            headers: {
                ...headers,
                ...(token
                    ? { 'authorization': `Bearer ${token}`, 'tracked-by': 'desktop' }
                    : { 'tracked-by': 'desktop' }),
            },
            ...context,
        }
    })

    const apolloProvider = provideApolloClient(new ApolloClient({
        link: ApolloLink.from([
            errorLink,
            headerLink,
            new HttpLink({ uri: runtimeConfig.public.apiEndpoint }),
        ]),
        cache: new InMemoryCache({
            fragments: createFragmentRegistry(fragmentDefinitions),
        }),
    }))

    return {
        provide: {
            apolloProvider,
        },
    }
})

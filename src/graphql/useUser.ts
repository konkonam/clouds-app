import type { LoginPayload } from '~/types'

export const useUser = () => {
    const loginByEmail = async (payload: LoginPayload) => {
        const query = gql`
            mutation LoginByEmail($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    accessToken
                    expiresAt
                    user {
                        ...UserFields
                    }
                }
            }

        `

        const { mutate } = useMutation(query)

        return mutate({
            email: payload.email,
            password: payload.password,
        })
    }

    return {
        loginByEmail,
    }
}

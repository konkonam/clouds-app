import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'https://api.time.bestit.de/graphql',
    documents: './src/graphql/**/*.ts',
    generates: {
        './src/types/generated/': {
            preset: 'client',
            presetConfig: {
                preResolveTypes: true,
            },
            plugins: [
                'typescript',
                'typescript-operations',
            ],
        },
    },
}

export default config

import { generate } from '@graphql-codegen/cli'
import codegen from './src/configs/codegen'
import snippets from './src/configs/lang'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: false,
    devtools: { enabled: false },
    devServer: {
        https: {
            key: 'dev-ops/localhost-key.pem',
            cert: 'dev-ops/localhost.pem',
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxt/eslint',
        '@pinia/nuxt',
    ],
    plugins: [
        '~/plugins/mitt.ts',
        '~/plugins/apollo.ts',
    ],
    runtimeConfig: {
        public: {
            apiEndpoint: process.env.TIMETRACKING_API_URL,
            defaultLanguage: 'en',
            languages: ['en', 'de'],
            snippets: snippets,
            settings: {
                general: {
                    browser: '',
                    profilePath: '',
                },
                sap: {
                    addEntryLabel: '',
                },
            },
        },
    },
    hooks: {
        'builder:watch': async (event, path) => {
            if (path.startsWith('graphql')) {
                await generate(codegen)
            }
        },
    },
    components: {
        dirs: [
            {
                path: '~/components/elements',
                pathPrefix: true,
            },
            {
                path: '~/components/forms',
                pathPrefix: true,
            },
            {
                path: '~/components/icons',
                pathPrefix: false,
                prefix: 'icon',
            },
            {
                path: '~/components/layout',
                pathPrefix: true,
            },
            {
                path: '~/components',
                pathPrefix: false,
            },
        ],
    },
    imports: {
        presets: [
            {
                from: '@vueuse/core',
                imports: [
                    'useScrollLock',
                ],
            },
            {
                from: '@vue/apollo-composable',
                imports: [
                    'useLazyQuery',
                    'useMutation',
                ],
            },
            {
                from: 'graphql-tag',
                imports: [
                    'gql',
                ],
            },
        ],
    },
    tailwindcss: {
        configPath: './src/configs/tailwind.ts',
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: false,
                quotes: 'single',
                arrowParens: false,
            },
        },
    },
})

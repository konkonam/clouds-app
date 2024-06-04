import type { Ref } from 'vue'
import type { Language, SnippetKey } from '~/types'
import type Snippets from '~/configs/lang'

export const useTranslate = (
    snippetName: SnippetKey<typeof Snippets> | string,
    fallback?: string,
) => {
    const globalLang = inject<Ref<Language>>('app:lang')
    const runtimeConfig = useRuntimeConfig()
    const { snippets, defaultLanguage, translationFallback } = runtimeConfig.public

    return computed(() => {
        const result = fallback || translationFallback
        const [groupKey, key] = snippetName.split('.')

        const group = snippets[groupKey as keyof typeof snippets]
        if (!group) return result

        const property = group[key as keyof typeof group]
        if (!property) return result

        const value = property?.[globalLang?.value ?? defaultLanguage]

        return value ?? result
    })
}

<script setup lang="ts">
import type { Ref } from 'vue'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'
import type { Language } from '~/types'
import lang from '~/configs/lang'

const languages = Object.keys(lang.languages)
const globalLang = inject<Ref<Language>>('app:lang')
const query = ref<string>('')

const filteredLanguages = computed(() =>
    query.value === ''
        ? languages
        : languages.filter((language) => {
            return language.toLowerCase().includes(query.value.toLowerCase())
        }),
)
</script>

<template>
    <Combobox
        v-model="globalLang"
        as="div"
        class="relative"
    >
        <ComboboxInput
            class="d-input w-full bg-darker"
            @change="query = $event.target.value"
        />
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <ComboboxOptions
                class="absolute top-full z-10 w-full min-h-10 pt-2"
            >
                <Card class="p-4 shadow-3xl">
                    <template v-if="filteredLanguages.length > 0">
                        <ComboboxOption
                            v-for="language in filteredLanguages"
                            :key="language"
                            :value="language"
                        >
                            {{ language }}
                        </ComboboxOption>
                    </template>
                    <template v-else>
                        {{ useTranslate('errors.noLanguages').value }}
                    </template>
                </Card>
            </ComboboxOptions>
        </transition>
    </Combobox>
</template>

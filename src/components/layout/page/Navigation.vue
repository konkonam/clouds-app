<template>
    <div class="flex flex-row items-center justify-between gap-x-4 w-full">
        <div class="flex flex-row items-center gap-x-4">
            <NuxtLink
                to="/"
                class="flex items-center justify-center d-btn-xs text-sm font-medium"
                exact-active-class="pop-up d-btn d-btn-primary"
            >
                {{ useTranslate('pages.home').value }}
            </NuxtLink>

            <NuxtLink
                to="/tickets"
                class="flex items-center justify-center d-btn-xs text-sm font-medium"
                exact-active-class="pop-up d-btn d-btn-primary"
            >
                {{ useTranslate('pages.tickets').value }}
            </NuxtLink>
        </div>

        <NuxtLink
            to="/settings"
            class="flex items-center justify-center d-btn-xs text-sm font-medium self-end"
            exact-active-class="pop-up d-btn d-btn-primary"
        >
            <IconGear class="!text-white size-[18px]" />
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
</script>

<template>
    <div class="flex flex-row items-center gap-x-4">
        <NuxtLink
            to="/"
            class="mx-2 text-sm font-medium"
            exact-active-class="pop-up d-btn d-btn-primary d-btn-xs !mx-0"
        >
            {{ useTranslate('pages.home').value }}
        </NuxtLink>

        <NuxtLink
            to="/bookings"
            class="mx-2 text-sm font-medium"
            exact-active-class="pop-up d-btn d-btn-primary d-btn-xs !mx-0"
        >
            {{ useTranslate('pages.bookings').value }}
        </NuxtLink>

        <NuxtLink
            to="/settings"
            class="mx-2 text-sm font-medium"
            exact-active-class="pop-up d-btn d-btn-primary d-btn-xs !mx-0"
        >
            {{ useTranslate('pages.settings').value }}
        </NuxtLink>
    </div>
</template>

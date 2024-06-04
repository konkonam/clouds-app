<template>
    <div
        class="min-h-screen relative flex flex-col gap-4 mx-4 max-h-screen rounded-lg"
    >
        <AppHeader />

        <PageNavigation />

        <div class="flex flex-col grow px-2 overflow-auto">
            <slot />

            <AppFooter />
        </div>
    </div>
</template>

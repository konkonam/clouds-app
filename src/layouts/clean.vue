<script setup lang="ts">

</script>

<template>
    <div
        class="min-h-screen relative flex flex-col gap-4 px-4 max-h-screen rounded-lg bg-dark"
    >
        <AppHeader />

        <PageNavigation />

        <div class="flex-grow h-full overflow-auto">
            <slot />
        </div>
    </div>
</template>

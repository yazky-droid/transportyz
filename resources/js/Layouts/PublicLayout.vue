<script setup lang="ts">

import AppNavbar from '@/Components/Navigation/AppNavbar.vue'
import AppFooter from '@/Components/Navigation/AppFooter.vue'

</script>


<template>

<div class="min-h-screen bg-background text-foreground">

    <AppNavbar />

    <main>
        <slot />
    </main>

    <AppFooter />

</div>

</template>
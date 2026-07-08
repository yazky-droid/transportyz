<script setup lang="ts">

import AppButton from '@/Components/App/AppButton.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppLogo from '@/Components/App/AppLogo.vue'


const menus = [
    {
        label: 'Routes',
        href: '#',
    },
    {
        label: 'Services',
        href: '#',
    },
    {
        label: 'About',
        href: '#',
    },
]

</script>


<template>

<header
    class="
        sticky
        top-0
        z-50
        border-b
        border-border
        bg-background/80
        backdrop-blur-md
    "
>

<AppContainer>

<div
    class="
        flex
        h-20
        items-center
        justify-between
    "
>


    <!-- Logo -->

    <AppLogo />



    <!-- Desktop Navigation -->

    <nav
        class="
            hidden
            items-center
            gap-8
            md:flex
        "
    >

        <a
            v-for="menu in menus"
            :key="menu.label"
            :href="menu.href"
            class="
                text-sm
                text-muted-foreground
                transition
                hover:text-foreground
            "
        >
            {{ menu.label }}
        </a>

    </nav>



    <!-- Action -->

    <div
        class="
            hidden
            items-center
            gap-3
            md:flex
        "
    >

        <a
            href="#"
            class="
                text-sm
                text-muted-foreground
            "
        >
            Login
        </a>


        <AppButton>
            Book Now
        </AppButton>

    </div>



    <!-- Mobile -->

    <button
        class="
            md:hidden
            text-foreground
        "
    >
        ☰
    </button>


</div>

</AppContainer>


</header>

</template>
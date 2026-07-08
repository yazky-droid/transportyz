<script setup lang="ts">

import AppContainer from '@/Components/App/AppContainer.vue'
import AppLogo from '@/Components/App/AppLogo.vue'

const links = [
    'Routes',
    'Services',
    'About',
    'Contact',
]

</script>


<template>

<footer
    class="
        border-t
        border-border
        bg-muted
    "
>

<AppContainer>

<div
    class="
        grid
        gap-10
        py-12
        md:grid-cols-3
    "
>

    <div>
        <AppLogo />

        <p
            class="
                mt-4
                max-w-xs
                text-sm
                text-muted-foreground
            "
        >
            Premium transport booking experience.
        </p>
    </div>


    <div>

        <h3
            class="
                text-sm
                font-semibold
            "
        >
            Navigation
        </h3>


        <ul
            class="
                mt-4
                space-y-3
                text-sm
                text-muted-foreground
            "
        >

            <li
                v-for="link in links"
                :key="link"
            >
                {{ link }}
            </li>

        </ul>

    </div>


    <div>

        <h3
            class="
                text-sm
                font-semibold
            "
        >
            Contact
        </h3>


        <p
            class="
                mt-4
                text-sm
                text-muted-foreground
            "
        >
            support@atlas.com
        </p>

    </div>


</div>


<div
    class="
        border-t
        border-border
        py-6
        text-sm
        text-muted-foreground
    "
>
    © {{ new Date().getFullYear() }} Atlas. All rights reserved.
</div>


</AppContainer>

</footer>

</template>
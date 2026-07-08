<script setup lang="ts">

interface Props {
    size?: 'sm' | 'md' | 'lg'
}

withDefaults(
    defineProps<Props>(),
    {
        size: 'md',
    }
)


const sizes = {
    sm: {
        box: 'h-8 w-8',
        text: 'text-base',
    },

    md: {
        box: 'h-9 w-9',
        text: 'text-lg',
    },

    lg: {
        box: 'h-11 w-11',
        text: 'text-xl',
    },
}

</script>


<template>

<div
    class="
        flex
        items-center
        gap-3
        select-none
    "
>

    <div
        :class="[
            sizes[size].box,
            'flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold'
        ]"
    >
        A
    </div>


    <span
        :class="[
            sizes[size].text,
            'font-semibold tracking-tight text-foreground'
        ]"
    >
        Atlas
    </span>

</div>

</template>
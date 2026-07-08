<script setup lang="ts">

type Variant =
    | 'default'
    | 'interactive'
    | 'elevated'


interface Props {

    variant?: Variant

    padding?: boolean

}


withDefaults(
    defineProps<Props>(),
    {
        variant: 'default',
        padding: true,
    }
)


const variants = {

    default:
        'bg-surface border border-border shadow-soft',

    interactive:
        `
        bg-surface
        border
        border-border
        shadow-soft
        hover:shadow-medium
        cursor-pointer
        transition
        duration-200
        `,

    elevated:
        `
        bg-surface
        shadow-floating
        border
        border-border/50
        `,

}


</script>


<template>

<div
    :class="[
        variants[variant],

        'rounded-xl',

        padding
            ? 'p-6'
            : ''
    ]"
>

    <slot />

</div>


</template>
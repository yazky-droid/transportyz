<script setup lang="ts">

type Variant =
    | 'text'
    | 'circle'
    | 'rect'


interface Props {

    variant?: Variant

    width?: string

    height?: string

    rounded?: boolean

}


withDefaults(
    defineProps<Props>(),
    {
        variant: 'text',
        width: '100%',
        height: '1rem',
        rounded: true,
    }
)


const variants = {

    text:
        'rounded-md',

    circle:
        'rounded-full',

    rect:
        'rounded-lg',

}

</script>


<template>

<div

    :style="{
        width,
        height
    }"

    :class="[

        variants[variant],

        'animate-pulse',

        'bg-muted'

    ]"

/>

</template>
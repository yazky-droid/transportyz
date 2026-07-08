<script setup lang="ts">

type HeadingLevel = 'display' | 'h1' | 'h2' | 'h3'

interface Props {
    level?: HeadingLevel
    as?: string
}

withDefaults(
    defineProps<Props>(),
    {
        level: 'h2',
        as: 'h2',
    }
)

const sizes = {
    display: 'text-display',
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
}

</script>

<template>

<component
    :is="as"
    :class="[
        sizes[level],
        'font-semibold tracking-tight text-foreground'
    ]"
>
    <slot />
</component>

</template>
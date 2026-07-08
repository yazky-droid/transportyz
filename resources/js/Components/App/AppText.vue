<script setup lang="ts">

type TextSize =
    | 'body'
    | 'small'
    | 'caption'


interface Props {
    size?: TextSize
    muted?: boolean
}

withDefaults(
    defineProps<Props>(),
    {
        size: 'body',
        muted: false,
    }
)


const sizes = {
    body: 'text-base',
    small: 'text-sm',
    caption: 'text-xs',
}

</script>


<template>

<p
    :class="[
        sizes[size],
        muted
            ? 'text-muted-foreground'
            : 'text-foreground',
        'leading-relaxed'
    ]"
>

<slot />

</p>

</template>
<script setup lang="ts">

interface Props {
    spacing?: 'sm' | 'md' | 'lg'
}

withDefaults(
    defineProps<Props>(),
    {
        spacing: 'lg',
    }
)

const spacingMap = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
}

</script>

<template>
    <section
        :class="[
            spacingMap[spacing]
        ]"
    >
        <slot />
    </section>
</template>
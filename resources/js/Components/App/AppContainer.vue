<script setup lang="ts">

interface Props {
    as?: string
}

withDefaults(defineProps<Props>(), {
    as: 'div',
})

</script>

<template>
    <component
        :is="as"
        class="
            mx-auto
            w-full
            max-w-7xl
            px-6
            sm:px-8
            lg:px-10
        "
    >
        <slot />
    </component>
</template>
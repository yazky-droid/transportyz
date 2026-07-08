<script setup lang="ts">

interface Props {
    modelValue?: string
    placeholder?: string
    disabled?: boolean
    error?: boolean
    type?: string
}

withDefaults(
    defineProps<Props>(),
    {
        type: 'text',
        disabled: false,
        error: false,
    }
)

const emit = defineEmits<{
    (
        e: 'update:modelValue',
        value: string
    ): void
}>()

</script>


<template>

<input

    :type="type"

    :value="modelValue"

    :placeholder="placeholder"

    :disabled="disabled"

    @input="
        emit(
            'update:modelValue',
            ($event.target as HTMLInputElement).value
        )
    "

    :class="[

        'h-11 w-full',

        'rounded-md',

        'border',

        'bg-background',

        'px-4',

        'text-sm',

        'outline-none',

        'transition',

        error
            ? 'border-danger'
            : 'border-border',

        'focus:border-primary',

        'disabled:cursor-not-allowed',

        'disabled:opacity-50'

    ]"

/>

</template>
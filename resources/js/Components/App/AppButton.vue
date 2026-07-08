<script setup lang="ts">

type Variant =
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'danger'


type Size =
    | 'sm'
    | 'md'
    | 'lg'


interface Props {

    variant?: Variant

    size?: Size

    loading?: boolean

    disabled?: boolean

    type?: 'button' | 'submit' | 'reset'
}


withDefaults(
    defineProps<Props>(),
    {
        variant: 'primary',
        size: 'md',
        loading: false,
        disabled: false,
        type: 'button',
    }
)


const variants = {

    primary:
        'bg-primary text-primary-foreground hover:opacity-90',

    secondary:
        'bg-secondary text-secondary-foreground hover:bg-slate-200',

    ghost:
        'bg-transparent hover:bg-muted text-foreground',

    danger:
        'bg-danger text-danger-foreground hover:opacity-90',

}


const sizes = {

    sm:
        'h-9 px-4 text-sm',

    md:
        'h-11 px-5 text-sm',

    lg:
        'h-13 px-6 text-base',

}

</script>


<template>

<button

    :type="type"

    :disabled="disabled || loading"

    :class="[

        variants[variant],

        sizes[size],

        'inline-flex items-center justify-center gap-2',

        'rounded-md',

        'font-medium',

        'transition',

        'duration-200',

        'disabled:pointer-events-none',

        'disabled:opacity-50'

    ]"

>


    <span
        v-if="loading"
        class="
            h-4
            w-4
            animate-spin
            rounded-full
            border-2
            border-current
            border-t-transparent
        "
    />


    <slot />


</button>


</template>
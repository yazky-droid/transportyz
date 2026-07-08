<script setup lang="ts">

type Variant =
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'


interface Props {

    variant?: Variant

}


withDefaults(
    defineProps<Props>(),
    {
        variant: 'default',
    }
)


const variants = {

    default:
        'bg-muted text-foreground',

    primary:
        'bg-primary text-primary-foreground',

    success:
        'bg-success text-success-foreground',

    warning:
        'bg-warning text-warning-foreground',

    danger:
        'bg-danger text-danger-foreground',

}

</script>


<template>

<span

    :class="[

        variants[variant],

        'inline-flex',

        'items-center',

        'rounded-md',

        'px-2.5',

        'py-1',

        'text-xs',

        'font-medium',

    ]"

>

    <slot />

</span>

</template>
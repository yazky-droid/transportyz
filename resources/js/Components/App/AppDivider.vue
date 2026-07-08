<script setup lang="ts">

type Orientation =
    | 'horizontal'
    | 'vertical'


type Tone =
    | 'default'
    | 'strong'
    | 'soft'


interface Props {

    orientation?: Orientation

    tone?: Tone

}


withDefaults(
    defineProps<Props>(),
    {
        orientation: 'horizontal',
        tone: 'default',
    }
)


const tones = {

    default:
        'bg-border',

    strong:
        'bg-slate-300',

    soft:
        'bg-slate-100',

}


</script>


<template>

<div

    :class="[

        tones[tone],

        orientation === 'horizontal'
            ? 'h-px w-full'
            : 'h-full w-px'

    ]"

/>

</template>
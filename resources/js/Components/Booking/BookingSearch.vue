<script setup lang="ts">

import { ref } from 'vue'

import AppButton from '@/Components/App/AppButton.vue'
import AppCard from '@/Components/App/AppCard.vue'
import AppInput from '@/Components/Form/AppInput.vue'


const origin = ref('')
const destination = ref('')
const date = ref('')
const passenger = ref('1')


const search = () => {
    console.log({
        origin: origin.value,
        destination: destination.value,
        date: date.value,
        passenger: passenger.value,
    })
}

</script>


<template>

<AppCard
    variant="elevated"
>

<div
    class="
        grid
        gap-4
        md:grid-cols-5
    "
>


<AppInput
    v-model="origin"
    placeholder="From"
/>


<AppInput
    v-model="destination"
    placeholder="To"
/>


<AppInput
    v-model="date"
    type="date"
/>


<AppInput
    v-model="passenger"
    type="number"
/>


<AppButton
    size="lg"
    @click="search"
>
    Search
</AppButton>


</div>

</AppCard>

</template>
<script setup lang="ts">

import PublicLayout from '@/Layouts/PublicLayout.vue'

import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'

import ScheduleCard from '@/Components/Schedule/ScheduleCard.vue'


const schedules = [
    {
        departure: '08:00',
        arrival: '11:00',
        duration: '3 hours',
        className: 'Executive',
        price: '150.000',
    },

    {
        departure: '13:00',
        arrival: '16:00',
        duration: '3 hours',
        className: 'Premium',
        price: '200.000',
    },

    {
        departure: '18:00',
        arrival: '21:00',
        duration: '3 hours',
        className: 'Executive',
        price: '150.000',
    },
]


</script>


<template>

<PublicLayout>

<AppSection>

<AppContainer>


<AppHeading level="h1">
    Available Trips
</AppHeading>


<div
    class="
        mt-8
        space-y-5
    "
>

<ScheduleCard
    v-for="schedule in schedules"
    :key="schedule.departure"
    v-bind="schedule"
/>

</div>


</AppContainer>

</AppSection>

</PublicLayout>

</template>
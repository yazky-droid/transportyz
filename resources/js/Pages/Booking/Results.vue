<script setup lang="ts">
import type { Schedule } from '@/Types/Booking'
import { router } from '@inertiajs/vue3'
import { useBookingStore } from '@/Stores/booking'

import PublicLayout from '@/Layouts/PublicLayout.vue'

import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'

import ScheduleCard from '@/Components/Schedule/ScheduleCard.vue'



const schedules: Schedule[] = [

    {
        id: 1,
        departure: '08:00',
        arrival: '11:00',
        duration: '3 hours',
        className: 'Executive',
        price: 150000,
    },


    {
        id: 2,
        departure: '13:00',
        arrival: '16:00',
        duration: '3 hours',
        className: 'Premium',
        price: 200000,
    },


    {
        id: 3,
        departure: '18:00',
        arrival: '21:00',
        duration: '3 hours',
        className: 'Executive',
        price: 150000,
    },

]

const booking = useBookingStore()


const chooseSchedule = (schedule) => {

    booking.setSchedule(schedule)

    booking.setTotal(schedule.price)

    router.get(
        route('booking.seats')
    )

}


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
    :key="schedule.id"
    v-bind="schedule"
    @choose="chooseSchedule"
/>

</div>


</AppContainer>

</AppSection>

</PublicLayout>

</template>
<script setup lang="ts">

import PublicLayout from '@/Layouts/PublicLayout.vue'

import AppButton from '@/Components/App/AppButton.vue'
import AppCard from '@/Components/App/AppCard.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'

import { router } from '@inertiajs/vue3'

import { useBookingStore } from '@/Stores/booking'


const booking = useBookingStore()



const confirmBooking = ()=>{


    booking.createConfirmation()


    router.get(
        route('booking.confirmation')
    )


}

</script>

<template>
    <PublicLayout>
        <AppSection>
            <AppContainer>
                <AppHeading level="h1">
                    Booking Summary
                </AppHeading>

                <AppCard class="mt-8">
                    <div class="space-y-6">

                        <div>
                            <p class="text-sm text-muted-foreground">
                                Route
                            </p>

                            <p class="font-semibold">

                            {{ booking.origin ?? '-' }}

                            →

                            {{ booking.destination ?? '-' }}

                            </p>
                        </div>

                        <div>

                            <p class="text-sm text-muted-foreground">
                                Departure Date
                            </p>


                            <p class="font-semibold">

                            {{ booking.departureDate || '-' }}

                            </p>

                        </div>

                        <div>
                            <p class="text-sm text-muted-foreground">
                                Schedule
                            </p>

                            <p class="font-semibold">
                                {{ booking.schedule?.departure ?? '-' }}
                                →
                                {{ booking.schedule?.arrival ?? '-' }}
                            </p>
                        </div>

                        <div>

                        <p class="text-sm text-muted-foreground">
                            Passengers
                        </p>


                        <p class="font-semibold">

                        {{ booking.passengerCount }}

                        person

                        </p>

                        </div>

                        <div>
                            <p class="text-sm text-muted-foreground">
                                Passenger
                            </p>

                            <p class="font-semibold">
                                {{ booking.passengers[0]?.name || '-' }}
                            </p>

                            <p
                                v-if="booking.passengers[0]?.email"
                                class="mt-1 text-sm text-muted-foreground"
                            >
                                {{ booking.passengers[0].email }}
                            </p>

                            <p
                                v-if="booking.passengers[0]?.phone"
                                class="text-sm text-muted-foreground"
                            >
                                {{ booking.passengers[0].phone }}
                            </p>
                        </div>

                        <div>

                            <p class="text-sm text-muted-foreground">
                                Seats
                            </p>


                            <div class="flex gap-2 mt-2">

                            <span
                                v-for="seat in booking.selectedSeats"
                                :key="seat.id"

                                class="
                                    rounded-lg
                                    bg-muted
                                    px-3
                                    py-1
                                    text-sm
                                "
                            >

                            {{ seat.number }}

                            </span>


                            <span
                                v-if="!booking.selectedSeats.length"
                            >
                            -
                            </span>

                            </div>

                            </div>
                        <div
                            class="border-t border-border pt-6"
                        >
                            <p class="text-sm text-muted-foreground">
                                Total
                            </p>

                            <p
                                class="text-2xl font-semibold"
                            >
                                Rp {{ (booking.schedule?.price * booking.passengerCount).toLocaleString('id-ID') }}
                            </p>
                        </div>

                        <AppButton
                            class="w-full"
                            size="lg"
                            @click="confirmBooking"
                        >
                            Confirm Booking
                        </AppButton>

                    </div>
                </AppCard>
            </AppContainer>
        </AppSection>
    </PublicLayout>
</template>
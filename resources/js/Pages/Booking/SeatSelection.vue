<script setup lang="ts">

import { computed, ref } from 'vue'
import { router } from '@inertiajs/vue3'


import PublicLayout from '@/Layouts/PublicLayout.vue'


import AppButton from '@/Components/App/AppButton.vue'
import AppCard from '@/Components/App/AppCard.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'


import SeatMap from '@/Components/Booking/SeatMap.vue'


import type { Seat } from '@/Types/Booking'


import { useBookingStore } from '@/Stores/booking'


const booking = useBookingStore()



const seats = ref<Seat[]>([

{
 id:1,
 number:'A1',
 row:'A',
 position:1,
 status:'available'
},

{
 id:2,
 number:'A2',
 row:'A',
 position:2,
 status:'available'
},

{
 id:3,
 number:'A3',
 row:'A',
 position:3,
 status:'booked'
},


{
 id:4,
 number:'B1',
 row:'B',
 position:1,
 status:'available'
},

{
 id:5,
 number:'B2',
 row:'B',
 position:2,
 status:'available'
},

{
 id:6,
 number:'B3',
 row:'B',
 position:3,
 status:'available'
},

])



const selectedSeats = computed(()=>{

    return booking.selectedSeats

})



const toggleSeat = (seat:Seat)=>{


    const exists =
        booking.selectedSeats
        .find(
            item=>item.id===seat.id
        )


    if(exists){

        booking.setSeats(
            booking.selectedSeats.filter(
                item=>item.id!==seat.id
            )
        )

        return

    }


    booking.setSeats([
        ...booking.selectedSeats,
        seat
    ])


}



const continueBooking = ()=>{

    router.get(
        route('booking.passenger')
    )

}


</script>



<template>

<PublicLayout>


<AppSection>


<AppContainer>



<AppHeading level="h1">

Choose Your Seat

</AppHeading>


<p
class="
mt-2
text-muted-foreground
"
>

Select your preferred seat before continuing

</p>



<div
class="
mt-8
grid
gap-8
lg:grid-cols-[1fr_320px]
"
>


<!-- Seat -->

<div>

<SeatMap

:seats="seats"

:selectedSeats="selectedSeats"

@toggle="toggleSeat"

/>

</div>



<!-- Summary -->

<AppCard>


<h3
class="
text-lg
font-semibold
"
>

Your Selection

</h3>



<div
class="
mt-6
space-y-4
"
>


<div>

<p class="text-sm text-muted-foreground">

Seats

</p>


<div
class="
mt-2
flex
flex-wrap
gap-2
"
>


<span

v-for="seat in selectedSeats"

:key="seat.id"

class="
rounded-lg
bg-primary/10
px-3
py-1
text-sm
font-medium
text-primary
"

>

{{seat.number}}

</span>


<span
v-if="!selectedSeats.length"
class="text-muted-foreground"
>

No seat selected

</span>


</div>

</div>




<div
class="
border-t
pt-4
"
>


<p class="text-sm text-muted-foreground">

Total

</p>


<p
class="
text-2xl
font-semibold
"
>

Rp {{ booking.total.toLocaleString('id-ID') }}

</p>


</div>



<AppButton

class="w-full"

@click="continueBooking"

:disabled="!selectedSeats.length"

>

Continue

</AppButton>



</div>


</AppCard>


</div>


</AppContainer>


</AppSection>


</PublicLayout>


</template>
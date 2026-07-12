<script setup lang="ts">


import PublicLayout from '@/Layouts/PublicLayout.vue'


import AppCard from '@/Components/App/AppCard.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'
import AppButton from '@/Components/App/AppButton.vue'


import { router } from '@inertiajs/vue3'

import { useBookingStore } from '@/Stores/booking'


const booking = useBookingStore()



const backHome = ()=>{

    booking.reset()


    router.get(
        route('test')
    )

}


</script>



<template>


<PublicLayout>


<AppSection>


<AppContainer>


<div
class="
max-w-xl
mx-auto
"
>


<AppCard>


<div
class="
text-center
space-y-6
"
>


<div
class="
mx-auto
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-green-100
text-2xl
"
>

✓

</div>



<AppHeading level="h1">

Booking Confirmed

</AppHeading>



<p class="text-muted-foreground">

Your trip has been successfully booked

</p>



<div
class="
rounded-2xl
bg-muted
p-6
text-left
space-y-4
"
>


<div>

<p class="text-sm text-muted-foreground">

Booking Code

</p>


<p
class="
text-xl
font-semibold
"
>

{{ booking.confirmation?.bookingCode }}

</p>


</div>



<div>

<p class="text-sm text-muted-foreground">

Route

</p>


<p class="font-semibold">

{{booking.origin}}

→

{{booking.destination}}

</p>


</div>




<div>

<p class="text-sm text-muted-foreground">

Seats

</p>


<p class="font-semibold">

<span
v-for="seat in booking.selectedSeats"
:key="seat.id"
>

{{seat.number}}

</span>

</p>

</div>




<div>

<p class="text-sm text-muted-foreground">

Total

</p>


<p
class="
text-xl
font-semibold
"
>

Rp {{booking.total.toLocaleString('id-ID')}}

</p>

</div>



</div>



<AppButton

class="w-full"

@click="backHome"

>

Back to Home

</AppButton>



</div>


</AppCard>


</div>


</AppContainer>


</AppSection>


</PublicLayout>


</template>
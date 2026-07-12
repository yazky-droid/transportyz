<script setup lang="ts">

import type { Seat } from '@/Types/Booking'


interface Props {

    seats: Seat[]

    selectedSeats: Seat[]

}


const props = defineProps<Props>()


const emit = defineEmits<{

    toggle:[
        seat:Seat
    ]

}>()



const isSelected = (seat:Seat)=>{

    return props.selectedSeats.some(
        item=>item.id === seat.id
    )

}



const selectSeat = (seat:Seat)=>{

    if(seat.status === 'booked'){
        return
    }


    emit(
        'toggle',
        seat
    )

}

</script>



<template>


<div
class="
    rounded-3xl
    border
    bg-white
    p-8
    shadow-sm
"
>


<!-- Driver -->

<div
class="
    mb-8
    flex
    justify-end
"
>

<div
class="
    flex
    h-12
    w-20
    items-center
    justify-center
    rounded-xl
    bg-muted
    text-sm
"
>

Driver

</div>

</div>



<!-- Seats -->

<div
class="
    grid
    grid-cols-3
    gap-5
    max-w-xs
    mx-auto
"
>


<button

v-for="seat in seats"

:key="seat.id"


class="
    flex
    h-14
    items-center
    justify-center
    rounded-xl
    border
    text-sm
    font-semibold
    transition-all
    duration-200
"

:class="{

'border-primary bg-primary text-white scale-105':
    isSelected(seat),


'bg-white hover:border-primary':
    seat.status==='available'
    &&
    !isSelected(seat),


'cursor-not-allowed bg-gray-100 text-gray-400':
    seat.status==='booked'

}"

@click="selectSeat(seat)"

>


{{seat.number}}


</button>


</div>



<!-- Legend -->

<div
class="
    mt-8
    flex
    justify-center
    gap-6
    text-sm
"
>


<div
class="
flex
items-center
gap-2
"
>

<span
class="
h-4
w-4
rounded
border
"
></span>

Available

</div>



<div
class="
flex
items-center
gap-2
"
>

<span
class="
h-4
w-4
rounded
bg-primary
"
></span>

Selected

</div>



<div
class="
flex
items-center
gap-2
"
>

<span
class="
h-4
w-4
rounded
bg-gray-200
"
></span>

Booked

</div>


</div>


</div>


</template>
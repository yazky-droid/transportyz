<script setup lang="ts">
import type { Schedule } from '@/Types/Booking'
import AppBadge from '@/Components/App/AppBadge.vue'
import AppButton from '@/Components/App/AppButton.vue'
import AppCard from '@/Components/App/AppCard.vue'


const props = defineProps<{
    id: number
    departure: string
    arrival: string
    duration: string
    className: string
    price: number
}>()


const emit = defineEmits<{

    choose: [
        schedule: Schedule
    ]

}>()



const choose = () => {

    emit(
        'choose',
        props
    )

}
</script>


<template>

<AppCard
    variant="interactive"
>

<div
    class="
        flex
        flex-col
        gap-6
        md:flex-row
        md:items-center
        md:justify-between
    "
>


<div>

<AppBadge variant="primary">
    {{ className }}
</AppBadge>


<div
    class="
        mt-4
        flex
        items-center
        gap-4
    "
>

<div>

<p class="text-2xl font-semibold">
    {{ departure }}
</p>

<p class="text-sm text-muted-foreground">
    Departure
</p>

</div>


<div
    class="
        text-muted-foreground
    "
>
→
</div>


<div>

<p class="text-2xl font-semibold">
    {{ arrival }}
</p>

<p class="text-sm text-muted-foreground">
    Arrival
</p>

</div>


</div>


<p
    class="
        mt-3
        text-sm
        text-muted-foreground
    "
>
Duration {{ duration }}
</p>


</div>



<div
    class="
        flex
        items-center
        justify-between
        gap-6
        md:flex-col
        md:items-end
    "
>


<div>

<p
    class="
        text-sm
        text-muted-foreground
    "
>
Starting from
</p>


<p
    class="
        text-xl
        font-semibold
    "
>
Rp {{ price }}
</p>


</div>


<AppButton @click="choose">
    Choose
</AppButton>


</div>


</div>

</AppCard>

</template>
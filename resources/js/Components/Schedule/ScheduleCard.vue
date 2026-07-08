<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import AppBadge from '@/Components/App/AppBadge.vue'
import AppButton from '@/Components/App/AppButton.vue'
import AppCard from '@/Components/App/AppCard.vue'

interface Props {
    departure: string
    arrival: string
    duration: string
    className: string
    price: string
}

// 1. Simpan macro defineProps ke dalam sebuah variabel (biasanya dinamai 'props')
const props = defineProps<Props>()

const choose = () => {
    router.get(
        route('booking.passenger'),
        {
            // 2. Akses datanya menggunakan props.namaProperti
            departure: props.departure,
            arrival: props.arrival,
            duration: props.duration,
            className: props.className,
            price: props.price,
        }
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
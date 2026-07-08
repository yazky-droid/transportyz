<script setup lang="ts">

import PublicLayout from '@/Layouts/PublicLayout.vue'
import BookingSearch from '@/Components/Booking/BookingSearch.vue'

</script>


<template>

<PublicLayout>

<section
    class="
        py-20
    "
>

<div
    class="
        mx-auto
        max-w-3xl
        px-6
    "
>

<h1
    class="
        text-3xl
        font-semibold
    "
>
Find your journey
</h1>


<p
    class="
        mt-3
        text-muted-foreground
    "
>
Choose your route and travel date.
</p>


<div class="mt-8">

<BookingSearch />

</div>


</div>

</section>


</PublicLayout>

</template>
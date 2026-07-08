<script setup lang="ts">

import AppBadge from '@/Components/App/AppBadge.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'
import AppText from '@/Components/App/AppText.vue'
import BookingSearch from '@/Components/Booking/BookingSearch.vue'

</script>


<template>

<AppSection spacing="lg">

<AppContainer>

<div
    class="
        mx-auto
        max-w-3xl
        text-center
    "
>

<AppBadge variant="primary">
    Premium Transport Experience
</AppBadge>


<div class="mt-6">

<AppHeading level="display">
    Travel smarter,
    arrive comfortably.
</AppHeading>

</div>


<div class="mx-auto mt-6 max-w-xl">

<AppText muted>
    Book your premium journey with reliable schedules,
    comfortable vehicles, and seamless experience.
</AppText>

<div class="mt-10">

    <BookingSearch />

</div>

</div>


</div>


</AppContainer>

</AppSection>

</template>
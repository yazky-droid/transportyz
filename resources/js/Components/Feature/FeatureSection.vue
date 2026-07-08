<script setup lang="ts">

import AppBadge from '@/Components/App/AppBadge.vue'
import AppCard from '@/Components/App/AppCard.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'
import AppText from '@/Components/App/AppText.vue'


const features = [
    {
        title: 'Reliable Schedule',
        description:
            'Travel with consistent schedules and dependable service.',
    },
    {
        title: 'Premium Comfort',
        description:
            'Enjoy a comfortable journey designed around your needs.',
    },
    {
        title: 'Easy Booking',
        description:
            'Find and book your trip in just a few simple steps.',
    },
]

</script>


<template>

<AppSection>

<AppContainer>

<div class="text-center">

<AppBadge>
    Why Atlas
</AppBadge>


<div class="mt-4">

<AppHeading level="h2">
    Everything you need for a better journey
</AppHeading>

</div>


<div class="mx-auto mt-3 max-w-xl">

<AppText muted>
    A modern transport experience built for comfort,
    reliability, and simplicity.
</AppText>

</div>

</div>



<div
    class="
        mt-10
        grid
        gap-6
        md:grid-cols-3
    "
>


<AppCard
    v-for="feature in features"
    :key="feature.title"
>

<h3
    class="
        font-semibold
    "
>
{{ feature.title }}
</h3>


<p
    class="
        mt-3
        text-sm
        text-muted-foreground
    "
>
{{ feature.description }}
</p>


</AppCard>


</div>


</AppContainer>

</AppSection>

</template>
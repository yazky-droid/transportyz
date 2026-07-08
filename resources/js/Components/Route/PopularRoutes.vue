<script setup lang="ts">

import AppBadge from '@/Components/App/AppBadge.vue'
import AppButton from '@/Components/App/AppButton.vue'
import AppCard from '@/Components/App/AppCard.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'
import AppText from '@/Components/App/AppText.vue'


const routes = [
    {
        from: 'Jakarta',
        to: 'Bandung',
        duration: '3 hours',
        price: '150K',
    },

    {
        from: 'Jakarta',
        to: 'Cirebon',
        duration: '4 hours',
        price: '180K',
    },

    {
        from: 'Jakarta',
        to: 'Semarang',
        duration: '6 hours',
        price: '250K',
    },
]

</script>


<template>

<AppSection>

<AppContainer>


<div
    class="
        flex
        items-end
        justify-between
    "
>

<div>

<AppBadge>
    Popular
</AppBadge>


<div class="mt-4">

<AppHeading level="h2">
    Popular Routes
</AppHeading>

</div>


<div class="mt-3">

<AppText muted>
    Choose your favorite destination.
</AppText>

</div>


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
    v-for="route in routes"
    :key="route.to"
    variant="interactive"
>


<div
    class="
        flex
        items-center
        justify-between
    "
>

<div>

<h3
    class="
        font-semibold
    "
>
{{ route.from }}
→
{{ route.to }}
</h3>


<p
    class="
        mt-2
        text-sm
        text-muted-foreground
    "
>
{{ route.duration }}
</p>

</div>


<div
    class="
        text-right
    "
>

<p
    class="
        text-sm
        text-muted-foreground
    "
>
From
</p>


<p
    class="
        font-semibold
    "
>
{{ route.price }}
</p>


</div>


</div>


<div class="mt-6">

<AppButton
    class="w-full"
>
    Book
</AppButton>

</div>


</AppCard>


</div>


</AppContainer>

</AppSection>

</template>
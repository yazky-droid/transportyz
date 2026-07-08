<script setup lang="ts">

import AppButton from '@/Components/App/AppButton.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'
import AppText from '@/Components/App/AppText.vue'

</script>


<template>

<AppSection>

<AppContainer>

<div
    class="
        rounded-xl
        bg-primary
        px-6
        py-14
        text-center
        text-primary-foreground
        md:px-12
    "
>


<AppHeading
    level="h2"
    as="h2"
>

Ready for your next journey?

</AppHeading>


<div class="mx-auto mt-4 max-w-xl">

<p
    class="
        leading-relaxed
        text-white/80
    "
>
Book your trip with a simple,
comfortable, and reliable experience.
</p>

</div>



<div class="mt-8">

<AppButton
    variant="secondary"
    size="lg"
>
    Start Booking
</AppButton>

</div>


</div>

</AppContainer>

</AppSection>

</template>
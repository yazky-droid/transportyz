<script setup lang="ts">

import AppContainer from '@/Components/App/AppContainer.vue'
import AppSection from '@/Components/App/AppSection.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppText from '@/Components/App/AppText.vue'
import AppButton from '@/Components/App/AppButton.vue'
import AppCard from '@/Components/App/AppCard.vue'

</script>


<template>

<AppSection>

<AppContainer>

    <AppHeading level="display">
        Premium Transport Booking
    </AppHeading>


    <AppText muted>
        Book your journey with a seamless experience.
    </AppText>
    <div class="flex gap-4">

    <AppButton>
        Search Journey
    </AppButton>


    <AppButton variant="secondary">
        Back
    </AppButton>


    <AppButton
        variant="ghost"
    >
        Cancel
    </AppButton>


    <AppButton
        size="lg"
        loading
    >
        Payment
    </AppButton>


    </div>

    <div class="grid gap-6 md:grid-cols-3">


    <AppCard>

        <h3>
            Jakarta - Bandung
        </h3>

        <p>
            Departure 08:00
        </p>

    </AppCard>



    <AppCard variant="interactive">

        Choose Schedule

    </AppCard>



    <AppCard variant="elevated">

        Total
        <br>
        Rp150.000

    </AppCard>


    </div>

</AppContainer>

</AppSection>

</template>
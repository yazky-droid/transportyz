<script setup lang="ts">

import PublicLayout from '@/Layouts/PublicLayout.vue'

import AppButton from '@/Components/App/AppButton.vue'
import AppCard from '@/Components/App/AppCard.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'


const confirmBooking = () => {

    alert('Booking confirmed')

}

</script>


<template>

<PublicLayout>

<AppSection>

<AppContainer>


<AppHeading level="h1">
    Booking Summary
</AppHeading>



<AppCard
    class="mt-8"
>


<div
    class="
        space-y-6
    "
>


<div>

<p class="text-sm text-muted-foreground">
    Route
</p>


<p class="font-semibold">
    Jakarta → Bandung
</p>

</div>



<div>

<p class="text-sm text-muted-foreground">
    Schedule
</p>


<p class="font-semibold">
    08:00 - 11:00
</p>

</div>



<div>

<p class="text-sm text-muted-foreground">
    Passenger
</p>


<p class="font-semibold">
    John Doe
</p>

</div>



<div
    class="
        border-t
        border-border
        pt-6
    "
>

<p class="text-sm text-muted-foreground">
    Total
</p>


<p
    class="
        text-2xl
        font-semibold
    "
>
Rp150.000
</p>

</div>



<AppButton
    class="w-full"
    size="lg"
    @click="confirmBooking"
>
    Confirm Booking
</AppButton>



</div>


</AppCard>


</AppContainer>

</AppSection>

</PublicLayout>

</template>
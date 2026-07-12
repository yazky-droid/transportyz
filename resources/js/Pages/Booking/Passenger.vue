<script setup lang="ts">
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'

import PublicLayout from '@/Layouts/PublicLayout.vue'

import AppButton from '@/Components/App/AppButton.vue'
import AppCard from '@/Components/App/AppCard.vue'
import AppContainer from '@/Components/App/AppContainer.vue'
import AppHeading from '@/Components/App/AppHeading.vue'
import AppSection from '@/Components/App/AppSection.vue'
import AppInput from '@/Components/Form/AppInput.vue'

import { useBookingStore } from '@/Stores/booking'

const booking = useBookingStore()

const name = ref('')
const phone = ref('')
const email = ref('')

const submit = () => {
    booking.setPassengers([
        {
            name: name.value,
            phone: phone.value,
            email: email.value,
        },
    ])

    router.get(route('booking.summary'))
}
</script>

<template>
    <PublicLayout>
        <AppSection>
            <AppContainer>
                <AppHeading level="h1">
                    Passenger Details
                </AppHeading>

                <AppCard class="mt-8">
                    <div class="space-y-4">
                        <AppInput
                            v-model="name"
                            placeholder="Full name"
                        />

                        <AppInput
                            v-model="phone"
                            placeholder="Phone number"
                        />

                        <AppInput
                            v-model="email"
                            placeholder="Email"
                        />

                        <AppButton
                            class="w-full"
                            @click="submit"
                        >
                            Continue
                        </AppButton>
                    </div>
                </AppCard>
            </AppContainer>
        </AppSection>
    </PublicLayout>
</template>
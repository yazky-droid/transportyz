import { defineStore } from 'pinia'

import type {
    Route,
    Schedule,
    Passenger,
    Seat,
    Confirmation
} from '@/Types/Booking'


export const useBookingStore = defineStore('booking', {

    state: () => ({

        origin: '',
        destination: '',
        departureDate: '',
        passengerCount: 1,

        route: null as Route | null,

        schedule: null as Schedule | null,

        passengers: [] as Passenger[],

        selectedSeats: [] as Seat[],

        total: 0,

        confirmation: null as Confirmation | null,

    }),


    actions: {


        setSearch(payload: {
            origin: string
            destination: string
            departureDate: string
            passengerCount: number
        }) {

            this.origin = payload.origin
            this.destination = payload.destination
            this.departureDate = payload.departureDate
            this.passengerCount = payload.passengerCount

        },

        setPassengers(passengers: Passenger[]) {

            this.passengers = passengers

        },


        addPassenger(passenger: Passenger) {

            this.passengers.push(passenger)

        },

        setSchedule(schedule: Schedule) {

            this.schedule = schedule

        },

        setSeats(seats: Seat[]) {

            this.selectedSeats = seats

        },

        setTotal(total: number) {

            this.total = total

        },

        createConfirmation(){

            this.confirmation = {

                bookingCode:
                    'ATLAS-' +
                    Math.random()
                    .toString(36)
                    .substring(2,8)
                    .toUpperCase(),


                createdAt:
                    new Date()
                    .toISOString()

            }

        },

        reset() {

            this.$reset()

        }


    }

})
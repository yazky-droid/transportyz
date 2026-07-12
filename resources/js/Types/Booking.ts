export interface City {
    id: number
    name: string
}

export interface Route {
    id: number
    origin: City
    destination: City
}

export interface Schedule {

    id: number
    departure: string
    arrival: string
    duration: string
    className: string
    price: number

}

export interface Passenger {
    name: string
    phone: string
    email: string
}

export interface BookingSummary {

    origin: string

    destination: string

    departureDate: string

    passengerCount: number


    route: Route | null

    schedule: Schedule | null


    selectedSeats: Seat[]


    passengers: Passenger[]


    total: number


    confirmation: Confirmation | null

}

export interface Seat {

    id:number

    number:string

    row:string

    position:number

    status:'available'|'booked'

}

export interface Confirmation {

    bookingCode: string

    createdAt: string

}
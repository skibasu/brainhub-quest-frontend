import React from "react"
import Template from "../templates/default"
import EventForm from "../components/EventForm/EventForm"
import EventsList from "../components/EventsList/EventsList"
import { EventsProvider } from "../hooks/use-event-context"

const Home = () => {
    return (
        <Template>
            <EventsProvider>
                <EventForm />
                <EventsList />
            </EventsProvider>
        </Template>
    )
}

export default Home

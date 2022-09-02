import React from "react"
import Template from "../templates/default"
import EventForm from "../components/EventForm/EventForm"
import EventsList from "../components/EventsList/EventsList"
import { EventsModalProvider } from "../hooks/use-event-context"

const Home = () => {
    console.log(process.env.REACT_APP_AXIOS_BASE_URL)
    return (
        <Template>
            <EventsModalProvider>
                <EventForm />
                <EventsList />
            </EventsModalProvider>
        </Template>
    )
}

export default Home

import React, { useEffect } from "react"
import { getEvents } from "../../utils/api/api"
import SingleEvent from "./EventSingle/EventSingle"
import { useEventsContext } from "../../hooks/use-event-context"
import Spinner from "../Spinner/Spinner"
import { Button } from "react-bootstrap"
import EventErrorMessage from "./EventErrorMessage/EventErrorMessage"
import EventEmptyMessage from "./EventEmptyMessage/EventEmptyMessage"
import "./EventList.scss"

export interface IEvent {
    _id: string
    name: string
    date: string
    email: string
    createdAt: string
    updatedAt: string
}
const EventsList = () => {
    const {
        events,
        setEvents,
        isDownloading,
        setIsDownloading,
        setErrorDownloading,
    } = useEventsContext()
    const createListOfEvents = async () => {
        setIsDownloading(true)
        const data = await getEvents()
        data?.events && setEvents(data.events)
        data?.error &&
            setErrorDownloading(data?.message || "Something went wrong.")
        setIsDownloading(false)
    }

    useEffect(() => {
        createListOfEvents()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <section className="pb-5">
            <h2 className="py-4 mt-3 text-center">All Events</h2>
            <div className="d-flex w-100 justify-content-center pb-4 mb-5">
                <Button variant="warning" onClick={createListOfEvents}>
                    Refresh Events
                </Button>
            </div>
            <Spinner isLoading={isDownloading} />
            <EventEmptyMessage />
            <EventErrorMessage />
            {events?.length > 0 ? (
                <div className="d-flex flex-wrap event-list">
                    {events.map(({ name, email, date, _id: id }) => (
                        <SingleEvent
                            key={id}
                            name={name}
                            email={email}
                            date={date}
                        />
                    ))}
                </div>
            ) : null}
        </section>
    )
}

export default EventsList

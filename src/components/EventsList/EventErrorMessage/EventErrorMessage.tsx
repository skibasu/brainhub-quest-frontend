import React from "react"
import { useEventsContext } from "../../../hooks/use-event-context"

const EventErrorMessage = (): JSX.Element | null => {
    console.log("message")
    const { events, isDownloading, errorDownloading } = useEventsContext()
    return !isDownloading && events.length === 0 && !errorDownloading ? (
        <>
            <p className="text-center">No Events yet.</p>
            <p className="text-center">You can add you event by form above.</p>
        </>
    ) : null
}

export default EventErrorMessage

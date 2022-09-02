import React from "react"
import { useEventsContext } from "../../../hooks/use-event-context"

const EventErrorMessage = (): JSX.Element | null => {
    const { isDownloading, errorDownloading } = useEventsContext()
    return !isDownloading && errorDownloading ? (
        <p className="text-center text-danger">{errorDownloading}</p>
    ) : null
}

export default EventErrorMessage

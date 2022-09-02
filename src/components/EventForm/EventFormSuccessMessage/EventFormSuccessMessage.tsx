import React from "react"
import { useEventsContext } from "../../../hooks/use-event-context"

const EventFormSuccessMessage = (): JSX.Element | null => {
    const { successEventMessage } = useEventsContext()
    return successEventMessage ? (
        <p className="text-success py-3 text-center">{successEventMessage}</p>
    ) : null
}

export default EventFormSuccessMessage

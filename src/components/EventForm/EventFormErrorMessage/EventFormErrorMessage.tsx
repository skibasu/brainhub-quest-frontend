import React from "react"
import { useEventsContext } from "../../../hooks/use-event-context"

const EventFormErrorMessage = (): JSX.Element | null => {
    const { errorSending } = useEventsContext()
    return errorSending ? (
        <p
            data-testid="event-form-error"
            className="text-error  py-3 text-center"
        >
            {errorSending}
        </p>
    ) : null
}

export default EventFormErrorMessage

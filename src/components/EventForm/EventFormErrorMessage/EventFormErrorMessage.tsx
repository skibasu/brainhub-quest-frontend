import React from "react"
import { useEventsContext } from "../../../hooks/use-event-context"

interface IEventFormErrorMessage {
    className?: string
}
const EventFormErrorMessage = ({
    className,
}: IEventFormErrorMessage): JSX.Element | null => {
    const { errorSending } = useEventsContext()
    return errorSending ? (
        <div className={className ? className : ""}>
            <p
                data-testid="event-form-error"
                className="text-error  py-2 text-center m-0"
            >
                {errorSending}
            </p>
        </div>
    ) : null
}

export default EventFormErrorMessage

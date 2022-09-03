import React from "react"
import { useEventsContext } from "../../../hooks/use-event-context"
interface IEventFormSuccessMessage {
    className?: string
}
const EventFormSuccessMessage = ({
    className,
}: IEventFormSuccessMessage): JSX.Element | null => {
    const { successEventMessage } = useEventsContext()
    return successEventMessage ? (
        <div className={className ? className : ""}>
            <p
                data-testid="event-form-success"
                className="text-success py-2 text-center m-0"
            >
                {successEventMessage}
            </p>
        </div>
    ) : null
}

export default EventFormSuccessMessage

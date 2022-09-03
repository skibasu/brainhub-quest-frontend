import { render } from "@testing-library/react"
import { EventsContext } from "../../../hooks/use-event-context"
import EventFormSuccessMessage from "./EventFormSuccessMessage"

const rest = {
    errorSending: "",
    setErrorSending: () => false,

    setSuccessEventMessage: () => false,
    errorDownloading: "",
    setErrorDownloading: () => false,
    isDownloading: false,
    setIsDownloading: () => false,
    isSending: false,
    setIsSending: () => false,
    events: [],
    setEvents: () => false,
}

test("Succes message on the screen", () => {
    const { getByTestId } = render(
        <EventsContext.Provider
            value={{ ...rest, successEventMessage: "Event created." }}
        >
            <EventFormSuccessMessage />
        </EventsContext.Provider>
    )
    expect(getByTestId("event-form-success")).toBeInTheDocument()
})

test("Succes message is not on the screen", () => {
    const { queryByTestId } = render(
        <EventsContext.Provider value={{ ...rest, successEventMessage: "" }}>
            <EventFormSuccessMessage />
        </EventsContext.Provider>
    )
    expect(queryByTestId("event-form-success")).not.toBeInTheDocument()
})

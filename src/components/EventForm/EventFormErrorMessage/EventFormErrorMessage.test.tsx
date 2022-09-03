import { render } from "@testing-library/react"
import { EventsContext } from "../../../hooks/use-event-context"
import EventErrorMessage from "./EventFormErrorMessage"

const rest = {
    setErrorSending: () => false,
    successEventMessage: "",
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

test("Error message on the screen", () => {
    const { getByTestId } = render(
        <EventsContext.Provider value={{ ...rest, errorSending: "Error" }}>
            <EventErrorMessage />
        </EventsContext.Provider>
    )
    expect(getByTestId("event-form-error")).toBeInTheDocument()
})

test("Error message is not on the screen", () => {
    const { queryByTestId } = render(
        <EventsContext.Provider value={{ ...rest, errorSending: "" }}>
            <EventErrorMessage />
        </EventsContext.Provider>
    )
    expect(queryByTestId("event-form-error")).not.toBeInTheDocument()
})

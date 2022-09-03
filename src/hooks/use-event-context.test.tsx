import { fireEvent, render, screen } from "@testing-library/react"
import { EventsContext, EventsProvider } from "./use-event-context"

test("EventsProvider set isSending to false", () => {
    const { getByText } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => <span>{`${value.isSending}`}</span>}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    expect(getByText("false")).toBeTruthy()
})

test("EventsProvider set isSending to true", () => {
    const { getByText } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => (
                    <>
                        <span>{`${value.isSending}`}</span>
                        <button onClick={() => value.setIsSending(true)}>
                            SetIsSending
                        </button>
                    </>
                )}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    fireEvent.click(getByText("SetIsSending"))
    expect(getByText("true")).toBeTruthy()
})
test("EventsProvider set isDownloading to false", () => {
    const { getByText } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => <span>{`${value.isDownloading}`}</span>}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    expect(getByText("false")).toBeTruthy()
})

test("EventsProvider set isDownloadingto true", () => {
    const { getByText } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => (
                    <>
                        <span>{`${value.isDownloading}`}</span>
                        <button onClick={() => value.setIsDownloading(true)}>
                            isDownloading
                        </button>
                    </>
                )}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    fireEvent.click(getByText("isDownloading"))
    expect(getByText("true")).toBeTruthy()
})

test("EventsProvider set errorSending to empty string", () => {
    const { getByTestId } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => (
                    <span data-testid="empty">{`${value.errorSending}`}</span>
                )}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    expect(getByTestId("empty")).toBeEmptyDOMElement()
})

test("EventsProvider set errorSending to any string", () => {
    const { getByText } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => (
                    <>
                        <span>{`${value.errorSending}`}</span>
                        <button onClick={() => value.setErrorSending("error")}>
                            setErrorSending
                        </button>
                    </>
                )}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    fireEvent.click(getByText("setErrorSending"))
    expect(getByText("error")).toBeTruthy()
})

test("EventsProvider set successEventMessage to empty string", () => {
    const { getByTestId } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => (
                    <span data-testid="empty">{`${value.successEventMessage}`}</span>
                )}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    expect(getByTestId("empty")).toBeEmptyDOMElement()
})

test("EventsProvider set successEventMessage to any string", () => {
    const { getByText } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => (
                    <>
                        <span>{`${value.successEventMessage}`}</span>
                        <button
                            onClick={() =>
                                value.setSuccessEventMessage("success")
                            }
                        >
                            successEventMessage
                        </button>
                    </>
                )}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    fireEvent.click(getByText("successEventMessage"))
    expect(getByText("success")).toBeTruthy()
})

test("EventsProvider set events to not empty array ", () => {
    const { getByTestId, getByText } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => (
                    <>
                        <span data-testid="empty">{`${value.events.length}`}</span>
                        <button
                            onClick={() =>
                                value.setEvents([
                                    {
                                        _id: "6311466095b4b500defcb505",
                                        email: "malpa@we.pl",
                                        name: "asss.3",
                                        date: "2022-10-29T22:00:00.000Z",
                                        createdAt: "2022-09-01T23:55:12.456Z",
                                        updatedAt: "2022-09-01T23:55:12.456Z",
                                    },
                                ])
                            }
                        >
                            setEvents
                        </button>
                    </>
                )}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    fireEvent.click(getByText("setEvents"))
    expect(getByText("1")).toBeTruthy()
})

test("EventsProvider set events  to empty array", () => {
    const { getByTestId, getByText } = render(
        <EventsProvider>
            <EventsContext.Consumer>
                {(value) => (
                    <span data-testid="fully">{`${value.events.length}`}</span>
                )}
            </EventsContext.Consumer>
        </EventsProvider>
    )
    fireEvent.click(getByTestId("fully"))
    expect(getByText("0")).toBeTruthy()
})

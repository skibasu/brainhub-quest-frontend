import React, { createContext, useContext, useState, Dispatch } from "react"
import { IEvent } from "../components/EventsList/EventsList"
type IProps = {
    errorSending: string
    setErrorSending: Dispatch<string>
    successEventMessage: string
    setSuccessEventMessage: Dispatch<string>
    errorDownloading: string
    setErrorDownloading: Dispatch<string>
    isDownloading: boolean
    setIsDownloading: Dispatch<boolean>
    isSending: boolean
    setIsSending: Dispatch<boolean>
    events: IEvent[]
    setEvents: Dispatch<IEvent[]>
}
type TStatusModalContext = {
    children?: React.ReactNode
}
const EventsModalContext = createContext<IProps>({} as IProps)

const EventsModalProvider: React.FC<TStatusModalContext> = ({ children }) => {
    const [isSending, setIsSending] = useState<boolean>(false)
    const [errorSending, setErrorSending] = useState<string>("")
    const [isDownloading, setIsDownloading] = useState<boolean>(false)
    const [errorDownloading, setErrorDownloading] = useState<string>("")
    const [events, setEvents] = useState<IEvent[]>([])

    const [successEventMessage, setSuccessEventMessage] = useState<string>("")

    return (
        <EventsModalContext.Provider
            value={{
                isSending,
                setIsSending,
                isDownloading,
                setIsDownloading,
                events,
                setEvents,
                errorSending,
                setErrorSending,
                successEventMessage,
                setSuccessEventMessage,
                errorDownloading,
                setErrorDownloading,
            }}
        >
            {children}
        </EventsModalContext.Provider>
    )
}

const useEventsContext = () => useContext(EventsModalContext)

export { EventsModalProvider, useEventsContext }

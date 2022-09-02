import axios from "../../axios"
import { ISingleEvent } from "../../components/EventsList/EventSingle/EventSingle"
// get all events

export const getEvents = async () => {
    try {
        const { data } = await axios.get("/events")
        return data
    } catch (error: any) {
        return { message: error.message, error: true }
    }
}

// post single event

export const postEvent = async (payload: ISingleEvent) => {
    try {
        const { data } = await axios.post("/event", payload)
        return data
    } catch (error: any) {
        return { message: error.message, error: true }
    }
}

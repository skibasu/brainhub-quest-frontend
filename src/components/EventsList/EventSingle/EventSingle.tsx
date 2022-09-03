import React from "react"
import "./EventSingle.scss"

export interface ISingleEvent {
    email: string
    name: string
    date: string
}
const SingleEvent: React.FC<ISingleEvent> = ({ email, name, date }) => {
    return (
        <article data-testid="single-event" className="event-single px-2 py-2">
            <div className="event-single__inner rounded border border-secondary px-2 py-2 ">
                <h3>{name}</h3>
                <p>Event date : {new Date(date).toLocaleDateString("en-US")}</p>
                <p>Organiser : {email}</p>
            </div>
        </article>
    )
}

export default SingleEvent

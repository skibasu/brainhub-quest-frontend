import React from "react"
import Button from "react-bootstrap/Button"
import { Puff } from "react-loader-spinner"
import EventFormSuccessMessage from "../EventFormSuccessMessage/EventFormSuccessMessage"
import EventFormErrorMessage from "../EventFormErrorMessage/EventFormErrorMessage"
import "./EventButtonSpinner.scss"

interface IButtonSpinner {
    isLoading: boolean
}
const Buttonspinner: React.FC<IButtonSpinner> = ({ isLoading }) => {
    return (
        <div className="event-button-spinner">
            <Button
                className="w-100 d-block mt-5 position-relative event-button-spinner__button"
                variant="success"
                type="submit"
                disabled={isLoading}
            >
                Submit
                {isLoading ? (
                    <Puff
                        height="22"
                        width="22"
                        radius={1}
                        color="#FFFFFF"
                        ariaLabel="puff-loading"
                        wrapperClass="event-button-spinner__spinner d-flex justify-content-center spinner position-absolute"
                        visible={true}
                    />
                ) : null}
            </Button>
            <EventFormErrorMessage />
            <EventFormSuccessMessage />
        </div>
    )
}

export default Buttonspinner

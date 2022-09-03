import React from "react"
import "./EventInputError.scss"

interface IInputError {
    message?: string
}
const InputError = ({ message }: IInputError): JSX.Element | null => {
    if (!message) return null
    return (
        <p
            className="text-left text-danger pt-2 event-input-error m-0"
            data-testid="input-error"
        >
            {message}
        </p>
    )
}

export default InputError

import React from "react"
import { Puff } from "react-loader-spinner"
import "./Spinner.scss"

interface ISpinner {
    isLoading: boolean
}
const Spinner = ({ isLoading }: ISpinner) => {
    if (isLoading) {
        return (
            <div
                className="spinner position-relative w-100"
                data-testid="spinner-large"
            >
                <Puff
                    height="34"
                    width="34"
                    radius={1}
                    color="#198754"
                    ariaLabel="puff-loading-2"
                    wrapperClass="spinner__spinner d-flex justify-content-center spinner position-absolute"
                    visible={true}
                />
            </div>
        )
    } else {
        return null
    }
}

export default Spinner

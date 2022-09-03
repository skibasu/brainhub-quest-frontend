import { render, screen } from "@testing-library/react"
import EventButtonSpinner from "./EventButonSpinner"

test("Event susbit button is on the screen without spinner", () => {
    render(<EventButtonSpinner isLoading={false} />)
    const button = screen.getByTestId("button-submit")

    expect(button).toBeInTheDocument()
    expect(screen.queryAllByTestId("puff").length).toBeLessThan(1)
})

test("Event submit button on the screen with a spinner", () => {
    render(<EventButtonSpinner isLoading={true} />)
    const button = screen.getByTestId("button-submit")
    const spinner = screen.getByTestId("puff")

    expect(button).toBeInTheDocument()
    expect(spinner).toBeInTheDocument()
})

import { render } from "@testing-library/react"
import EvenentInputError from "./EventInputError"

test("Input error text is on the page", () => {
    const { getByText } = render(<EvenentInputError message="Error" />)
    expect(getByText("Error")).toBeInTheDocument()
})

test("Input error text is not on the page", () => {
    const { queryByText } = render(<EvenentInputError message="" />)
    expect(queryByText("Error")).not.toBeInTheDocument()
})

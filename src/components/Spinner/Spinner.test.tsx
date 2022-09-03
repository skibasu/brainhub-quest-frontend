import { render } from "@testing-library/react"
import Spinner from "./Spinner"

test("Input error text is on the page", () => {
    const { getByTestId } = render(<Spinner isLoading={true} />)
    expect(getByTestId("spinner-large")).toBeInTheDocument()
})

test("Input error text is not on the page", () => {
    const { queryByTestId } = render(<Spinner isLoading={false} />)
    expect(queryByTestId("spinner-large")).not.toBeInTheDocument()
})

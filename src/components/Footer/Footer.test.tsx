import { render, screen } from "@testing-library/react"
import Footer from "../Footer/Footer"

test("Header should be on the screen and have Welcome title and description message", () => {
    const { getByTestId } = render(<Footer />)
    expect(getByTestId("footer")).toBeInTheDocument()
})

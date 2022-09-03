import { render, screen } from "@testing-library/react"
import Header from "../Header/Header"

test("Header should be on the screen and have Welcome title and description message", () => {
    const { getByText } = render(<Header />)
    expect(getByText(/Welcome/i)).toBeInTheDocument()
    expect(getByText(/Feel free to send a new event/i)).toBeInTheDocument()
})

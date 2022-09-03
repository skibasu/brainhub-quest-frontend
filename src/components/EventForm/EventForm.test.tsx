import React from "react"
import { render, screen, fireEvent, act, cleanup } from "@testing-library/react"
import EventForm from "./EventForm"

const mockSendEvent = jest.fn((name, date, email) => {
    return Promise.resolve({ name, date, email })
})

beforeEach(async () => {
    await render(<EventForm />)
})
afterEach(() => cleanup)

test("All element are om the page", async () => {
    const labelEmail = screen.getByText(/Email address/i)
    const labelName = screen.getByText(/Event Name/i)
    const labelDate = screen.getByText(/Event Date/i)

    const inputDate = screen.getByTestId("time")
    const inputName = screen.getByTestId("name")
    const inputEmail = screen.getByTestId("email")

    const button = screen.getByTestId("button-submit")

    expect(inputEmail).toBeInTheDocument()
    expect(inputDate).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
    expect(await screen.queryByTestId("puff")).toBe(null)
    expect(labelEmail).toBeInTheDocument()
    expect(labelName).toBeInTheDocument()
    expect(labelDate).toBeInTheDocument()

    expect(await screen.queryAllByTestId("input-error")).toHaveLength(0)
    expect(await screen.queryAllByTestId("event-form-success")).toHaveLength(0)
    expect(await screen.queryAllByTestId("event-form-error")).toHaveLength(0)
})
test("All values are not valid", async () => {
    fireEvent.submit(screen.getByRole("button"))
    expect(await screen.findAllByTestId("input-error")).toHaveLength(3)
    expect(mockSendEvent).not.toBeCalled()
})

test("Email is empty", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
        target: {
            value: "",
        },
    })
    fireEvent.blur(screen.getByRole("textbox", { name: /email/i }))

    expect(await screen.findAllByTestId("input-error")).toHaveLength(1)
    expect(mockSendEvent).not.toBeCalled()
})

test("Email is not valid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
        target: {
            value: "test2wp.pl",
        },
    })
    fireEvent.blur(screen.getByRole("textbox", { name: /email/i }))

    expect(await screen.findAllByTestId("input-error")).toHaveLength(1)
    expect(mockSendEvent).not.toBeCalled()
})

test("Even name is empty", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /name/i }), {
        target: {
            value: "",
        },
    })
    fireEvent.blur(screen.getByRole("textbox", { name: /name/i }))

    expect(await screen.findAllByTestId("input-error")).toHaveLength(1)
    expect(mockSendEvent).not.toBeCalled()
})

test("Even name is to short", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /name/i }), {
        target: {
            value: "12",
        },
    })
    fireEvent.blur(screen.getByRole("textbox", { name: /name/i }))

    expect(await screen.findAllByTestId("input-error")).toHaveLength(1)
    expect(mockSendEvent).not.toBeCalled()
})

test("Event data is to invalid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /date/i }), {
        target: {
            value: "",
        },
    })
    fireEvent.blur(screen.getByRole("textbox", { name: /date/i }))

    expect(await screen.findAllByTestId("input-error")).toHaveLength(1)
    expect(mockSendEvent).not.toBeCalled()
})

test("All values are valid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /name/i }), {
        target: {
            value: "test",
        },
    })

    fireEvent.input(screen.getByRole("textbox", { name: /date/i }), {
        target: {
            value: "10/12/2022",
        },
    })

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
        target: {
            value: "test@test.com",
        },
    })

    expect(await screen.queryAllByTestId("input-error")).toHaveLength(0)

    expect(await screen.getByTestId("button-submit")).toBeInTheDocument()
    await act(async () => {
        fireEvent.click(screen.getByTestId("button-submit"))
    })
    // TO DO
    //  expect(mockSendEvent).toHaveBeenCalledWith(
    //      "test",
    //      "10/12/2022",
    //      "test@test.com"
    //  )
})

import React, { useEffect } from "react"
import { postEvent } from "../../utils/api/api"
import Form from "react-bootstrap/Form"
import { useForm, Controller } from "react-hook-form"
import ButtonSpinner from "./EventButtonSpinner/EventButonSpinner"
import { yupResolver } from "@hookform/resolvers/yup"
import EventSchema from "./EventSchema/EventSchema"
import EventInputError from "./EventInputError/EventInputError"
import { useEventsContext } from "../../hooks/use-event-context"
import TimeOut from "../../utils/timeout/timeout"
import "./EventForm.scss"

const timeHelper = new TimeOut(4000)

interface IFormInput {
    name: string
    email: string
    date: string
}
const EventForm: React.FC = () => {
    const {
        isSending,
        setIsSending,
        setErrorSending,
        setSuccessEventMessage,
        errorSending,
        successEventMessage,
    } = useEventsContext()
    const {
        control,
        handleSubmit,
        reset,
        formState: {
            errors: { date: dateError, name: nameError, email: emailError },
        },
    } = useForm<IFormInput>({
        mode: "onTouched",
        resolver: yupResolver(EventSchema),
        defaultValues: {
            name: "",
            email: "",
            date: "",
        },
    })
    const onSubmit = async (data: any) => {
        timeHelper.clearTime()
        setIsSending(true)
        setSuccessEventMessage("")
        setErrorSending("")
        const { message, error } = await postEvent(data)
        if (error) {
            setErrorSending(message)
            setIsSending(false)
        } else {
            setSuccessEventMessage(message)
            setIsSending(false)
            reset()
        }
    }
    useEffect(() => {
        timeHelper.setTime(() => {
            errorSending && setErrorSending("")
            successEventMessage && setSuccessEventMessage("")
        })
        return () => {
            timeHelper.clearTime()
        }
    }, [
        errorSending,
        successEventMessage,
        setErrorSending,
        setSuccessEventMessage,
    ])

    return (
        <Form
            data-testid="form"
            onSubmit={handleSubmit(onSubmit)}
            className="m-auto event-form px-4  py-5 rounded border border-secondary"
        >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                            data-testid="email"
                            isInvalid={!!emailError}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            ref={ref}
                            placeholder="Enter your email"
                        />
                    )}
                />
                <EventInputError message={emailError?.message} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Event Name</Form.Label>
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                            data-testid="name"
                            isInvalid={!!nameError}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            ref={ref}
                            placeholder="Enter event name"
                        />
                    )}
                />
                <EventInputError message={nameError?.message} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Event Date</Form.Label>
                <Controller
                    name="date"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                            type="date"
                            data-testid="time"
                            isInvalid={!!dateError}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            ref={ref}
                            placeholder="Enter event date"
                        />
                    )}
                />

                <EventInputError message={dateError?.message} />
            </Form.Group>
            <ButtonSpinner isLoading={isSending} />
        </Form>
    )
}

export default EventForm

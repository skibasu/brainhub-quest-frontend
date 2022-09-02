import * as yup from "yup"
import parse from "date-fns/parse"

const EventSchema = yup
    .object({
        name: yup
            .string()
            .min(
                3,
                ({ min }) => `Event name is to short : min ${min} characters.`
            )
            .required("Event name is required"),
        email: yup
            .string()
            .email("Email is invalid.")
            .required("Email is required."),
        date: yup
            .date()
            .transform(function (value, originalValue) {
                if (this.isType(value)) {
                    return value
                }
                const result = parse(originalValue, "dd.MM.yyyy", new Date())
                return result
            })
            .typeError("Date type is invalid.")
            .required(),
    })
    .required()

export default EventSchema

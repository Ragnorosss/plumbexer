import { ChangeEvent, useState } from 'react';

export const useFormValidation = (initialValues: any) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({ fullName: '', phone: '', email: '', text: '' });

    const validate = () => {
        let tempErrors = { ...errors };
        let isValid = true;

        if (values.fullName.trim() === "") {
            tempErrors.fullName = "Full name is required";
            isValid = false;
        } else {
            tempErrors.fullName = "";
        }

        if (!values.phone.match(/^\+?\d{10,15}$/)) {
            tempErrors.phone = "Phone number is invalid";
            isValid = false;
        } else {
            tempErrors.phone = "";
        }

        if (!values.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
            tempErrors.email = "Email is invalid";
            isValid = false;
        } else {
            tempErrors.email = "";
        }

        if (values.text.trim() === "") {
            tempErrors.text = "Message is required";
            isValid = false;
        } else {
            tempErrors.text = "";
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value });
    };

    return {
        handleChange,
        values,
        errors,
        validate
    };
};

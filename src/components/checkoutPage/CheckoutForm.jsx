import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cities from '../../data/cities.json'

const validationSchema = Yup.object({
    firstName: Yup.string()
        .required("First name is required"),
    lastName: Yup.string()
        .required("Last name is required"),
    city: Yup.string()
        .required("City is required"),
    email: Yup.string()
        .email("Please enter a valid e-mail")
        .required("E-mail is required"),
    address: Yup.string()
        .required("Address is required"),
    zipcode: Yup.string()
        .matches(/^\d{4,10}$/, "Please enter a valid zip code")
        .required("Zip code is required"),
    phone: Yup.string()
        .matches(/^\+?\d{10,15}$/, "Please enter a valid phone number")
        .required("Phone number is required"),
});


function CheckoutForm({ ref }) {

    const formikRef = useRef();

    useImperativeHandle(ref, () => ({
        submitForm: () => {
            if (formikRef.current) {
                formikRef.current.submitForm();
            }
        },
    }));

    return (
        <div className='md:w-auto w-full'>
            <h2 className="text-3xl font-semibold mb-4 md:text-start text-center">Billing details</h2>
            <Formik
                innerRef={formikRef}
                initialValues={{ firstName: "", lastName: "", city: "", email: "", address: "", zipcode: "", phone: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Form gönderildi:", values);
                    resetForm();
                }}
            >
                <Form className="space-y-4 w-full">
                    <div className="flex items-start gap-x-2 gap-y-0 flex-col md:flex-row">
                        <div className='w-full'>
                            <label htmlFor="firstName" className="block font-medium text-base mb-2">
                                First Name
                            </label>
                            <Field
                                name="firstName"
                                type="text"
                                className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4"
                            />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-red-500 text-sm mt-2"
                            />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="lastName" className="block font-medium text-base mb-2">
                                Last Name
                            </label>
                            <Field
                                name="lastName"
                                type="text"
                                className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4"
                            />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-red-500 text-sm mt-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-base mb-2">
                            E-posta
                        </label>
                        <Field
                            name="email"
                            type="email"
                            className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="block font-medium text-base mb-2">
                            City
                        </label>
                        <Field
                            as="select"
                            name="city"
                            type="text"
                            className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4">
                            {Cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage
                            name="city"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block font-medium text-base mb-2">
                            Address
                        </label>
                        <Field
                            as="textarea"
                            name="address"
                            type="text"
                            className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4">

                        </Field>
                        <ErrorMessage
                            name="address"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="zipcode" className="block font-medium text-base mb-2">
                            Zip Code
                        </label>
                        <Field
                            name="zipcode"
                            type="text"
                            className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4"
                        />
                        <ErrorMessage
                            name="zipcode"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block font-medium text-base mb-2">
                            Phone
                        </label>
                        <Field
                            name="phone"
                            type="text"
                            className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4"
                            placeholder="+905xxxxxxxxx"
                        />
                        <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                        />
                    </div>


                </Form>
            </Formik>
        </div>
    );
}

export default CheckoutForm
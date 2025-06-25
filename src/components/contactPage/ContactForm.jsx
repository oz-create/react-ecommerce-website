import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cities from '../../data/cities.json'

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required"),
    email: Yup.string()
        .email("Please enter a valid e-mail")
        .required("E-mail is required"),
    message: Yup.string()
        .required("Message is required"),
});


function ContactForm({ ref }) {

    const formikRef = useRef();

    useImperativeHandle(ref, () => ({
        submitForm: () => {
            if (formikRef.current) {
                formikRef.current.submitForm();
            }
        },
    }));


    return (
        <div className='w-full lg:w-[50%] md:mt-0 mt-10'>
            <Formik
                innerRef={formikRef}
                initialValues={{ name: "", subject: "", email: "", message: ""  }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Form gönderildi:", values);
                    resetForm();
                }}
            >
                <Form className="space-y-4 w-full">
                   
                    <div className='w-full'>
                        <label htmlFor="name" className="block font-medium text-base mb-2">
                            Your name
                        </label>
                        <Field
                            name="name"
                            type="text"
                            className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4"
                        />
                        <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-base mb-2">
                            Email address
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
                   <div className='w-full'>
                        <label htmlFor="subject" className="block font-medium text-base mb-2">
                            Subject
                        </label>
                        <Field
                            name="namsubjecte"
                            type="text"
                            className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4"
                        />
                        <ErrorMessage
                            name="subject"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-medium text-base mb-2">
                            Message
                        </label>
                        <Field
                            as="textarea"
                            name="message"
                            type="text"
                            className="w-full border border-[#9F9F9F] rounded-lg px-3 py-4">

                        </Field>
                        <ErrorMessage
                            name="message"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                        />
                    </div>
                    <button type="submit" className="p-3 px-20 border-1 border-[#B88E2F] bg-[#B88E2F] text-white rounded-md text-base cursor-pointer hover:text-[#B88E2F] hover:bg-white transition w-full md:w-auto">
                        Submit
                    </button>
                   

                </Form>
            </Formik>
        </div>
    );
}

export default ContactForm
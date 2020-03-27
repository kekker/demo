import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { Link } from 'gatsby';

import RichTextInput from "./RichTextinput";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { phoneNumberRegex } from '../../utils/phoneNumberRegex';
import Button from "../Button/Button";
import Text from "../TextStyles/Text";
import {navigate} from "gatsby-link";
import {encode} from "../../utils/convertObjectToQueryString";

const initialValues = {
    email: '',
    fullName: '',
    phone: '',
    industry: '', //selected function
    comments: ''
};

const industryOptions = [
    { value: '', text: 'Select industry of your company' },
    { value: 'supply chain', text: 'Supply Chain' },
    { value: 'trade finance', text: 'Trade Finance' },
    { value: 'insurance', text: 'Insurance' },
    { value: 'other', text: 'Other' },
];

const industryValues  = industryOptions
    .reduce((prev, current) => {
        return [...prev, current.value];
    }, []);


const InvitationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .matches(phoneNumberRegex, 'Phone number is not valid')
        .required('Required'),
    industry: Yup.string()
        .oneOf(
            industryValues,
            'Please select one of specified industry options'
        ),
    comments: Yup.string()
        .max(300, 'Too Long!'),
});

const handleSubmit = values => {
    try {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "Invitation Form",
                ...values,
            }),
        })
            .then(() => navigate("/"))
            .catch(error => alert(error));
    } catch (error) {
        console.log(error);
    }


    // try{
    //     const response = fetch("/.netlify/functions/submission-created", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: encode({
    //             "form-name": "Invitation Form",
    //             ...values,
    //         })
    //     });
    //
    //     console.log('Received Responce from function Submission-Created', response)
    //
    // } catch(e){
    //     console.log(e);
    // }
};


const InvitationForm  = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={InvitationSchema}
            onSubmit={handleSubmit}
        >
            { formik => (
                <Form
                    name="Invitation Form"
                    style={{ marginRight: '2em'}}
                    method="post"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                >
                    <input type="hidden" name="bot-field" />
                    <TextInput
                        label='Your Email'
                        name='email'
                        type='email'
                        placeholder=''
                        isRequired
                    />
                    <TextInput
                        label='Full Name'
                        name='fullName'
                        type='text'
                        placeholder=''
                        isRequired
                    />
                    <TextInput
                        label='Phone Number'
                        name='phone'
                        type='phone'
                        placeholder=''
                        isRequired
                    />
                    <SelectInput
                        label='Industry'
                        name='industry'
                        options={industryOptions}
                    />
                    <RichTextInput
                        label='Comments'
                        name='comments'
                        type='text'
                        placeholder='Enter comments (optional)'
                    />
                    <div data-netlify-recaptcha="true"></div>
                    <Text marginTop={4} marginBottom={4} tag='div' fontSize='small' color='textLightGrey'>
                        By submitting this form, you confirm that you have read and agree to our
                        {' '}
                        <Link to={'/'} title={'privacy policy'} style={{ textDecoration: 'none'}}>
                            <Text fontSize='small' color='textLightGrey' textDecoration='underline'>
                                privacy policy
                            </Text>
                        </Link>
                    </Text>
                    <div>
                        <Button
                            disabled={!(formik.isValid && formik.dirty)}
                            size='large'
                            title='Submit Request'
                            type='submit' />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default InvitationForm;

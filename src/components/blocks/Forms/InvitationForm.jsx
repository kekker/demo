import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'gatsby';

// import libphonenumber from 'google-libphonenumber';
import RichTextInput from '../../fragments/FormComponents/RichTextinput';
import SelectInput from '../../fragments/FormComponents/SelectInput';
import TextInput from '../../fragments/FormComponents/TextInput';
import Button from '../../fragments/Button/Button';
import Text from '../../fragments/TextStyles/Text';
import SuccessfulFormMessage from './FormMessages/SuccessfulFormMessage';
import ErrorFormMessage from './FormMessages/ErrorFormMessage';

// import { phoneNumberRegex } from '../../utils/phoneNumberRegex';
import { encode } from '../../../utils/convertObjectToQueryString';
import ContainerContent from '../../fragments/ContainerContent/ContainerContent';


const initialValues = {
  email: '',
  fullName: '',
  phone: '',
  occupation: '',
  comment: '',
};

const industryOptions = [
  { value: '', text: 'Select industry of your company' },
  { value: 'supply chain', text: 'Supply Chain' },
  { value: 'trade finance', text: 'Trade Finance' },
  { value: 'insurance', text: 'Insurance' },
  { value: 'other', text: 'Other' },
];

const industryValues = industryOptions.reduce(
  (prev, current) => [...prev, current.value],
  [],
);

// const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
//
// Yup.addMethod(Yup.string, 'phone', function () {
//   return this.test({
//     name: 'phone',
//     exclusive: true,
//     message: 'Must be a phone number',
//     test: value => {
//       try {
//         const phone = phoneUtil.parse(value);
//         return phoneUtil.isValidNumber(phone);
//       } catch (e) {
//         return false;
//       }
//     },
//   });
// });

const InvitationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    // .matches(phoneNumberRegex, 'Phone number is not valid')
    // .phone()
    .required('Required'),
  occupation: Yup.string().oneOf(
    industryValues,
    'Please select one of specified industry options',
  ),
  comment: Yup.string().max(300, 'Too Long!'),
});

class InvitationForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      loading: false,
      error: false,
      submitted: false,
      errorMessage: '',
    };
  }

  handleSubmit = values => {
    this.setState({ loading: true });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'Invitation Form',
        ...values,
      }),
    })
      .then(() => {
        console.log('Form Submitted ', values);
        this.setState({ loading: false, submitted: true });
        this.props.parentCallback();
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
          errorMessage: error.message,
        });
      })
      .finally(() => this.props.parentRef.current.scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      })
      );
  };

  render() {
    const {
      loading, error, submitted, errorMessage
    } = this.state;

    const formBlock = (
      <Formik
        initialValues={initialValues}
        validationSchema={InvitationSchema}
        onSubmit={this.handleSubmit}
      >
        {formik => (
          <Form
            name="Invitation Form"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            style={{ marginBottom: 0 }}
            innerRef={this.ref}
          >
            <input type="hidden" name="bot-field" />
            <TextInput
              label="Your Email"
              name="email"
              type="email"
              placeholder=""
              isRequired
            />
            <TextInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder=""
              isRequired
            />
            <TextInput
              label="Phone Number"
              name="phone"
              type="phone"
              placeholder=""
              isRequired
            />
            <SelectInput
              label="Industry"
              name="occupation"
              options={industryOptions}
            />
            <RichTextInput
              maxlength={300}
              label="Comments"
              name="comment"
              type="text"
              placeholder="Enter comments (optional)"
            />
            <Text
              marginTop={3}
              marginBottom={3}
              tag="div"
              fontSize="small"
              color="textLightGrey"
            >
              By submitting this form, you confirm that you have read and
              agree to our
              {' '}
              <a
                href="/assets/Privacy_Policy.pdf"
                target="_blank"
                title="privacy policy"
                style={{ textDecoration: 'none' }}
              >
                <Text
                  fontSize="small"
                  color="textLightGrey"
                  textDecoration="underline"
                >
                  privacy policy
                </Text>
              </a>
              {' '}
              and
              {' '}
              <a
                href="/assets/Kekker_Terms_Of_Service.pdf"
                target="_blank"
                title="privacy policy"
                style={{ textDecoration: 'none' }}
              >
                <Text
                  fontSize="small"
                  color="textLightGrey"
                  textDecoration="underline"
                >
                  terms of service
                </Text>
              </a>
            </Text>
            <div>
              <Button
                disabled={loading}
                size="medium+"
                title={loading ? 'Loading...' : 'Submit'}
                type="submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    );

    // Display errors above form if any
    const errorMessageBlock = error
      ? <ErrorFormMessage errorMessage={errorMessage} />
      : '';

    // Show a success message, if form is submitted and no errors occurred
    const contentFormBlock = submitted
      ? <SuccessfulFormMessage />
      : (
        <>
          { errorMessageBlock }
          { formBlock }
        </>
      );


    return (
      <ContainerContent ml="0" mr="0" pl="0" pr="0" pt="0" ref={this.ref}>
        { contentFormBlock }
      </ContainerContent>
    );
  }
}

export default InvitationForm;

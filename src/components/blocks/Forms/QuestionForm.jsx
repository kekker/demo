import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import RichTextInput from '../../fragments/FormComponents/RichTextinput';
import SelectInput from '../../fragments/FormComponents/SelectInput';
import TextInput from '../../fragments/FormComponents/TextInput';
import Button from '../../fragments/Button/Button';
import Text from '../../fragments/TextStyles/Text';
import SuccessfulFormMessage from './FormMessages/SuccessfulFormMessage';
import ErrorFormMessage from './FormMessages/ErrorFormMessage';

import { encode } from '../../../utils/convertObjectToQueryString';
import ContainerContent from '../../fragments/ContainerContent/ContainerContent';
import PolicyText from '../../fragments/FormComponents/PolicyText';


const initialValues = {
  email: '',
  fullName: '',
  phone: '',
  subject: '',
  comment: '',
};

const subjectOptions = [
  { value: '', text: 'Select subject' },
  { value: 'api', text: 'API' },
  { value: 'sandbox', text: 'Sandbox' },
  { value: 'platform', text: 'Platform' },
  { value: 'other', text: 'Other' },
];

const subjectValues = subjectOptions.reduce(
  (prev, current) => [...prev, current.value],
  [],
);

const InvitationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  subject: Yup.string().oneOf(
    subjectValues,
    'Please select one of specified industry options',
  ),
  comment: Yup.string()
    .max(500, 'Too Long!')
    .required('Did you forget to ask a question?'),
});

class QuestionForm extends React.Component {
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
        'form-name': 'Question Form',
        ...values,
      }),
    })
      .then(() => {
        console.log('Form Submitted ', values);
        this.setState({ loading: false });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
          errorMessage: error.message,
        });
      });
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
            name="Question Form"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            style={{ marginBottom: 0 }}
            innerRef={this.ref}
          >
            <input type="hidden" name="bot-field" />
            <TextInput
              label="Name"
              name="fullName"
              type="text"
              placeholder=""
              isRequired
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder=""
              isRequired
            />
            <SelectInput
              label="Subject"
              name="subject"
              options={subjectOptions}
            />
            <RichTextInput
              maxlength={400}
              label="Your Question"
              name="comment"
              type="text"
              isRequired
            />

            <PolicyText />

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

export default QuestionForm;

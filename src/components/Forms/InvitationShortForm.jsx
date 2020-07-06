import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


import TextInput from './FormComponents/TextInput';
import Button from '../Button/Button';
import Text from '../TextStyles/Text';
import ErrorFormMessage from './FormMessages/ErrorFormMessage';

import { encode } from '../../utils/convertObjectToQueryString';
import ContainerContent from '../ContainerContent/ContainerContent';
import Flex from '../Flex';
import PolicyText from './FormComponents/PolicyText';


const initialValues = {
  name: '',
  email: '',
};

const InvitationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

class InvitationShortForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      loading: false,
      error: false,
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
        this.setState({ loading: false });
        this.props.parentCallback();
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
      loading, error, errorMessage
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
          >
            <input type="hidden" name="bot-field" />

            <Flex mb={4} mt={4} flexDirection={{ _: 'column', md: 'row' }}>
              <TextInput
                wrapperStyles={{
                  mr: { _: 0, md: '15px' },
                  mb: { _: '15px', md: 0 },
                  flexBasis: { _: '100%', md: '40%' }
                }}
                name="name"
                type="text"
                placeholder="Your Name"
                isRequired
              />
              <TextInput
                wrapperStyles={{
                  mr: { _: 0, md: '20px' },
                  mb: { _: '20px', md: 0 },
                  flexBasis: { _: '100%', md: '40%' }
                }}
                name="email"
                type="email"
                placeholder="Your Email"
                isRequired
              />
              <div style={{ flexBasis: { _: 0, md: '140px' }, flexShrink: 0 }}>
                <Button
                  disabled={loading}
                  size="medium+"
                  title={loading ? 'Loading...' : 'Get Access'}
                  type="submit"
                />
              </div>
            </Flex>

            <PolicyText />

          </Form>
        )}
      </Formik>
    );

    // Display errors above form if any
    const errorMessageBlock = error
      ? <ErrorFormMessage errorMessage={errorMessage} />
      : '';

    return (
      <ContainerContent ml="0" mr="0" pl="0" pr="0" pt="0" ref={this.ref}>
        <>
          { errorMessageBlock }
          { formBlock }
        </>
      </ContainerContent>
    );
  }
}

export default InvitationShortForm;

import React from 'react';
import Text from '../TextStyles/Text';


const PolicyText = () => (
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
);

export default PolicyText;

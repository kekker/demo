import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AnimatedDialog from '../../fragments/AnimatedDialog';
import SchemeNavigator from './SchemeNavigator';

import schemes from '../../../../content/docs/api/API-schemes';


const DialogWrapper = styled.div`
  display: flex;
  padding: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 10px;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  
  text-decoration: underline;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SchemeModal = ({ elementName }) => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  // elementName is a file name, no < > characters are allowed
  // element itself has a name filed, i.e PagedResponse<Client>
  const element = schemes[elementName];

  return (
    <>
      <StyledButton type="button" onClick={open}>{element.name}</StyledButton>
      <AnimatedDialog isOpen={showDialog} onDismiss={close}>

        <DialogWrapper>
          <div style={{ width: '100%' }}>
            <SchemeNavigator elementName={elementName} />
          </div>
        </DialogWrapper>

      </AnimatedDialog>
    </>
  );
};

SchemeModal.propTypes = {
  elementName: PropTypes.string.isRequired
};

export default SchemeModal;

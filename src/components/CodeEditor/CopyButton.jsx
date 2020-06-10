import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../TextStyles/Text';
import { Copy } from '../Icons/Icons';


const StyledCopyButton = styled.button`
  position: absolute;
  padding: 5px 10px;
  z-index: 1;
   
  top: 5px;
  right: 10px;
  border: none;
  
  ${({ disabled, theme }) => (disabled
    ? `border: 2px solid ${theme.button.disabledBgColor};
       background: ${theme.button.disabledBgColor};
       color: ${theme.button.disabledFontColor};
       cursor: default;
       `
    : `border: 2px solid ${theme.colors.primaryBrand};
       background: ${theme.colors.primaryBrand};
       &:hover {
         border: 2px solid ${theme.button.disabledBgColor};
         background: ${theme.button.disabledBgColor};
       }
   `)}
   
   transition: background 0.1s;
   border-radius: 2em;
`;

const CopyButton = ({ copyTextRef }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(copyTextRef.current.value).then(
        () => {
          console.log('copy success');
        },
        error => {
          console.log(error);
        }
      );
    } else {
      copyTextRef.current.select();
      console.log(document.execCommand('copy')); // true
      document.execCommand('copy');
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <StyledCopyButton
      type="button"
      onClick={handleCopyClick}
      title="Copy code to clipboard"
      disabled={copied}
    >
      { copied
        ? (
          <Text
            mr="0.5em"
            tag="span"
          >
            Copied!
          </Text>
        )
        : (
          <>
            <Text
              mr="0.5em"
              tag="span"
            >
              Copy
            </Text>
            <Copy />
          </>
        )}
    </StyledCopyButton>
  );
};

CopyButton.propTypes = {
  copyTextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
};

export default CopyButton;

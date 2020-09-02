import React, {
  useEffect
} from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CodeEditorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyLightGrey};
  overflow-x: auto;
 
  max-width: 688px;


  @media (max-width: 980px) {
        max-width: 90vw;
    }
  }

  padding: 0 0 20px 20px;

`;

const CodeBlock = ({ code, language }) => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <CodeEditorContainer>
      <pre>
        <code
          className={`language-${language}`}
        >
          {code}
        </code>
      </pre>
    </CodeEditorContainer>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.defaultProps = {
  language: 'bash'
};

export default CodeBlock;

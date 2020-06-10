import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAppState } from '../../appState/appState';
import CopyButton from './CopyButton';
import '../../../static/assets/prism.css';


const TextArea = styled.textarea`
  position: absolute;
  top: 5px;
  width: 250px;
  height: 30px;
  
  margin: 0;
  padding: 0 0 0 5px;
  
  overflow: auto;
  
  resize: none;
  rows: 1;
  background: #F2F2F2;
  outline-color: ${({ theme }) => theme.colors.primaryBrand};
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.textLightGrey};;
`;

const CodeEditorContainer = styled.div`
 background-color: #fdf6e3;
 overflow-x: auto;
 
 max-width: 688px;


  @media (max-width: 980px) {
        max-width: 90vw;
    }
  }

  padding: 20px 0 20px 20px;

`;

const TextAreaContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 250px;
  height: 25px;
`;

const CodeEditor = ({ code, language }) => {
  const [state, dispatch] = useAppState();

  const copyTextRef = useRef();
  const [copyText, setCopyText] = useState('');

  const valuesIndex = {
    CHANNEL: null,
    UID: null,
    AUTHORIZATION: null
  };

  const re = /{(\w+)}/;
  let copyCode = [];

  const wrapTags = (text, regex) => {
    const textArray = text.split(regex);
    copyCode = textArray;
    return textArray.map((elem, index) => {
      if (index % 2 === 0) {
        return (
          <code
            key={`codeTextBlock_${index}`}
            className={`language-${language}`}
          >
            {elem}
          </code>
        );
      }
      const actionType = `UPDATE_${elem}`;
      valuesIndex[elem] = index;
      return (
        <TextAreaContainer key={elem}>
          <TextArea
            rows={1}
            value={state[elem]}
            onChange={evt => dispatch({ type: actionType, value: evt.target.value })}
            placeholder={elem}
            name={elem}
          />
        </TextAreaContainer>
      );
    });
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    const returnCode = copyCode;
    if (valuesIndex.AUTHORIZATION) {
      returnCode[valuesIndex.AUTHORIZATION] = state.AUTHORIZATION ? state.AUTHORIZATION : 'AUTHORIZATION';
    }
    if (valuesIndex.CHANNEL) {
      returnCode[valuesIndex.CHANNEL] = state.CHANNEL ? state.CHANNEL : 'CHANNEL';
    }
    if (valuesIndex.UID) {
      returnCode[valuesIndex.UID] = state.UID ? state.UID : 'UID';
    }

    const returnStr = returnCode.join('').replace(/\s\s+|[\n\r]/g, ' ');
    setCopyText(returnStr);
  }, [state, valuesIndex]);

  return (
    <CodeEditorContainer>
      <div>
        {
          /* Logical shortcut for only displaying the
             button if the copy command exists */
          document && document.queryCommandSupported('copy')
          && (
            <CopyButton copyTextRef={copyTextRef} />
          )
        }
        <input type="hidden" ref={copyTextRef} value={copyText} />
        <pre>
          <code>
            { wrapTags(code, re) }
          </code>
        </pre>
      </div>
    </CodeEditorContainer>
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeEditor.defaultProps = {
  language: 'bash'
};

export default CodeEditor;

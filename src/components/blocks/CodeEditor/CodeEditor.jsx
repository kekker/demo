import React, {
  useEffect, useRef, useState
} from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAppState } from '../../../state/appState';
import { usePageState } from '../../../state/pageState';
import CopyButton from './CopyButton';


const TextArea = styled.textarea`
  position: absolute;
  top: 5px;
  width: 300px;
  height: ${({ heightMultiplier }) => heightMultiplier * 30}px;
  
  margin: 0;
  padding: 0 0 0 5px;
  
  overflow: auto;
  
  resize: none;
  font-family: 'Courier';
  font-weight: bold;
  letter-spacing: 0.04em;
  
  background: ${({ theme }) => theme.colors.bodyLightGrey};
  outline-color: ${({ theme }) => theme.colors.primaryBrand};
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.textLightGrey};
`;

const CodeEditorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyLightGrey};
  overflow-x: auto;
 
  max-width: 688px;


  @media (max-width: 980px) {
        max-width: 90vw;
    }
  }

  padding: 40px 0 20px 20px;

`;

const TextAreaContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 250px;
  height: 25px;
`;

const CodeEditor = ({ code, language, TabLabel }) => {
  const { state, dispatch } = useAppState();
  const { pageState, pageDispatch } = usePageState();

  const copyTextRef = useRef();
  const [copyText, setCopyText] = useState('');

  const valuesIndex = {
    CHANNEL: null,
    AUTHORIZATION: null,
    QUEUEID_Quorum: null,
    LOCALDEALID_Quorum: null,
    DEALID_Quorum: null,
    QUEUEID_Ethereum: null,
    LOCALDEALID_Ethereum: null,
    DEALID_Ethereum: null,
    QUEUEID_Hyperledger: null,
    LOCALDEALID_Hyperledger: null,
    DEALID_Hyperledger: null,
  };

  const re = /{(\w+)}/;
  let copyCode = [];

  const stateDispatcher = elem => {
    if (elem === 'CHANNEL' || elem === 'AUTHORIZATION') {
      const actionType = `UPDATE_${elem}`;
      return (evt) => dispatch({ type: actionType, value: evt.target.value });
    }
    if (elem === 'DEALID' || elem === 'QUEUEID' || elem === 'LOCALDEALID') {
      const actionType = `UPDATE_${elem}_${TabLabel}`;
      return (evt) => pageDispatch({ type: actionType, value: evt.target.value });
    }
    return null;
  };


  const valueDispatcher = elem => {
    if (elem === 'CHANNEL' || elem === 'AUTHORIZATION') {
      return state[elem];
    }
    if (elem === 'DEALID' || elem === 'QUEUEID' || elem === 'LOCALDEALID') {
      return pageState[`${elem}_${TabLabel}`];
    }
    return null;
  };

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
      let valueName = elem;
      let rowCount = 1;
      if (elem === 'DEALID' || elem === 'QUEUEID' || elem === 'LOCALDEALID') {
        valueName = `${elem}_${TabLabel}`;
      }
      if (elem === 'DEALID') {
        rowCount = 2;
      }
      valuesIndex[valueName] = index;
      return (
        <TextAreaContainer key={elem}>
          <TextArea
            rows={rowCount}
            heightMultiplier={rowCount}
            value={valueDispatcher(elem)}
            onChange={stateDispatcher(elem)}
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
    if (valuesIndex.QUEUEID_Quorum) {
      returnCode[valuesIndex.QUEUEID_Quorum] = pageState.QUEUEID_Quorum ? pageState.QUEUEID_Quorum : 'QUEUEID';
    }
    if (valuesIndex.DEALID_Quorum) {
      returnCode[valuesIndex.DEALID_Quorum] = pageState.DEALID_Quorum ? pageState.DEALID_Quorum : 'DEALID';
    }
    if (valuesIndex.LOCALDEALID_Quorum) {
      returnCode[valuesIndex.LOCALDEALID_Quorum] = pageState.LOCALDEALID_Quorum ? pageState.LOCALDEALID_Quorum : 'LOCALDEALID';
    }
    if (valuesIndex.QUEUEID_Hyperledger) {
      returnCode[valuesIndex.QUEUEID_Hyperledger] = pageState.QUEUEID_Hyperledger ? pageState.QUEUEID_Hyperledger : 'QUEUEID';
    }
    if (valuesIndex.DEALID_Hyperledger) {
      returnCode[valuesIndex.DEALID_Hyperledger] = pageState.DEALID_Hyperledger ? pageState.DEALID_Hyperledger : 'DEALID';
    }
    if (valuesIndex.LOCALDEALID_Hyperledger) {
      returnCode[valuesIndex.LOCALDEALID_Hyperledger] = pageState.LOCALDEALID_Hyperledger ? pageState.LOCALDEALID_Hyperledger : 'LOCALDEALID';
    }
    if (valuesIndex.QUEUEID_Ethereum) {
      returnCode[valuesIndex.QUEUEID_Ethereum] = pageState.QUEUEID_Ethereum ? pageState.QUEUEID_Ethereum : 'QUEUEID';
    }
    if (valuesIndex.DEALID_Ethereum) {
      returnCode[valuesIndex.DEALID_Ethereum] = pageState.DEALID_Ethereum ? pageState.DEALID_Ethereum : 'DEALID';
    }
    if (valuesIndex.LOCALDEALID_Ethereum) {
      returnCode[valuesIndex.LOCALDEALID_Ethereum] = pageState.LOCALDEALID_Ethereum ? pageState.LOCALDEALID_Ethereum : 'LOCALDEALID';
    }

    const returnStr = returnCode.join('').replace(/\s\s+|[\n\r]/g, ' ');
    setCopyText(returnStr);
  }, [state, valuesIndex]);

  return (
    <div style={{ position: 'relative' }}>
      <CodeEditorContainer>
        <CopyButton copyTextRef={copyTextRef} />
        <input type="hidden" ref={copyTextRef} value={copyText} />
        <pre>
          <code>
            { wrapTags(code, re) }
          </code>
        </pre>
      </CodeEditorContainer>
    </div>
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

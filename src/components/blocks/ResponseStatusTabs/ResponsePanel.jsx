import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Prism from 'prismjs';

import Text from '../../fragments/TextStyles/Text';
import SchemeModal from '../StructureScheme';


const PanelWrapper = styled.div`
  padding-top: 30px;
`;

const ResponsePanel = ({ responseStatus }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <PanelWrapper>
      {responseStatus.description && (
        <Text tag="p">{responseStatus.description}</Text>
      )}

      {responseStatus.headers && (
        <table>
          <thead>
            <tr>
              <th>Headers</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {responseStatus.headers.map(headerShape => (
              <tr>
                <td>{headerShape.header}</td>
                <td>{headerShape.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {responseStatus.scheme && (
        <table>
          <thead>
            <tr>
              <th>Content Type</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{responseStatus.scheme.contentType}</td>
              <td>
                {responseStatus.scheme.ref
                  ? (
                    <SchemeModal elementName={responseStatus.scheme.ref} />
                  ) : (
                    <>
                      {responseStatus.scheme.value}
                    </>
                  )}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {responseStatus.example && (
        <>
          <Text tag="p" mb={0} mt={4} fontWeight={800}>
            Example body:
          </Text>
          <pre>
            <code className="language-json">
              {responseStatus.example}
            </code>
          </pre>
        </>
      )}

    </PanelWrapper>
  );
};

ResponsePanel.propTypes = {
  responseStatus: PropTypes.shape({
    statusCode: PropTypes.number.isRequired,
    description: PropTypes.string,
    headers: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string,
        value: PropTypes.string
      })
    ),
    scheme: PropTypes.shape({
      contentType: PropTypes.string,
      value: PropTypes.string,
      ref: PropTypes.string
    }),
    example: PropTypes.string
  }).isRequired
};

export default ResponsePanel;

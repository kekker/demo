import React from 'react';
import styled from 'styled-components';
import SolutionSection from './SolutionSection';

const solutions = require('../../../../content/about/solutions.json');

const SolutionsWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]}px;
    
    & button:p:last-of-type {
        border: none;
        background: #000000;
    }
`;

const SolutionsList = () => (
  <SolutionsWrapper>
    {solutions.map(solutionSection => (
      <SolutionSection
        key={solutionSection.title}
        title={solutionSection.title}
        items={solutionSection.items}
      />
    ))}
  </SolutionsWrapper>
);

export default SolutionsList;

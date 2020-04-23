import React from "react";
import styled from 'styled-components';
import SolutionSection from "./SolutionSection";

const SolutionsWrapper = styled.div`
    margin-bottom: ${({theme}) => theme.space[6]}px;
    
    & button:p:last-of-type {
        border: none;
        background: #000000;
    }
`;

const SolutionsList = () => {
    const solutions = require("../../../content/about/solutions");

    return (
        <SolutionsWrapper>
            {solutions.map(solutionSection => (
                <SolutionSection
                    title={solutionSection.title}
                    items={solutionSection.items}
                />
            ))}
        </SolutionsWrapper>
    )
};

export default SolutionsList;

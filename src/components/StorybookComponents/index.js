import React from 'react';
import styled from 'styled-components';
import Theme from "../Theme";
import Heading from "../TextStyles/Heading";

export const Story = ({ children }) => (
    <div style={{ margin: '75px'}}>
        {children}
    </div>
);

const StyledStoryRow = styled.div`
    display: flex;
    align-items: center;
    
    margin-bottom: 75px;

    &::after {
        content: '';

        flex: 1;
    }

    > * + * {
        margin-left: 24px !important;
    }

    & + & {
        margin-top: 24px;
    }
`;

const StyledCheckboxWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    
    background-color: #f6f9fc;
    border: 2px solid #d4eeff;
    padding: 0 10px;
    border-radius: 20px;
    
    font-size: 14px;
`;

export const StoryCheckBox = ({ label, onChange }) => (
    <StyledCheckboxWrapper>
        <label htmlFor={label}>{label}</label>
        <input style={{ marginLeft: '10px'}} id={label} type='checkbox' onClick={onChange}/>
    </StyledCheckboxWrapper>
);

export const StoryRow = ({ heading, label, onChange, ...props }) => (
    <>
        { heading && (
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <Heading level={2} mb={2} mr={4} fontWeight={400}>
                    { heading }
                </Heading>
                { label && onChange && (
                    <StoryCheckBox label={label} onChange={onChange} />
                )}
            </div>
        )}
        <hr />
        <StyledStoryRow {...props} />
    </>
);

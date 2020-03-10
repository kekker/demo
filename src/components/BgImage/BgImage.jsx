import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Parent = styled.div`
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
`;

const StyledBgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  z-index: -1;
  background-color: #141414;
  height: ${({ height }) => height || 'auto'} !important;

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;';
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
}) => (
  <Parent bgColor={overlayColor}>
    <StyledBgImage
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
    />
    <Content className={className}>{children}</Content>
  </Parent>
);

BgImage.propTypes = {
  fluid: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

BgImage.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: 'transparent',
  className: null,
};

export default BgImage;

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { color, layout } from 'styled-system';

const Parent = styled.div`
  position: relative;

  ${color};
`;

const StyledBgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  z-index: -1;

  ${color};
  ${layout};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;';
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const BgImage = ({
  fluid, title, bg, children, ...props
}) => {
  return (
      <Parent bg={bg}>
        <StyledBgImage fluid={fluid} title={title} bg={bg} {...props} />
        <Content>{children}</Content>
      </Parent>
  );
};

BgImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
  ]),
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

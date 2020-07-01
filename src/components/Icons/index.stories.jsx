import React from 'react';
import styled from 'styled-components';

import { Story, StoryRow } from '../StorybookComponents';

import * as i from './Icons';

export default {
  title: 'Icons',
};

const icons = {
  social: [
    i.Facebook,
    i.GooglePlus,
    i.Linkedin,
    i.Skype,
    i.Twitter,
    i.Instagram,
  ],
  design: [
    i.AngleDown,
    i.AngleUp,
    i.Bars,
    i.Close,
  ]
};

const logo_icons = [
  'kekker_logo_black',
  'kekker_logo_white'
].map(icon => require(`../../../static/assets/${icon}.svg`));

const custom_icons = [
  'kekker_menu_bullet',
  'kekker_arrow',
  'kekker_arrow_2',
  'kekker_arrow_white',
  'kekker_close',
  'kekker_down',
].map(icon => require(`../../../static/assets/${icon}.svg`));

const StyledIcon = styled.img`
    height: 80px;
    width: 80px;
    margin-bottom: 0;
    
    background-color: ${({ isBg }) => (isBg ? '#f5f5f5' : '#ffffff')};
`;

const StyledLogoIcon = styled.img`
    height: 80px;
    width: 200px;
    margin-bottom: 0;
    
    background-color: ${({ isBg }) => (isBg ? '#b5b5b5' : '#ffffff')};
`;

export const AllIcons = () => {
  const [isBG, setIsBG] = React.useState(true);
  const changeBG = () => {
    setIsBG(!isBG);
  };
  const [isLogoBG, setIsLogoBG] = React.useState(true);
  const changeLogoBG = () => {
    setIsLogoBG(!isLogoBG);
  };
  return (
    <Story>
      <StoryRow heading="Svg design font-awesome icons">
        {icons.design.map(icon => (
          React.createElement(icon, { size: '3x' })
        ))}
      </StoryRow>
      <StoryRow heading="Svg social font-awesome icons">
        {icons.social.map(icon => (
          React.createElement(icon, { size: '3x' })
        ))}
      </StoryRow>
      <StoryRow
        label="Remove Background"
        onChange={changeBG}
        heading="Svg design custom icons"
      >
        { custom_icons.map(icon => (
          <StyledIcon isBg={isBG} src={icon} alt={icon} />
        ))}
      </StoryRow>
      <StoryRow
        label="Remove Background"
        onChange={changeLogoBG}
        heading="Svg design logo icons"
      >
        { logo_icons.map(icon => (
          <StyledLogoIcon isBg={isLogoBG} src={icon} alt={icon} />
        ))}
      </StoryRow>
    </Story>
  );
};

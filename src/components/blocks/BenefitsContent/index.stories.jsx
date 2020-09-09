import React from 'react';

import { Story, StoryRow } from '../../storybook';
import BenefitsProgressBar from './BenefitsProgressBar';
import BenefitsProblemBlock from './BenefitsProblemBlock';
import BenefitsSolutionBlock from './BenefitsSolutionBlock';
import ComparableEconomicsSetupBlock from './ComparableEconomicsSetupBlock';
import ComparableEconomicsSupportBlock from './ComparableEconomicsSupportBlock';

import clockIcon from '../../../../static/assets/kekker-benefits-clock-icon.svg';
import moneyIcon from '../../../../static/assets/kekker-benefits-money-icon.svg';


export default {
  title: 'Benefits Block',
};

export const BenefitsProgressBarStory = () => (
  <Story>
    <StoryRow style={{ maxWidth: '300px' }} heading="Fill 100%">
      <BenefitsProgressBar fill="100%" icon={clockIcon} price="$180" />
    </StoryRow>
    <StoryRow style={{ maxWidth: '300px' }} heading="Fill 80%">
      <BenefitsProgressBar fill="80%" icon={moneyIcon} price="$180" />
    </StoryRow>
    <StoryRow style={{ maxWidth: '300px' }} heading="Fill 40%">
      <BenefitsProgressBar fill="40%" icon={clockIcon} price="$180" />
    </StoryRow>
    <StoryRow style={{ maxWidth: '300px' }} heading="Fill 20%">
      <BenefitsProgressBar fill="20%" icon={moneyIcon} price="$180" />
    </StoryRow>
  </Story>
);

export const BenefitsProblemsBlockStory = () => (
  <Story>
    <StoryRow style={{ maxWidth: '800px' }} heading="800px width">
      <BenefitsProblemBlock />
    </StoryRow>
    <StoryRow style={{ maxWidth: '400px' }} heading="400px width">
      <BenefitsProblemBlock />
    </StoryRow>
  </Story>
);

export const BenefitsSolutionBlockStory = () => (
  <Story>
    <StoryRow style={{ maxWidth: '800px' }} heading="800px width">
      <BenefitsSolutionBlock />
    </StoryRow>
    <StoryRow style={{ maxWidth: '400px' }} heading="400px width">
      <BenefitsSolutionBlock />
    </StoryRow>
  </Story>
);

export const ComparableEconomicsSetupStory = () => (
  <Story>
    <StoryRow style={{ maxWidth: '800px' }} heading="800px width">
      <ComparableEconomicsSetupBlock />
    </StoryRow>
  </Story>
);


export const ComparableEconomicsSupportStory = () => (
  <Story>
    <StoryRow style={{ maxWidth: '800px' }} heading="800px width">
      <ComparableEconomicsSupportBlock />
    </StoryRow>
  </Story>
);
import React from 'react';
import { Story } from '../../storybook';

import Accordion from './index';
import Text from '../../fragments/TextStyles/Text';

export default {
  title: 'Accordion',
};

export const AccordionStory = () => (
  <Story>
    <div style={{ maxWidth: '800px' }}>
      <Accordion title="Как пользоваться компонентом 'Аккордеон'?">
        <Text mb={6} tag="div" fontSize="medium">
          Настройте Lego Components с помощью вашей или дефолтной темы.
          Вы можете изменить цвета, типографику и многое другое.
          Для поддержки тем в IE11 необходимо использовать postcss-theme-fold плагин.
          Каждая тема состоит из нескольких частей.
          Ниже проиллюстрировано воздействие каждой из частей на компонент:
        </Text>
      </Accordion>

      <Accordion title="Как пользоваться компонентом 'Аккордеон'?">
        <Text mb={6} tag="div" fontSize="medium">
          Настройте Lego Components с помощью вашей или дефолтной темы.
          Вы можете изменить цвета, типографику и многое другое.
          Для поддержки тем в IE11 необходимо использовать postcss-theme-fold плагин.
          Каждая тема состоит из нескольких частей.
          Ниже проиллюстрировано воздействие каждой из частей на компонент:
        </Text>
      </Accordion>

      <Accordion title="Как пользоваться компонентом 'Аккордеон'?">
        <Text mb={6} tag="div" fontSize="medium">
          Настройте Lego Components с помощью вашей или дефолтной темы.
          Вы можете изменить цвета, типографику и многое другое.
          Для поддержки тем в IE11 необходимо использовать postcss-theme-fold плагин.
          Каждая тема состоит из нескольких частей.
          Ниже проиллюстрировано воздействие каждой из частей на компонент:
        </Text>
      </Accordion>
    </div>
  </Story>
);

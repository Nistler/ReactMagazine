import { addDecorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator, StyleDecorator, ThemeDecorator } from 'shared/config/storybook';

export const parameters = {
  actions: { arTypesRegex: '^on[A-Z].*' },
  controls: {
    matches: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);

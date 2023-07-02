import { Text } from 'shared/ui';
import 'app/styles/index.scss';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { TextTheme } from 'shared/ui/Text/Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title value',
  text: 'Text value',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title value',
  text: 'Text value',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title value',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text value',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title value',
  text: 'Text value',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title value',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Text value',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

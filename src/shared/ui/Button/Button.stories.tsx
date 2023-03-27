import { Button, ThemeButton } from 'shared/ui';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ThemeButton.CLEAR,
};

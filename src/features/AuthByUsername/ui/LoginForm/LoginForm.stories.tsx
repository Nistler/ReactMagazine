import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginForm } from './LoginForm';
import 'app/styles/index.scss';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

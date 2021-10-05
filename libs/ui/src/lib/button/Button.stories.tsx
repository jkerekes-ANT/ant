// Button.stories.js | Button.stories.jsx
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { variant:'primary', label: "Button label" };


export const Secondary = Template.bind({});
Secondary.args = { variant:'secondary', label: "Button label" };

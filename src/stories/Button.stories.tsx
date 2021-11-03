import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '..';
import { ButtonProps } from '../components/Button/Button.types';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'src/components/Button/Button.tsx',
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const primaryProps: ButtonProps = {
  type: 'primary',
  text: 'Primary Button',
  onClick: () => {
    console.log('PrimaryButton Callback!');
  },
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = primaryProps;

const secondaryProps: ButtonProps = {
  type: 'secondary',
  text: 'Secondary Button',
  onClick: () => {
    console.log('SecondaryButton Callback!');
  },
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = secondaryProps;

const errorProps: ButtonProps = {
  type: 'error',
  text: 'Error Button',
  onClick: () => {
    console.log('ErrorButton Callback!');
  },
};

export const ErrorButton = Template.bind({});
ErrorButton.args = errorProps;

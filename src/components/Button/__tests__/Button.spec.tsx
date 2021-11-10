/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import Button from '..';
import { ButtonProps } from '../Button.types';

test('Button', () => {
  const props: ButtonProps = {
    type: 'primary',
    text: 'Primary Button',
    onClick: () => {
      console.log('PrimaryButton Callback!');
    },
  };

  const { asFragment } = render(
    <Button
      type={props.type}
      text={props.text}
      onClick={props.onClick}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});

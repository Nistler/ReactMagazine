import type { FC } from 'react';
import { lazy } from 'react';
import type { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));

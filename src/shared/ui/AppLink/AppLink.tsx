import React from 'react';
import { classNames } from 'shared/lib';
import type { FC } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to, className, children, theme = AppLinkTheme.PRIMARY,
  } = props;

  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
    >
      {children}
    </Link>
  );
};

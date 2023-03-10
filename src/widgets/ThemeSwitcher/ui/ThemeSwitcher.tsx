import { classNames } from "shared/lib";
import cls from './ThemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/asssets/icons/theme-dark.svg'
import LightIcon from 'shared/asssets/icons/theme-light.svg'
import { Button, ThemeButton } from "shared/ui";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()


  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router/undex";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link className={'link'} to={'/'}>Главная</Link>
      <Link className={'link'} to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme}>Сменить тему</button>
      <AppRouter />
    </div>
  );
};

export default App;

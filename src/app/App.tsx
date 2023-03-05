import React from 'react';
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router/undex";
import { Navbar } from "widgets/Navbar/indext";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Сменить тему</button>
      <AppRouter />
    </div>
  );
};

export default App;

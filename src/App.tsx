import React, {Suspense, useContext, useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { CounterPageAsync } from "./pages/CounterPage/CounterPage.async";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link className={'link'} to={'/'}>Главная</Link>
      <Link className={'link'} to={'/about'}>О сайте</Link>
      <Link className={'link'} to={'/counter'}>Счётчик</Link>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />}/>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/counter'} element={<CounterPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

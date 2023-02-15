import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.scss'
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { CounterPageAsync } from "./pages/CounterPage/CounterPage.async";

const App = () => {
  return (
    <div className={'app'}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Link to={'/counter'}>Счётчик</Link>
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

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from '../pages/ContactPage/ContactPage';
import ContriesPage from '../pages/ContriesPage/ContriesPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import LogoutPage from '../pages/LogoutPage/LogoutPage';

interface IRouterProps {
  children: JSX.Element | JSX.Element[];
}
const RouterApp = (props: IRouterProps) => {
  return (
    <>
      <header className='App-header'>
        <BrowserRouter>
          {props.children}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contries' element={<ContriesPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </>
  );
};

export default RouterApp;

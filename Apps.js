import React, {useEffect, useRef, useState} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './styles/App.css';
import About from './pages/About';
import Posts from './pages/Posts';
import AppRouter from './components/UI/AppRouter';

function App() {
    return (
        <BrowserRouter>
          <Navbar/>
          <AppRouter />
        </BrowserRouter>
    )
}


export default App;


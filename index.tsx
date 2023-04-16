import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './homePage';
import NavBar from './navBar';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <NavBar brandName="MHVillage" contactPage="Contact" searchPage="Search" />
      <Home />
    </BrowserRouter>
  </StrictMode>
);

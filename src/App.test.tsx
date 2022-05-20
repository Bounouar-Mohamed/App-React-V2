import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'
import ErrorBoundary from "./Components/ErrorBoundaries"
import Inscription from './Pages/inscription';
import Profile from './Pages/profile';
import Connexion from './Pages/Connexion';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

describe("<App />", () => {
  test("devrait afficher un formulaire de connexion vide", async () => {
    render(
   <Router>
     <Connexion email={''} password={''} /> 
   </Router>,  );
});
});


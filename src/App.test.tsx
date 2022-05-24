import { render, screen } from '@testing-library/react';
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


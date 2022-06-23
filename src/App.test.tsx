import { render, screen } from '@testing-library/react';
import Connexion from './Pages/Connexion';
import ButtonSwitch from './Apploye/atoms/button-switch';
import Desciption from './Apploye/atoms/description';
import Footer from './Apploye/atoms/footer';
import CheckList from './Apploye/moleculs/checkList';
import UserProvider from './Contextes/UsersContexte'
import PasswordProvider from './Contextes/PasswordContexte';
import NavBar from './Navigation/NavigationBar';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

<<<<<<< HEAD



describe("<App />", () => {
=======
describe("Testing Login to forms", () => {
>>>>>>> 269bce89bda9e119de28adc4ba827f21facea7be
  test("devrait afficher un formulaire de connexion vide", async () => {
    render(
      <Router>
        <Connexion email={''} password={''} />
      </Router>);
  });
});

describe("Testing Registration to forms", () => {
  test("devrait afficher un formulaire d'inscription vide", async () => {
    render(
      <Router>
        <Inscription />
      </Router>);
  });
});

describe("Testing Switch", () => {
  test("devrait afficher un bouton Switch", async () => {
    render(
      <ButtonSwitch handleChange={undefined} />
    );
  });
});

describe("Testing Descritpion", () => {
  test("devrait afficher la description du site ", async () => {
    render(
      <Desciption />
    );
  });
});

describe("Testing Footer", () => {
  test("devrait afficher un message de prévention ", async () => {
    render(
      <Footer />
    );
  });
});

describe("Testing CheckList", () => {
  test("devrait afficher la liste des étapes à valider pour s'inscrire", async () => {
    render(
      <CheckList />
    );
  });
});

describe("Testing UserContexte", () => {
  test("devrait afficher les infos de l'utilisatuer ", async () => {
    render(
      <UserProvider />
    );
  });
});

describe("Testing PasswordContexte", () => {
  test("devrait contenir le mot de passe de l'utilisateur ", async () => {    //(Pour la Checklist)
    render(
      <PasswordProvider />
    );
  });
});

describe("Testing NavBar", () => {
  test("devrait afficher une NavBar ", async () => { 
    render(
      <NavBar />
    );
  });
});


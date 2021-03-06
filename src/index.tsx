import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import UserProvider from './Contextes/UsersContexte';
import { CookiesProvider } from "react-cookie";
import ErrorBoundary from "./Components/ErrorBoundaries"
import PasswordProvider from './Contextes/PasswordContexte';

import './Translation/i18n';


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <PasswordProvider>
        <CookiesProvider>
          <ErrorBoundary>

              <App />

          </ErrorBoundary>
        </CookiesProvider>
      </PasswordProvider>
    </UserProvider>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



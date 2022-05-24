import {
  BrowserRouter as
    Router,
  Routes,
  Route
} from "react-router-dom";
import UsersTable from './Pages/Users';
import Acceuil from './Pages/acceuil';
import Profile from "./Pages/profile"
import Navigation from "./Navbar/Navigation";
import Inscription from "./Pages/inscription";
import Connexion from './Pages/Connexion';

function App() {


  return (


    <div>

      <Navigation />

        <Routes>

          <Route path="/" element={<Acceuil />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/users" element={<UsersTable />} />
          <Route path="/connexion" element={<Connexion email={""} password={""} />} />


        </Routes>
    </div>



  )
}


export default App;


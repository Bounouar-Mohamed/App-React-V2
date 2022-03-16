import { BrowserRouter as
  Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import UsersTable from './pages/Users';
import Acceuil from './pages/acceuil';
import Profile from "./pages/profile"
import Navigation from "./Navbar/Navigation";


 function App () {

  return(

<Router>  
    <div> 

  <Navigation/>
    
    <Routes>

        <Route  path="/" element={<Acceuil />} />   
        <Route  path="/Profile" element={<Profile/>}/>
        <Route  path="/inscription" element={<Login />}/>
        <Route  path="/users" element={<UsersTable/>}/>
      
    
    </Routes>

    </div>
</Router>


)}
    
  
export default App;

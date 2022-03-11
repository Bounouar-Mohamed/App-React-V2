import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import UsersTable from '../pages/Users';
import Acceuil from '../pages/acceuil';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  Container  from "react-bootstrap/Container";
import Profile from "../pages/profile"
import LogoutIcon from '@mui/icons-material/Logout';


 const PublicNavs = () => {

  return(

    <Router>
      
    
    <Navbar bg="dark" variant="dark">

      <Container>
      <Navbar.Brand href="/">
            Amazon
      </Navbar.Brand>
      <Nav className="d-flex" >
      <Navbar.Brand href="/inscription">
        <LogoutIcon/>
      </Navbar.Brand>

      <NavDropdown
      title={<AccountCircleIcon/>}>       

         <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
         <NavDropdown.Item href="/connexion">Connexion</NavDropdown.Item>
         <NavDropdown.Item href="/inscription">Inscription</NavDropdown.Item>
         <NavDropdown.Item href="/users">Users</NavDropdown.Item>

      </NavDropdown>


     </Nav>
    </Container>
    </Navbar>

    
              
      <Routes>

        <Route  path="/" element={<Acceuil />}/>
        <Route  path="/Profile" element={<Profile/>}/>
        <Route  path="/inscription" element={<Login />}/>
        <Route  path="/users" element={<UsersTable/>}/>
     
      </Routes>


    </Router>

    
)}
export default PublicNavs;





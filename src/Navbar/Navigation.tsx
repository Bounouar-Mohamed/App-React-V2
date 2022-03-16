import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  Container  from "react-bootstrap/Container";
import LogoutIcon from '@mui/icons-material/Logout';



export default function Navigation () {


    return(


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
    
           <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
           <NavDropdown.Item href="/connexion">Connexion</NavDropdown.Item>
           <NavDropdown.Item href="/inscription">Inscription</NavDropdown.Item>
           <NavDropdown.Item href="/users">Users</NavDropdown.Item>
    
        </NavDropdown>
    
       </Nav>
     
      </Container>
      
      </Navbar>
    

    )
}

 
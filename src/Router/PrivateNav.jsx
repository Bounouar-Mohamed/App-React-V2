import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersTable from '../pages/Users';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  Container  from "react-bootstrap/Container";






const PrivateNav = () => {


    return(

        <Router>
          
        
        <Navbar bg="dark" variant="dark">
    
          <Container>
          <Navbar.Brand href="/">
                Amazon
          </Navbar.Brand>
    
          <Nav className="d-flex" >
     
      
    
          <NavDropdown
          title={<AccountCircleIcon/>}>       
    
       
             <NavDropdown.Item href="/users">Users</NavDropdown.Item>
    
          </NavDropdown>
    
    
         </Nav>
    
        </Container>
        </Navbar>
    
        
                  
          <Routes>
         
            <Route  path="/users" element={<UsersTable/>}/>
          </Routes>
    
    
        </Router>
    
        
    )


} 
export default PrivateNav;
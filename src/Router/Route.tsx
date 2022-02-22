import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import UsersTable from '../pages/Users';
import Acceuil from '../pages/acceuil';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import SvgIcon from '@mui/material/SvgIcon';
import LoginIcon from '@mui/icons-material/Login';

export default class Navs extends Component{
  render(){

  return(

    <Router>
      <div className='App'>
     
          

<Nav justify variant="tabs" >

<Nav.Item>
  <Nav.Link href="/"> <SvgIcon color="primary" >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
    
    
    </Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link href="/users">Users</Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link href="/inscription" >
  <LoginIcon/>
  </Nav.Link>
</Nav.Item>



</Nav>


    
        
<Routes>
<Route  path="/" element={<Acceuil />}/>
<Route  path="/inscription" element={<Login />}/>
<Route  path="/users" element={<UsersTable/>}/>
</Routes>

      </div>
    </Router>
  )
}}
//import { Button } from "react-bootstrap";
//import Image from "react-bootstrap/Image";

//import { Link } from "react-router-dom";
//function Nav() {
  //return (
    //<nav>
      //<Link to="/">
        //<Image src="/img/MyIT.png" alt="myit icon" width={155} rounded={true} />
      //</Link>
    //  <Link to="/blogs">
    //    <Button>部落格</Button>
    //  </Link>

   //   <a href="https://discord.gg/myit" target="__blank">
   //     <Button>加入discord</Button>
    //  </a>
    //  <a href="https://github.com/My-IT-discord/myit" target="__blank">
   //     <Button>github源代碼</Button>
    //  </a>
    //</nav>
 // );
//}
//export default Nav;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../style.css';

function BasicExample() {
  return (
    <Navbar bg="#000" expand="lg">
      <Container>
      <Navbar.Brand href="">
      <img
              alt=""
              src="https://myitblog.tk/pictures/MyIT.png"
              width="115"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="nav-links" href="/" target={'_blank'}>主頁</Nav.Link>
            <Nav.Link id="nav-links" href="/aboutus" target={'_blank'}>關於我們</Nav.Link>
            <Nav.Link id="nav-links" href="https://discord.gg/myit" target={'_blank'}>加入Discord</Nav.Link>
            <Nav.Link id="nav-links" href="https://github.com/My-IT-discord/myit_react" target={'_blank'}>Github原代碼</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BasicExample;
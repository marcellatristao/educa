import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="container">
            <Navbar expand="md">
                <Link to="/" className="link">
                    <NavbarBrand>
                        <span>EDUCA</span>
                    </NavbarBrand>
                </Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        {/* when is Logged */}
                                <Link to="/" className="link">
                                    <NavItem>
                                        <NavLink>Home</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/products" className="link">
                                    <NavItem>
                                        <NavLink>Disciplinas</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/add-product" className="link">
                                    <NavItem>
                                        <NavLink>Adicionar Disciplina</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/about" className="link">
                                    <NavItem>
                                        <NavLink>Sobre Nós</NavLink>
                                    </NavItem>
                                </Link>

                                <Link to="/signin" className="link">
                                    <NavItem>
                                        <NavLink>
                                            <img 
                                                height="64" 
                                                className="d-inline-block align-center"
                                                alt="">
                                            </img>Entrar
                                        </NavLink>
                                    </NavItem>
                                </Link>
                        }          
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
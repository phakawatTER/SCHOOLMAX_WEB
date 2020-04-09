import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import { GoSearch } from "react-icons/go"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Nav,
    Row, Col,
    Form,
    Button,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const SchoolMaxLogo = require("static/imgs/logos/SCHOOLMax-logo.png")
const searchIcon = require("static/imgs/icons/search-icon.png")

const TopNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={SchoolMaxLogo} className="img-responsive" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={{ flexDirection: "column" }}>
                    <Row>
                        <Col>
                            <InputGroup className="search-box">
                                <Input placeholder="" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText className="bg-primary" style={{ color: "white" }} bold>
                                        <GoSearch />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col>
                            <div className="select-language">
                                <span style={{ fontWeight: props.language == "en" ? "bold" : "normal" }}
                                    onClick={() => props.changeLanguage("en")}
                                >EN</span> | <span style={{ fontWeight: props.language == "th" ? "bold" : "normal" }}
                                    onClick={() => props.changeLanguage("th")}
                                >TH</span>
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink to="/home/" className="link nav-link" activeClassName="active-link">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/software/" className="link nav-link" activeClassName="active-link">SOFTWARE</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/product/" className="link nav-link" activeClassName="active-link">OTHER PRODUCTS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/service/" className="link nav-link" activeClassName="active-link">SERVICES</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact/" className="link nav-link" activeClassName="active-link">CONTACT</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default TopNavbar;
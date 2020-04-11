import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom"
import { GoSearch } from "react-icons/go"
import { CONTENT_TEXT } from "appdata"
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
    NavItem,
} from 'reactstrap';

const SchoolMaxLogo = require("static/imgs/logos/SCHOOLMax-logo.png")
const style = {
    navbar_toolbox: { flexDirection: "column", alignItems: "flex-end", },
}

const TopNavbar = (props) => {
    const { language } = props
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [searchText, setSearchText] = useState("");
    const [searchFound, setSearchFound] = useState(false);
    const history = useHistory()
    const toggle = () => setIsOpen(!isOpen);
    const search = () => {
        if (searchText === "") return history.push("/home")
        for (let [page, value] of Object.entries(CONTENT_TEXT)) {
            for (let [language, value] of Object.entries(CONTENT_TEXT[page])) {
                let pagedata = JSON.stringify(value).toLowerCase()
                if (pagedata.includes(searchText.toLowerCase())) {
                    return history.push(`/${page}?search=${searchText.toLowerCase()}`)
                }
            }
        }

        // does not find any matched result
        props.useModal(
            () => (<>
                <h3>
                    {
                        language == "th" ?
                            `ผลการค้นหา "${searchText}"`
                            :
                            `Search result for "${searchText}"`

                    }
                </h3>
                <p>
                    {language == "th" ?
                        `ไม่พบข้อมูลในระบบ"`
                        :
                        `No matched result found.`}
                </p>
            </>)
        )
    }


    return (
        <>
            <Navbar className={"container"} color="light" light expand="md" fixed={"top"} >
                <NavbarBrand onClick={() => history.push("/")}><img src={SchoolMaxLogo} className="img-responsive" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={style.navbar_toolbox}>
                    <Row>
                        <Col>
                            <InputGroup className="search-box">
                                <Input placeholder=""
                                    value={searchText}
                                    onChange={(e) => { setSearchText(e.target.value) }}
                                    onKeyDown={
                                        (e) => {
                                            if (e.key === 'Enter') {
                                                search()
                                            }
                                        }
                                    }
                                />
                                <InputGroupAddon addonType="append" onClick={search}>
                                    <InputGroupText className="bg-primary" style={{ color: "white", cursor: "pointer" }} bold>
                                        <GoSearch />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col>
                            <div className="select-language">
                                <span style={{ fontWeight: language == "en" ? "bold" : "normal" }}
                                    onClick={() => props.changeLanguage("en")}
                                >EN</span> | <span style={{ fontWeight: language == "th" ? "bold" : "normal" }}
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
        </>
    );
}

export default TopNavbar;
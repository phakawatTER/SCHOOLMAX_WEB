import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom"
import { GoSearch } from "react-icons/go"
import { CONTENT_TEXT, NAVBAR_TEXT } from "appdata"
import classNames from "classnames"
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

    const linkClassNames = classNames(
        "link",
        "nav-link",
        { "content-text-md": language == "th" },
        { "letter-spacing": language == "th" }
    )


    return (
        <>
            <Navbar className={"container"} color="white" light expand="md" fixed={"top"}>
                <NavbarBrand onClick={() => history.push("/")}><img src={SchoolMaxLogo} className="img-responsive" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={style.navbar_toolbox}>
                    <Row>

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
                                <NavLink onClick={() => { setIsOpen(false) }} to="/home/" className={linkClassNames} activeClassName="active-link">{NAVBAR_TEXT[language].home}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { setIsOpen(false) }} to="/software/" className={linkClassNames} activeClassName="active-link">{NAVBAR_TEXT[language].software}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { setIsOpen(false) }} to="/product/" className={linkClassNames} activeClassName="active-link">{NAVBAR_TEXT[language].otherproduct}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { setIsOpen(false) }} to="/service/" className={linkClassNames} activeClassName="active-link">{NAVBAR_TEXT[language].service}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { setIsOpen(false) }} to="/contact/" className={linkClassNames} activeClassName="active-link">{NAVBAR_TEXT[language].contact}</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Collapse>
            </Navbar>
        </>
    );
}

export default TopNavbar;
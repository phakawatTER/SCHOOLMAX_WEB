/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
import FacebookLogo from "static/imgs/icons/facebook-icon.png"
import { NavLink } from "react-router-dom"
// used for making the prop types of this component
import PropTypes from "prop-types";

const social_link = "http://www.facebook.com"

class Footer extends React.Component {

    render() {
        return (
            <footer className="page-footer font-small blue pt-2 container">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-6 mt-md-0 mt-3 ">
                            <div className="footer-social-logo">
                                <img src={FacebookLogo} onClick={() => { window.open(social_link) }} />
                                {/* <h6 className="text-uppercase m-0">Social Media</h6> */}
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="footer-copyright text-left py-3 d-block d-sm-none font-weight-bold">©2020 SCHOOLMax. ALL RIGHTS RESERVED</div>
                            <div className="footer-copyright text-right py-3 d-none d-sm-block font-weight-bold">©2020 SCHOOLMax. ALL RIGHTS RESERVED</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
};

export default Footer;

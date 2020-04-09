/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
import FacebookLogo from "static/imgs/icons/facebook-icon.png"
import { NavLink } from "react-router-dom"
// used for making the prop types of this component
import PropTypes from "prop-types";

const social_link = "www.facebook.com"

class Footer extends React.Component {

    render() {
        return (
            <footer class="page-footer font-small blue pt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3 ">
                            <div className="footer-social-logo">
                                <img src={FacebookLogo} onClick={() => { window.open(social_link) }} />
                                <h5 class="text-uppercase">Social Media</h5>
                            </div>
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3">
                            <div class="footer-copyright text-right py-3">©2020 SCHOOLMax. ALL RIGHTS RESERVED
                </div>
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

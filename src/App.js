import React from 'react';
import TopNavbar from "./component/Navbar"
import Footer from "./component/Footer"
import './App.css';
import { Switch, Route, Redirect } from 'react-router';
import routes from "route.js"
import { Container } from "reactstrap"
import { animateScroll as scroll } from "react-scroll"
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
} from "reactstrap"

var route = ""

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      language: "th",
      show_modal: false
    }
  }
  changeLanguage = (language) => {
    this.setState({ language })
  }

  getRoute = () => {
    return routes.map(route => {
      let { language } = this.state
      const { path, component } = route
      const Element = React.cloneElement(component, { language, useModal: this.useModal.bind(this) })
      return <Route path={path} render={() => Element} />
    })
  }

  useModal = (modal_body) => {
    this.setState({ modal_body, show_modal: true })
  }

  render() {
    const { language, container_class, modal_body } = this.state
    const modal = () => {
      return (
        <Modal
          isOpen={this.state.show_modal}
          toggle={() => this.setState({ show_modal: false })}
          onClosed={this.onModalCloseHandler}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <ModalBody>
            {modal_body ? modal_body() : null}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => this.setState({ show_modal: false })} >{language == "th" ? "ปิด" : "Close"}</Button>
          </ModalFooter>
        </Modal>)
    }
    return (
      <>
        {modal()}
        <div
          className={
            "wrapper wrapper-full-page"
          }
          ref="fullPages" style={{ paddingTop: 70 }}>
          <TopNavbar changeLanguage={this.changeLanguage} language={language} useModal={this.useModal.bind(this)} />
          <Switch>
            {this.getRoute()}
            <Redirect from="/" to="/home" />
          </Switch>

        </div>
        <Footer />
      </>
    );
  }
}

export default App;

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
      language: localStorage.getItem("language") || "th",
      show_modal: false
    }
  }
  changeLanguage = (language) => {
    this.setState({ language })
  }

  componentDidMount() {
    localStorage.setItem("language", this.state.language)
    this.changeTitle()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.language !== this.state.language) {
      this.changeTitle()
    }
  }

  changeTitle = () => {
    localStorage.setItem("language", this.state.language)
    if (this.state.language == "th") {
      document.title = "เพื่อการศึกษาที่ดีขึ้นไม่รู้จบ"
    } else {
      document.title = "For Endless Improvement in Education"
    }
  }
  getRoute = () => {
    return routes.map(route => {
      let { language } = this.state
      const { path, component } = route
      const Element = React.cloneElement(component, { language, useModal: this.useModal.bind(this), toggleModal: this.toggleModal.bind(this) })
      return <Route path={path} render={() => Element} />
    })
  }

  useModal = (modal_body, custom_modal_style) => {
    this.setState({ modal_body, show_modal: true })
  }

  toggleModal = () => {
    this.setState({ show_modal: !this.state.show_modal })
  }

  render() {
    const { language, container_class, modal_body, custom_modal_style } = this.state
    const modal = () => {
      return (
        <Modal
          style={custom_modal_style}
          isOpen={this.state.show_modal}
          toggle={() => this.setState({ show_modal: false })}
          onClosed={this.onModalCloseHandler}
          aria-labelledby="contained-modal-title-vcenter"
        >
          {modal_body ? modal_body() : null}
        </Modal>)
    }
    return (
      <>
        {modal()}
        <div
          className={
            "wrapper wrapper-full-page"
          }>
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

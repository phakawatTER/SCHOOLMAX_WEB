import React from 'react';
import logo from './logo.svg';
import TopNavbar from "./component/Navbar"
import Footer from "./component/Footer"
import './App.css';
import { Switch, Route, Redirect } from 'react-router';
import routes from "route.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: "th"
    }
  }
  changeLanguage = (language) => {
    this.setState({ language })
  }

  getRoute = () => {
    return routes.map(route => {
      let { language } = this.state
      const { path, component } = route
      const Element = React.cloneElement(component, { language })
      return <Route path={path} render={() => Element} />
    })
  }


  render() {
    const { language } = this.state
    return (
      <>
        <TopNavbar changeLanguage={this.changeLanguage} language={language} />
        <div className="wrapper wrapper-full-page" ref="fullPages">
          <Switch>
            {this.getRoute()}
            <Redirect from="/" to="/home"/> 
          </Switch>
        </div>
        <Footer fluids />


      </>
    );
  }
}

export default App;

import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import About from './components/About'
import {withRouter, Redirect} from 'react-router-dom'


class App extends React.Component {

  state = {}

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  render() {
    return (
    <div className='App'>
      <NavBar/>
      <Switch>
        <Route path="/login" render={ this.renderForm } />
        <Route path="/register" render={ this.renderForm } />
        <Route path="/about" component={About}/>
        <Route path="/" exact component={Welcome} />
      </Switch>
    </div>
    )
  }
}

export default App;
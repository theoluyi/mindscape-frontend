import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import MeditationContainer from './MeditationComponents/MeditationContainer'
import SessionsTable from './SessionComponents/SessionsTable'
import About from './components/About'
import Form from './components/Form'

import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

class App extends React.Component {
  state = {
    user: {
      id: 0,
      username: "",
      sessions: []
    },
    token: ""
  }

  // helper method to wipe clean the app state slate
  clearAppState = () => {
    this.setState({
      user: {
        id: 0,
        username: "",
        sessions: []
      },
      token: ""
    })
  }

  componentDidMount(){
    if (localStorage.getItem('token')) {
      fetch('http://localhost:4000/persist', {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(r=> r.json())
      .then(this.handleResponse)
    }
  }
  
  // called by componentDidMount, handleLoginSubmit, handleRegisterSubmit to either:
  // A) set plant the user's token in localStorage and redirect to the meditate tab if user is valid or
  // B) show error message
  handleResponse = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/meditate")
      })
    }
    else { 
      alert(resp.error)
    }
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Log in form submitted")
    console.log(userInfo)

    fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r=>r.json())
    .then((resp) => {
      this.handleResponse(resp)
      console.log(resp)
    })
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form submitted")

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r=>r.json())
    .then(resp => {
      console.log("HMMMMMM")
      this.handleResponse(resp)
      console.log("OOKAAAY")
    })
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  createNewSession = (newSession) => {
    console.log("hello from inside App", newSession)
    let newSessionsArray = [...this.state.user.sessions, newSession]

    this.setState({
      user: {
        ...this.state.user,
        sessions: newSessionsArray
      }
    })
  }

  render() {
    // console.log(this.state)
    
    return (
    <div className='wrapper'>
    <header className='page-header'>
      <NavBar clearAppState={this.clearAppState} />
    </header>
      <main className='page-main'>
      <Switch>
        <Route path="/" exact> <Welcome username={this.state.user.username}/> </Route>
        <Route path="/meditate"> 
          <MeditationContainer
            userID={this.state.user.id}
            createNewSession={this.createNewSession}
            token={this.state.token}
          /> 
        </Route>
        <Route path="/sessions"> 
          <SessionsTable 
            user={this.state.user} // user may be an unnecessary prop at this point
            // I think I just added it accidentally while meaning to pass down the token

            token={this.state.token}
            createNewSession={this.createNewSession}
          /> 
        </Route>
        <Route path="/about" component={About}/>
        <Route path="/login" render={ this.renderForm } />
        <Route path="/register" render={ this.renderForm } />
      </Switch>
      </main>
      <footer className='page-footer'>
        Created by Theo Carney
      </footer>
    </div>
    )
  }
}

export default withRouter(App);
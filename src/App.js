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

  handleResponse = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/")
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
    // .then(console.log("hello world"))
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

  render() {
    return (
    <div className='App'>
      <NavBar/>
      <Switch>
        <Route path="/" exact> <Welcome username={this.state.user.username}/> </Route>
        <Route path="/meditate"> <MeditationContainer/> </Route>
        {/* <Route path="/sessions"> <SessionContainer user={this.state.user} /> </Route> */}
        <Route path="/sessions"> <SessionsTable user={this.state.user} /> </Route>
        <Route path="/about" component={About}/>
        <Route path="/login" render={ this.renderForm } />
        <Route path="/register" render={ this.renderForm } />
      </Switch>
    </div>
    )
  }
}

export default withRouter(App);
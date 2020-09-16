import React, { Component } from 'react';
import {
  // Button,
  Form as UiForm,
  Grid,
  Header,
  // Message,
  Segment,
} from 'semantic-ui-react'

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
      <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          {formName}
        </Header>
        <Segment>
      <UiForm onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <UiForm.Input 
          type="text" 
          autoComplete="off" 
          name="username" 
          value={username} 
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <UiForm.Input 
          type="password" 
          autoComplete="off" 
          name="password" 
          value={password} 
          onChange={this.handleChange}
        />
        
        <input 
          type="submit" 
          value={formName.split(' ')[0]}
          className='ui input'
        />

        {/* <UiForm.Button color="blue" fluid size="large">
          Hello
        </UiForm.Button> */}
        
      </UiForm>
      </Segment>
      </Grid.Column>
      </Grid>
    )
  }
}

export default Form;


// return (
//   <form onSubmit={this.handleSubmit}>
//     <h1>{formName}</h1>
//     <label htmlFor="username">Username:</label>
//     <input 
//       type="text" 
//       autoComplete="off" 
//       name="username" 
//       value={username} 
//       onChange={this.handleChange}
//     />
//     <label htmlFor="password">Password:</label>
//     <input 
//       type="password" 
//       autoComplete="off" 
//       name="password" 
//       value={password} 
//       onChange={this.handleChange}
//     />
//     <input type="submit" value="Submit"/>
//   </form>
// )

import React from 'react'
import {Form} from 'semantic-ui-react'


class TimerInput extends React.Component {

    render() {
      return (
          <Form.Input 
            size="small"
            type="number" 
            minutes={this.props.minutes}
            onChange={this.props.handleInput}
            placeholder="How many minutes?"
            required
          />
         );
       }
    }

export default TimerInput
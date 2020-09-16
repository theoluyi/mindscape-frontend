import React from 'react'
import {Form} from 'semantic-ui-react'


class TimerInput extends React.Component {

    render() {
      return (
          <Form.Input 
            className='timer-item timer-input'
            id='timer-input'
            size="medium"

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
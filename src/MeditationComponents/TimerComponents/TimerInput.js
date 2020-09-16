import React from 'react'
import {Form} from 'semantic-ui-react'


class TimerInput extends React.Component {

    render() {
      return (
       <div className='timer-input'>
          <Form.Input 
            type="number" 
            minutes={this.props.minutes}
            onChange={this.props.handleInput}
            placeholder="How many minutes?"
            required
          />
        </div>
         );
       }
    }

export default TimerInput
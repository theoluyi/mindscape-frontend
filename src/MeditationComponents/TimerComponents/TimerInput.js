import React from 'react'

class TimerInput extends React.Component {

    render() {
      return (
       <div>
          <input 
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
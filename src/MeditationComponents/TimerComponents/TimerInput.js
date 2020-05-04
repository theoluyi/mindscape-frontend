import React from 'react'

class TimerInput extends React.Component {

    render() {
      return (
       <div>
          <h3>Input your desired time</h3>
          <input 
            type="number" 
            minutes={this.props.minutes}
            onChange={this.props.handleInput}
            required
          />
        </div>
         );
       }
    }

export default TimerInput
import React from 'react'

class StartButton extends React.Component {
    state = {
        clicked: false
    }
    render() {
      return(
       <div>
        <button
            className="ui button"
            onClick={this.props.startCountDown}
            >
            {this.state.clicked? 'Pause' : 'Start'}
        </button>
      </div>
       );
   }
 } 

export default StartButton
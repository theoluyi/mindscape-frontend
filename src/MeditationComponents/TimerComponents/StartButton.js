import React from 'react'

class StartButton extends React.Component {
    handleClick = (event) => {
        if (this.props.timerStarted) {
            this.props.pauseCountDown()
        } 
        else {this.props.startCountDown()}

        this.props.toggleTimerStartState()
    }

    render() {
      return(
       <div>
        <button
            className="ui button"
            onClick={this.handleClick}
            >
            {this.props.timerStarted? 'Pause' : 'Start'}
        </button>
      </div>
       );
   }
 } 

export default StartButton
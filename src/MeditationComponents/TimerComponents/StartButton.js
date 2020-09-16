import React from 'react'
import {Button} from 'semantic-ui-react'

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
        <Button
            className="ui button timer-item"
            onClick={this.handleClick}
            >
            {this.props.timerStarted? 'Pause' : 'Start'}
        </Button>
       );
   }
 } 

export default StartButton
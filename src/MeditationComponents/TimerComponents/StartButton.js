import React from 'react'

class StartButton extends React.Component {
    state = {
        clicked: false
    }

    handleClick = (event) => {
        if (this.state.clicked) {
            this.props.pauseCountDown()
        } 
        else {this.props.startCountDown()}

        this.setState({clicked: !this.state.clicked})
    }

    render() {
      return(
       <div>
        <button
            className="ui button"
            onClick={this.handleClick}
            >
            {this.state.clicked? 'Pause' : 'Start'}
        </button>
      </div>
       );
   }
 } 

export default StartButton
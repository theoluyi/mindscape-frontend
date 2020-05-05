import React from 'react'

class ResetButton extends React.Component {
    // commenting this out because i don't think this needs state
    // state = {
    //     clicked: false
    // }

    handleClick = (event) => {
        console.log("reset button clicked")
        this.props.resetCountDown()
    }

    render() {
      return(
       <div>
        <button
            className="ui button"
            onClick={this.handleClick}
            >
            Reset
        </button>
      </div>
       );
   }
 } 

export default ResetButton
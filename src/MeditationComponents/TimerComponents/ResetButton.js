import React from 'react'

class ResetButton extends React.Component {
    state = {
        clicked: false
    }

    handleClick = (event) => {
        console.log("reset button clicked")
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
import React from 'react'
import {Button} from 'semantic-ui-react'


class ResetButton extends React.Component {
    // commenting this out because i don't think this needs state
    // state = {
    //     clicked: false
    // }

    handleClick = (event) => {
        this.props.resetCountDown()
    }

    render() {
      return(
        <Button
            className="ui button timer-item"
            onClick={this.handleClick}
            >
            Reset
        </Button>
       );
   }
 } 

export default ResetButton
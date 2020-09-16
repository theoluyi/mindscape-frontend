import React from 'react'

class Timer extends React.Component {

    
    render() {
       return (
        <div className='countdown timer-item'>
         <h5 style={{ fontSize: 30 }}> 
            {this.props.minutes}:{this.props.seconds}
         </h5>
        </div>
      );
    }
  }

export default Timer
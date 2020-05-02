import React from 'react'
import TimerInput from './TimerComponents/TimerInput'
import Timer from './TimerComponents/Timer'
import StartButton from './TimerComponents/StartButton'

class MeditationContainer extends React.Component {
    state = {
        seconds: '00',
        minutes: '10',
        timerStarted: false,
        // might want to add 'running: false' 
        // and simply have start button toggle that
        session: {
            id: null,
            start_time: "",
            end_time: null,
            duration: 0,
            landscape: null,
            summary: "",
            perceptions: []
        }
    }


    handleChange = event => {
        this.setState({
            minutes: event.target.value
        })
    }

    // ~ instance variable declarations
    secondsRemaining
    intervalHandle

    startCountDown = () => {
        // setInterval() just executes the first arg every 1000 milliseconds
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60;
    }

    // tick describes the behavior for the timer running down from a start time to 0:00
    tick = () => {
        // Math.floor() just rounds the number down
        let min = Math.floor(this.secondsRemaining / 60)
        let sec = this.secondsRemaining - (min * 60)

        this.setState({
            minutes: min,
            seconds: sec
        })

        if (sec < 10) {
            this.setState({
                seconds: '0' + this.state.seconds
            })
        }

        // if (min < 10) {
        //     this.setState({
        //         value: "0" + min,
        //         })
        // }

        if (min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
        }

        this.secondsRemaining--
    }

    render(){
        return(
            <>
                <h1>Meditate</h1>
                <TimerInput 
                    minutes={this.state.minutes}
                    handleChange={this.handleChange}
                />
                <Timer 
                    minutes={this.state.minutes} 
                    seconds={this.state.seconds}
                />
                <StartButton
                    startCountDown={this.startCountDown}
                />
            </>
        )
    }
}

export default MeditationContainer
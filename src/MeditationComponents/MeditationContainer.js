import React from 'react'
import TimerInput from './TimerComponents/TimerInput'
import Timer from './TimerComponents/Timer'
import StartButton from './TimerComponents/StartButton'
import ResetButton from './TimerComponents/ResetButton'

class MeditationContainer extends React.Component {
    state = {
        seconds: '00',
        minutes: '10',
        timerStarted: false,
        chosenDuration: '',
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

    handleInput = event => {
        this.setState({
            minutes: event.target.value
        })
    }

    toggleTimerStartState = () => {
        this.setState({timerStarted: !this.state.timerStarted})
    }
    
    pauseCountDown = () => {
        clearInterval(this.intervalHandle)
    }
    
    resetCountDown = () => {
        this.pauseCountDown()
        this.setState({
            seconds: '00',
            minutes: this.state.chosenDuration,
            timerStarted: false,
            chosenDuration: ''
        })
    }

    startCountDown = () => {
        let {minutes, seconds} = this.state
        if (!this.state.chosenDuration) { // !!!
            this.state.chosenDuration = this.state.minutes
        }        
        this.intervalHandle = setInterval(this.tick, 1000);
        this.secondsRemaining = (parseInt(minutes) * 60) + parseInt(seconds)
    }

    tick = () => {
        let min = Math.floor(this.secondsRemaining / 60)
        let sec = this.secondsRemaining - (min * 60)

        this.setState({ minutes: min, seconds: sec })

        if (sec < 10) {
            this.setState({
                seconds: '0' + this.state.seconds
            })
        }

        if (min === 0 && sec === 0) {
            clearInterval(this.intervalHandle);
            // this is the place to put the automatic sessionCreation invocation @dev 
        }

        this.secondsRemaining--
    }

    render() {
        return (
            <>
                <h1>Meditate</h1>
                <TimerInput 
                    minutes={this.state.minutes}
                    handleInput={this.handleInput}
                />
                <Timer 
                    minutes={this.state.minutes} 
                    seconds={this.state.seconds}
                />
                <StartButton
                    startCountDown={this.startCountDown}
                    pauseCountDown={this.pauseCountDown}
                    toggleTimerStartState={this.toggleTimerStartState}
                    timerStarted={this.state.timerStarted}
                />
                <br/>
                <ResetButton
                    resetCountDown={this.resetCountDown}
                />
            </>
        )
    }
}

export default MeditationContainer
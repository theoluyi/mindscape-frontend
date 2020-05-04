import React from 'react'
import TimerInput from './TimerComponents/TimerInput'
import Timer from './TimerComponents/Timer'
import StartButton from './TimerComponents/StartButton'
import ResetButton from './TimerComponents/ResetButton'


class MeditationContainer extends React.Component {
    state = {
        seconds: '00',
        minutes: '10',
        // timerStarted: false,
        chosenDuration: '',
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

    // ~ instance variable declarations (yeah basically, but JS doesn't use that terminology,
    // so it'd be interesting to know what JS calls this)
    // Variables accessible to Eric bc he's just opened an index.html in the browser
    // and index.js is just get referenced by script tag in index.html
    // so we have access to all those global variables... in React we're using npm start
    // and the context is kinda different 

    // we don't need these it seems
    // secondsRemaining
    // intervalHandle 

    startCountDown = () => {
        // setInterval() just executes the first arg every 1000 milliseconds
        // console.log(this)
        // this this is the class (Meditation Container)
        // actually I think it's more correct to say this is an instance of the class of MeditationContainer
        
        if (!this.state.chosenDuration) { // !!!
            this.state.chosenDuration = this.state.minutes
        }        

        this.intervalHandle = setInterval(this.tick, 1000);
        let minutes = this.state.minutes;
        let seconds = this.state.seconds
        this.secondsRemaining = (parseInt(minutes) * 60) + parseInt(seconds)
    }

    pauseCountDown = () => {
        console.log("pausing the countdown")
        clearInterval(this.intervalHandle)
    }

    // tick describes the behavior for the timer running down from a start time to 0:00
    tick = () => {
        // Math.floor() just rounds the number down

        let min = Math.floor(this.secondsRemaining / 60)
        // this is the culprit
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

        if (min === 0 && sec === 0) {
            clearInterval(this.intervalHandle);
            // this is the place to put the automatic sessionCreation invocation @dev 
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
                    pauseCountDown={this.pauseCountDown}
                />
                <br/>

                <ResetButton/>
                
            </>
        )
    }
}

export default MeditationContainer
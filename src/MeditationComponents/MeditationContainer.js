import React from 'react'
// import {useState} from 'react'
// import Modal from 'react-modal';
import TimerInput from './TimerComponents/TimerInput'
import Timer from './TimerComponents/Timer'
import StartButton from './TimerComponents/StartButton'
import ResetButton from './TimerComponents/ResetButton'
import {Button} from 'semantic-ui-react'
import SummaryModal from './SummaryModal'
import MeditationCreatorForm from '../MeditationComponents/MeditationCreatorForm'
import '../App.css'

class MeditationContainer extends React.Component {
    state = {
        seconds: '00',
        minutes: '10',
        timerStarted: false,
        chosenDuration: 0,
        show: false,
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

    showModal = () => { this.setState({ show: true})  }
    hideModal = () => { this.setState({ show: false}) }

    handleInput = event => { this.setState({ minutes: event.target.value }) }
    toggleTimerStartState = () => { this.setState({timerStarted: !this.state.timerStarted}) }
    pauseCountDown = () => { clearInterval(this.intervalHandle) }


    //-------------------------------------------------------------------------------------
    resetCountDown = () => {
        this.pauseCountDown()

        let newState = {
            ...this.state,
            seconds: '00',
            minutes: this.state.chosenDuration,
            timerStarted: false,
            chosenDuration: 0,
            session: {
                ...this.state.session,
                start_time: ''}
        }
        this.setState(newState)
    }




    setStateFunction = (state, props) => {
        const newState = {...this.state, chosenDuration: parseInt(this.state.minutes)}
        console.log(newState)
        return newState
    }

    // BUG IS IN HERE I'M SURE OF IT I THINK
    // setState is fucking my shit up
    startCountDown = () => {
        let {minutes, seconds} = this.state
        console.log("this.state.chosenDuration truthy/falsey: ", !!this.state.chosenDuration)

        // what is this code block meant to do?
        // if chosenDuration has not been assigned a truthy value (any number above 0 or non-empty string)
        // then this will run. it will create a variable and assign that to be the value of minutes when the timer is first started
        // let's console.log that – newChosenDuration and see if it's working

        if (!this.state.chosenDuration) { // !!!
            // let newChosenDuration = parseInt(this.state.minutes) // makes it a number
            // let mehState = {
            //     ...this.state,
            //     seconds: 'god is testing you',
            //     chosenDuration: newChosenDuration
            // }
            // this.setState(mehState)
            // console.log("state", this.state)
            // console.log("mehState", mehState)

            this.setState(this.setStateFunction)
        }
        
        // probably wanna do whatever i did with chosenDuration
        // which might include resetting it to empty if user hits reset button
        if (!this.state.session.start_time) { // !!!
            let newState = {
                ...this.state, 
                session: {
                    ...this.state.session,
                    start_time: new Date()
                }
            }
            this.setState(newState)
        }

        this.intervalHandle = setInterval(this.tick, 1000);
        this.secondsRemaining = (parseInt(minutes) * 60) + parseInt(seconds)
    }

















    tick = () => {
        let min = Math.floor(this.secondsRemaining / 60)
        let sec = this.secondsRemaining - (min * 60)
        this.setState({ minutes: min, seconds: sec })

        if (sec < 10) { this.setState({ seconds: '0' + this.state.seconds }) }

        if (min === 0 && sec === 0) {
            clearInterval(this.intervalHandle);
            this.showModal()
            // this is the place to put the automatic sessionCreation invocation @dev 
        }
        this.secondsRemaining--
    }

    render() {

        return (
            <div>
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
                <br/><br/><br/>
            <main>
                <h1>Save this session</h1>
                    <Button 
                        type="button"
                        onClick={this.showModal}
                    >
                        Open
                    </Button>
                    <SummaryModal 
                        show={this.state.show} 
                        handleClose={this.hideModal} 
                    >
                        <MeditationCreatorForm
                            meditationState={this.state}
                            createNewSession={this.props.createNewSession}
                            token={this.props.token}
                        />
                        <br/>
                    </SummaryModal>
            </main>
            </div>
        )
    }
}

export default MeditationContainer
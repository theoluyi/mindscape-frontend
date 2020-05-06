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
        minutes: 10,
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

    /** 
     * Dumb things to watch out for:
     * I added parseInt to the handleInput ƒ below
     * after I had finally fixed that buggy crap
     * I may have changed one other thing but my brain's not working now.
     */

    showModal = () => { this.setState({ show: true})  }
    hideModal = () => { this.setState({ show: false}) }

    handleInput = event => { this.setState({ minutes: parseInt(event.target.value) }) }
    toggleTimerStartState = () => { this.setState({timerStarted: !this.state.timerStarted}) } // this looks like it could be a problem
    pauseCountDown = () => { clearInterval(this.intervalHandle) }


    // setState() is not fucking my shit up anymore; it's all about setState(ƒ) now baby
    resetCountDown = () => {
        this.pauseCountDown()
        this.setState( state => (
            {   ...state,
                seconds: '00',
                minutes: state.chosenDuration,
                timerStarted: false,
                chosenDuration: 0,
                session: {
                    ...state.session,
                    start_time: ''}
            }
        ))
    }

    // setState() is not fucking my shit up anymore; it's all about setState(ƒ) now baby
    startCountDown = () => {
        let {minutes, seconds} = this.state

        // if there isn't a non-zero value in chosenDuration, assign one
        if (!this.state.chosenDuration) {
            this.setState( state =>  ( {...state, chosenDuration: parseInt(this.state.minutes) }))
        }
        
        // Fixed
        if (!this.state.session.start_time) {
            this.setState( state => ({...state, session: {...state.session, start_time: new Date() }})   )
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
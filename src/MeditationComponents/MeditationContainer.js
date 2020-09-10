import React from 'react'
// import {useState} from 'react'
// import Modal from 'react-modal';
import TimerInput from './TimerComponents/TimerInput'
import Timer from './TimerComponents/Timer'
import StartButton from './TimerComponents/StartButton'
import ResetButton from './TimerComponents/ResetButton'
import {Button, Container, Menu} from 'semantic-ui-react'
import SummaryModal from './SummaryModal'
import MeditationCreatorForm from '../MeditationComponents/MeditationCreatorForm'
import '../App.css'
// import 'semantic-ui-css/semantic.min.css';
import PerceptionCreatorForm from './PerceptionCreatorForm'
import PerceptionContainer from './PerceptionContainer'

class MeditationContainer extends React.Component {
    state = {
        seconds: '00',
        minutes: 10,
        timerStarted: false,
        chosenDuration: 0,
        show: false,
        session: {
            start_time: "",
            end_time: null,
            duration: 0,
            landscape: null,
            summary: "",
            perceptions: []
        }
    }

    addOnePerception = (perception) => {
        console.log(`${perception} perceived (in the MeditationContainer)`)
        let copyOfState = {...this.state}
        copyOfState.session.perceptions.push(perception)
        this.setState(copyOfState)
    }

    showModal = () => { this.setState({ show: true})  }
    hideModal = () => { this.setState({ show: false}) }

    handleInput = event => { this.setState({ minutes: event.target.value }) }
    toggleTimerStartState = () => { this.setState({timerStarted: !this.state.timerStarted}) }  
    // toggleTimerStartState is not ƒ setState but hasn't been a problem so far
    pauseCountDown = () => { clearInterval(this.intervalHandle) }

    // it's all about setState(ƒ) baby
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

    // it's all about setState(ƒ) baby
    startCountDown = () => {
        let {minutes, seconds} = this.state

        // if there isn't a non-zero value in chosenDuration, assign one
        if (!this.state.chosenDuration) {
            this.setState( state =>  ( {...state, chosenDuration: parseFloat(this.state.minutes) }))
        }
        
        // Fixed
        if (!this.state.session.start_time) {
            this.setState( state => ({...state, session: {...state.session, start_time: new Date() }})   )
        }
        this.intervalHandle = setInterval(this.tick, 1000);
        this.secondsRemaining = (parseFloat(minutes) * 60) + parseInt(seconds)
    }

    tick = () => {
        let min = Math.floor(this.secondsRemaining / 60)
        let sec = this.secondsRemaining - (min * 60)
        this.setState({ minutes: min, seconds: sec })

        // this looks like it should be using functional setState
        if (sec < 10) { this.setState({ seconds: '0' + this.state.seconds }) }

        if (min === 0 && sec === 0) {
            clearInterval(this.intervalHandle);
            this.showModal()
            // this is the place to put the automatic sessionCreation invocation @dev
            // also when you might want to *somehow* switch the button from paused to finished
        }
        this.secondsRemaining--
    }

    render() {
        return (
            <div className='meditation-container'>
                <Container>
                <br/>
                <PerceptionCreatorForm
                    addOnePerception={this.addOnePerception}
                />
                <br/><br/><br/>
                <PerceptionContainer perceptions={this.state.session.perceptions} />
                <br/> <br/> <br/> <br/> <br/> <br/>
                <br/> <br/> <br/>
                
                <Menu compact className='meditation-menu'>
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
                    <ResetButton
                    resetCountDown={this.resetCountDown}
                    />
                    <Button 
                        type="button"
                        onClick={this.showModal}
                    >
                        Save session
                    </Button>
                </Menu>
                
                <br/> <br/>
                    <main>
                        <SummaryModal 
                            show={this.state.show} 
                            handleClose={this.hideModal} 
                        >
                        <MeditationCreatorForm
                            userID={this.props.userID}
                            meditationState={this.state}
                            createNewSession={this.props.createNewSession}
                            token={this.props.token}
                        />
                        <br/>
                        </SummaryModal>
                    </main>
                </Container>

            </div>
        )
    }
}

export default MeditationContainer
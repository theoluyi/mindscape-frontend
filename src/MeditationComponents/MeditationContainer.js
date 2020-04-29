import React from 'react'
import CountUpTimer from './CountUpTimer'

class MeditationContainer extends React.Component {
    state = {
        elapsedTime: 0,
        perceptions: [],
        doneClicked: false
    }

    render(){
        return(
            <>
                <h1>Meditate</h1>
                <CountUpTimer/>
                {/* https://medium.com/@650egor/react-30-day-challenge-day-1-simple-timer-df85d0867553 */}

            </>
        )
    }
}

export default MeditationContainer
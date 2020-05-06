import React from 'react'
import {Container} from 'semantic-ui-react'


const PerceptionContainer = (props) => {
    
    let perceptionsJSX = props.perceptions.map( (perception, index) => <span key={index}> {perception}, </span>)

    return (
        <div>
            <h1>Your Mindscape</h1>
            <Container textAlign='justified'>
                {perceptionsJSX}
            </Container>
        </div>
    )
}

export default PerceptionContainer
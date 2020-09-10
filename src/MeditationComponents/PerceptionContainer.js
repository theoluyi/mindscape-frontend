import React from 'react'
import {Container, Button} from 'semantic-ui-react'


const PerceptionContainer = (props) => {
    
    let perceptionsJSX = props.perceptions.map( (perception, index) => 
        <span key={index}> <Button>{perception}</Button></span>
    )

    return (
        <div className='your-mindscape'>
            <h1>Your Mindscape</h1>
            <Container textAlign='justified'>
                {perceptionsJSX}
            </Container>
        </div>
    )
}

export default PerceptionContainer
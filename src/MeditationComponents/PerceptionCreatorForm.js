import React from 'react'
import {Form} from 'semantic-ui-react'

class PerceptionCreatorForm extends React.Component {
    state = {
        perception: ''
    }

    handleInput = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
    }

    handleFormSubmit = (e, unknownObj) => {
        e.preventDefault()
        this.props.addOnePerception(this.state.perception)
        this.setState({perception: ''})
    }

    render() {
        return(
            <div className='perception-input'> 
                <h1>Where is your mind?</h1>                
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Input
                        name='perception' 
                        // label='What perceptions are arising? 🧐' 
                        // placeholder='Perceptions naturally arise in the mind. Noting them brings insight' 
                        align='left'
                        // textAlign="center"
                        size="large"
                        value={this.state.perception}
                        onChange={this.handleInput}
                        autoComplete='off'
                    />
                    <Form.Button> Note your perception </Form.Button>
                </Form>
            </div>
        )
    }
}

export default PerceptionCreatorForm
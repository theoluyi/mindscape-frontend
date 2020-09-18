import React from 'react'
import {Form} from 'semantic-ui-react'

class MeditationCreatorForm extends React.Component {
    state = {
        summary: "",
    }

    handleSummaryChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
    }

    handleFormSubmit = (e, unknownObj) => {
        e.preventDefault()
        let sessionObj = {
            ...this.props.meditationState.session,
            user_id: this.props.userID,
            summary: this.state.summary, 
            duration: this.props.meditationState.chosenDuration,
            perceptions: this.props.meditationState.session.perceptions
            // BUG FOUND, INCORRECT: this.props.meditationState.perceptions
        }

        console.log("Form Submitted in MeditationCreatorForm component")
        console.log("pre-fetch sessionObj: ", sessionObj)
        fetch('https://mindscape-v1-build.herokuapp.com/sessions', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `bearer ${this.props.token}`
            },
            body: JSON.stringify(sessionObj)
        })
        .then(r => r.json())
        .then(sessionPOJO => {
            this.props.createNewSession(sessionPOJO)
            console.log("post-fetch sessionPOJO: ", sessionPOJO)
        })
        // wipes form and state clean
        this.setState({
            id: null,
            start_time: "",
            end_time: null,
            duration: 0,
            landscape: null,
            summary: "",
            perceptions: []
        })
    }

    render() {
        const { summary } = this.state
        // console.log(this.props.meditationState)
        // console.log(this.props.userID)
        
        return(
            <Form onSubmit={this.handleFormSubmit}>
                <Form.TextArea
                    name='summary' 
                    label='Session Summary' 
                    placeholder='What was memorable?' 
                    value={summary}
                    onChange={this.handleSummaryChange}
                />
                <Form.Button disabled={!localStorage.token}>{localStorage.token? "Save session":"Sign in to save a session"} </Form.Button>
            </Form>
        )
    }
}

export default MeditationCreatorForm
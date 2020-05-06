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
        console.log("Form Submitted in MeditationCreatorForm component")

        fetch('http://localhost:4000/sessions', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `bearer ${this.props.token}`
            },
            body: JSON.stringify({
                ...this.props.meditationState.session, 
                summary: this.state.summary, 
                duration: this.props.meditationState.chosenDuration,
                perceptions: this.props.meditationState.perceptions
            })
        })
        .then(r => r.json())
        .then(sessionPOJO => {
            this.props.createNewSession(sessionPOJO)
            console.log("sessionPOJO.id: ", sessionPOJO.id, "sessionPOJO: ", sessionPOJO)

        fetch('http://localhost:4000/perceptions', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `bearer ${this.props.token}`
            },
            body: JSON.stringify({
                ...this.props.meditationState.session, 
                perceptions: this.props.meditationState.perceptions
            })
        })

        })
        
        // wipes state clean after form submitted
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

        return(
            <Form onSubmit={this.handleFormSubmit}>
                <Form.TextArea
                    name='summary' 
                    label='Session Summary' 
                    placeholder='What was memorable?' 
                    value={summary}
                    onChange={this.handleSummaryChange}
                />
                <Form.Button>Save session </Form.Button>
            </Form>
        )
    }
}

export default MeditationCreatorForm
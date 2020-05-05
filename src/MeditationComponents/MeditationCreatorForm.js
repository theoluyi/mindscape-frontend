import React from 'react'
import {Form} from 'semantic-ui-react'

class MeditationCreatorForm extends React.Component {
    state = {
        id: null,
        start_time: "",
        end_time: null,
        duration: 0,
        landscape: null,
        summary: "",
        perceptions: []
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
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(sessionPOJO => {
            this.props.createNewSession(sessionPOJO)
        })

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
        console.log(this.props.meditationState)

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
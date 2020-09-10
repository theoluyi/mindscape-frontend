import React from 'react'
import {Form} from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const durationOptions = [
    { key: '10', text: '10 minutes', value: 10 },
    { key: '15', text: '15 minutes', value: 15 },
    { key: '20', text: '20 minutes', value: 20 },
    { key: '30', text: '30 minutes', value: 30 },
    { key: '60', text: '60 minutes', value: 60 },
]

class SessionCreatorForm extends React.Component {
    state = {
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

      handleDropdownSelectionChange = (e, data) => {
        // console.log(data.name, data.value)
        let {name, value} = data
        this.setState({
            [name]: value
        })
      }

      handleDateChange = (date, event) => {
        this.setState({
            start_time: date
        })
      }

    handleFormSubmit = (e, unknownObj) => {
        e.preventDefault()
        let statePlusUserID = {...this.state, user_id: this.props.user.id}
        console.log("Form Submitted in SessionCreatorForm component")

        fetch('http://localhost:4000/sessions', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `bearer ${this.props.token}`
            },
            body: JSON.stringify(statePlusUserID)
            // body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(sessionPOJO => {
            this.props.createNewSession(sessionPOJO)
        })

        this.setState({
            // id: null,
            start_time: "",
            end_time: null,
            duration: 0,
            landscape: null,
            summary: "",
            perceptions: []
        })
    }

    render() {
        const { start_time, duration, summary } = this.state
        console.log("this.props.user.id: ", this.props.user.id)
        return(
            <Form onSubmit={this.handleFormSubmit}'>
                <Form.Group widths='equal'>
                    <div>
                        <div><strong>Date</strong></div>
                        <DatePicker
                            fluid
                            name="start_time"
                            selected={start_time}
                            onChange={this.handleDateChange}
                            showTimeSelect
                        />
                    </div>
                    <Form.Select
                        fluid
                        label='Duration'
                        options={durationOptions}
                        name="duration"
                        value={duration}
                        onChange={this.handleDropdownSelectionChange}
                    />
                </Form.Group>
                <Form.TextArea
                    name='summary' 
                    label='Session Summary' 
                    placeholder='What was memorable?' 
                    value={summary}
                    onChange={this.handleSummaryChange}
                />
                <Form.Button>Add a session </Form.Button>
            </Form>
        )
    }
}

export default SessionCreatorForm

/** 
 * 
 * NOTES
 * the form only needs to have inputs for 
 * 1. start_time_time, 2. duration, and 3. summary
 * id is assigned in db. end_time will be calculated 
 * by adding duration to start_time_time
 * since this user is adding this after they have meditated
 * they do not have/need perception logging functionality
 * they can just summarize their experience in the summary
 * if someone really wants to log perceptions that functionality 
 * may exist later within session editing functionality
 * we want all this stuff in state so that we can directly add
 * it to the backend
 */
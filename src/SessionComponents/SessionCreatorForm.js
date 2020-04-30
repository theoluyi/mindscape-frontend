import React, { useState } from 'react'
import {Form, Button} from 'semantic-ui-react'

import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const timeOptions = [
    { key: '8', text: '8am', value: 8 },
    { key: '9', text: '9am', value: 9 },
    { key: '10', text: '10am', value: 10 },
  ]
const durationOptions = [
    { key: '10', text: '10 minutes', value: 10 },
    { key: '12', text: '12 minutes', value: 12 },
    { key: '15', text: '15 minutes', value: 15 },
    { key: '20', text: '20 minutes', value: 20 },
    { key: '30', text: '30 minutes', value: 30 },
    { key: '60', text: '60 minutes', value: 60 },
  ]

class SessionCreatorForm extends React.Component {
    state = {
        id: null,
        start_time_date: "",
        start_time_time: "",
        end_time: null,
        duration: 0,
        landscape: null,
        summary: "",
        perceptions: []
    }

    AppWithBasic = () => {
        const [currentDate, setNewDate] = useState(null);
        const onChange = (event, data) => setNewDate(data.value);
        return (
                <div>
                <div><strong>Date</strong></div>
                <SemanticDatepicker onChange={onChange}> </SemanticDatepicker>
                </div>
        )
      };

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
        console.log("Change detected")
      }

      handleDropdownSelectionChange = (e, data) => {
        // console.log(data.name, data.value)
        let {name, value} = data
        this.setState({
            [name]: value
        })
        console.log("Dropdown Selection change detected")
      }

    handleFormSubmit = () => {
        console.log("Form Submitted")
    }

    render() {
        const { start_time_time, duration, summary } = this.state

        return(
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group widths='equal'>
                    <this.AppWithBasic/>
                    <Form.Select
                        fluid
                        label='Time of Day'
                        options={timeOptions}
                        placeholder='When did you meditate...'
                        name="start_time_time"
                        value={start_time_time}
                        onChange={this.handleDropdownSelectionChange}
                        // this isn't working yet, likely because it's a select form and I'm not using the right attributes
                        // or something like that. google: react controlled form select 
                    />
                    <Form.Select
                        fluid
                        label='Duration'
                        options={durationOptions}
                        placeholder='How long did you meditate...'
                        name="duration"
                        value={duration}
                        onChange={this.handleDropdownSelectionChange}
                    />    
                    {/* <Form.Input 
                        fluid label='Duration' 
                        placeholder='Duration'     
                    /> */}

                </Form.Group>
                
                <Form.TextArea 
                    name='summary' 
                    label='Session Summary' 
                    placeholder='What was memorable?' 
                    name="summary"
                    value={summary}
                    onChange={this.handleChange}
                />
                <Form.Button>Submit</Form.Button>
            </Form>
        )
    }
}

export default SessionCreatorForm


// --------------------------------------------------------------------------------------------
// const AppWithBasic = () => {
//   const [currentDate, setNewDate] = useState(null);
//   const onChange = (event, data) => setNewDate(data.value);
//   return <SemanticDatepicker onChange={onChange} />;
// };

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
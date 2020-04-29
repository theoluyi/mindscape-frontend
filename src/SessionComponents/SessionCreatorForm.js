
import React, { useState } from 'react'
import {Form, Button} from 'semantic-ui-react'

import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

/** NOTES
 * the form only needs to have inputs for 
 * 1. start_time, 2. duration, and 3. summary
 * id is assigned in db. Endtime will be calculated 
 * by adding duration to start_time
 * since this user is adding this after they have meditated
 * they do not have/need perception logging functionality
 * they can just summarize their experience in the summary
 * if someone really wants to log perceptions that functionality 
 * may exist later within session editing functionality
 * we want all this stuff in state so that we can directly add
 * it to the backend
 */

class SessionCreatorForm extends React.Component {
    state = {
        id: null,
        start_time: "",
        end_time: null,
        duration: 0,
        landscape: null,
        summary: "",
        perceptions: []
    }

    render() {
        return(

            <Form>
                Add a session 
                <br/>
                <AppWithBasic/>
                <Form.Field>
                    <label>Session Summary</label>
                    <input />
                </Form.Field>
            </Form>
        )
    }
}

// --------------------------------------------------------------------------------------------



const AppWithBasic = () => {
  const [currentDate, setNewDate] = useState(null);
  const onChange = (event, data) => setNewDate(data.value);

  return <SemanticDatepicker onChange={onChange} />;
};

const AppWithRangeAndInPortuguese = () => {
  const [currentRange, setNewRange] = useState([]);
  const onChange = (event, data) => setNewRange(data.value);

  return <SemanticDatepicker locale="pt-BR" onChange={onChange} type="range" />;
};

export default SessionCreatorForm


// --------------------------------------------------------------------------------------------


const FormExampleField = () => (
    <Form>
      <Form.Field>
        <label>User Input</label>
        <input />
      </Form.Field>
    </Form>
  )
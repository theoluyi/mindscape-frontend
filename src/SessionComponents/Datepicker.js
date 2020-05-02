import React, { useState } from 'react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

class Datepicker extends React.Component {

    AppWithBasic = () => {
        const [currentDate, setNewDate] = useState(null);
        const onAChange = (event, data) => setNewDate(data.value);
        return (
                <div>
                <div><strong>Date</strong></div>
                <SemanticDatepicker onChange={onAChange}> </SemanticDatepicker>
                </div>
        )
      };

      render() {
          return (<this.AppWithBasic/>)
      }
}

export default Datepicker
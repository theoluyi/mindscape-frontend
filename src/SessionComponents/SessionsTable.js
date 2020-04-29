import React from 'react'
import { Header, Table } from 'semantic-ui-react'
// import { Rating } from 'semantic-ui-react'
import SessionCreatorForm from './SessionCreatorForm'

const SessionsTable = (props) => {

    // DEFINITIONS
    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
            // if want year again just add it before month in array in return statement below
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [month, day].join('/');
    }
    let sessionRows = props.user.sessions.map( session => {

        let minuteDuration = session.duration / 60
        let date = formatDate(session.start_time)
        return (
            <Table.Row key={session.id} >
                <Table.Cell>
                <Header as='h5' textAlign='left'>
                    {date}
                </Header>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    {minuteDuration} min
                </Table.Cell>
                <Table.Cell textAlign='left'>
                    {session.summary}
                </Table.Cell>
            </Table.Row>

        )
    })
    
    // JSX 
    return (
        <div>
            <h1>{props.user.username}'s Sessions</h1>
            <SessionCreatorForm/>
            <Table celled padded>
            {/* HARDCODED COLUMN TITLES I.E., HEADER CELLS */}
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Date</Table.HeaderCell>
                    <Table.HeaderCell>Duration</Table.HeaderCell>
                    <Table.HeaderCell>Summary</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

            {/* MAPPED OVER VARIABLE CONTENT */}
                <Table.Body>
                    {sessionRows}
                </Table.Body>
            </Table>
        </div>
)}

export default SessionsTable
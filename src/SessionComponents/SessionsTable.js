import React from 'react'
import { Header, Table, Container } from 'semantic-ui-react'
// import { Rating } from 'semantic-ui-react'
import SessionCreatorForm from './SessionCreatorForm'

const SessionsTable = (props) => {
    console.log(props.user.sessions)

    // DEFINITIONS
    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate();
            // year = d.getFullYear();
            // if want year again just comment above back in, replace `day = '' + d.getDate();` with `day = '' + d.getDate(),`
            // and add `year` before month in array in return statement below
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [month, day].join('/');
    }
    let sessionRows = props.user.sessions.map( session => {
        let sessionPerceptionsArray = session.perceptions.map(perceptionPOJO => <div> • {perceptionPOJO.note} </div>)

        // let sessionPerceptionsString = sessionPerceptionsArray.join('... ')

        let minuteDuration = session.duration
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
                <Table.Cell textAlign='left'>
                    {sessionPerceptionsArray}
                    {/* {sessionPerceptionsString} */}
                    {/* {session.perceptions[0] ? session.perceptions[0].note : ''} */}
                </Table.Cell>
            </Table.Row>

        )
    })
    
    // JSX 
    return (

        <Container>
        <div>
            <h1>{props.user.username}'s Sessions</h1>
            <SessionCreatorForm 
                createNewSession={props.createNewSession} 
                user={props.user}
                token={props.token}
            />
            <Table className="ui table" celled padded>
            {/* HARDCODED COLUMN TITLES I.E., HEADER CELLS */}
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell className="one wide" singleLine>Date</Table.HeaderCell>
                    <Table.HeaderCell className="one wide" >Duration</Table.HeaderCell>
                    <Table.HeaderCell className="eight wide" >Summary</Table.HeaderCell>
                    <Table.HeaderCell className="six wide" >Perceptions</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

            {/* MAPPED OVER VARIABLE CONTENT */}
                <Table.Body>
                    {sessionRows}
                </Table.Body>
            </Table>
        </div>
        </Container>
        
)}

export default SessionsTable
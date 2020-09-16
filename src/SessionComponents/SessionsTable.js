import React from 'react'
import { Header, Table, Container, Divider } from 'semantic-ui-react'
import SessionCreatorForm from './SessionCreatorForm'

const SessionsTable = (props) => {
    // console.log(props.user.sessions)

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
        let sessionPerceptionsArray = session.perceptions.map(perceptionPOJO => <div key={perceptionPOJO.id}> • {perceptionPOJO.note} </div>)

        // let sessionPerceptionsString = sessionPerceptionsArray.join('... ')

        let minuteDuration = session.duration
        let date = formatDate(session.start_time)
        return (
            <Table.Row key={session.id} >
                <Table.Cell>
                <Header as='h5' textAlign='left'>
                {String(date)}
                </Header>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                {String(minuteDuration)} min
                </Table.Cell>
                <Table.Cell textAlign='left'>
                {session.summary}
                </Table.Cell>
                <Table.Cell textAlign='left'>
                {sessionPerceptionsArray}
                </Table.Cell>
            </Table.Row>

        )
    })
    
    // JSX 
    return (

        <Container>
        <div>
            <h1> {localStorage.token? String(props.user.username)+`'s Sessions` : `Please sign in to see your sessions`} </h1>
            <Divider/>
            <SessionCreatorForm 
                createNewSession={props.createNewSession} 
                user={props.user}
                token={props.token}
            />
            <Table className="ui table" celled>
            {/* HARDCODED COLUMN TITLES I.E., HEADER CELLS */}
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell className="two wide" >Date</Table.HeaderCell>
                    <Table.HeaderCell className="two wide" >Duration</Table.HeaderCell>
                    <Table.HeaderCell className="six wide" >Summary</Table.HeaderCell>
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
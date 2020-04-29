// import React from 'react'
// import SessionsTable from './SessionsTable'

// class SessionContainer extends React.Component {

//     render(){
//         console.log(this.props.user.sessions)
//         const sessions = this.props.user.sessions
        
//         let mappedSessions = sessions.map( session => {
//             return (
//             <div key={session.id}>
//                 date: {session.start_time} <br/>
//                 duration: {session.duration} seconds<br/>
//                 perceptions: {session.perceptions}<br/><br/>
//             </div>
//             )
//         })
        
//         return(
//         <div>
//             <h1>{this.props.user.username}'s Sessions</h1>
//              {mappedSessions} 
//              <SessionsTable/>
//         </div>
//         )
//     }
// }

// export default SessionContainer
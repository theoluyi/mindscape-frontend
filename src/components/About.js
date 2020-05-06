import React from 'react'
import {Container, Divider} from 'semantic-ui-react'


const About = () => {
return(
  <div>
    <Container textAlign='justified' >
        <br/>
        <h1> About </h1>
        <Divider/>
        <h3> Mindscape is a simple yet interactive meditation app designed to help people 
        learn to meditate. There are many forms of meditation; Mindscape employs
        a popular style known as 'Insight' or 'Vipassana'. 
        <br/><br/>
        [insert asterisk to qualify that there's dispute about whether Vipassan and Samatha
        or 'mind-calming' meditation styles make sense to talk about as separate.]
        <br/><br/>
        Find a homebase to focus on. Many people choose their breath, but you can actually
        focus on many things. Other common choices could be a feeling like muscle sensations
        like tightness in your back or face, or sounds in your environment.
        <br/><br/>
        As you meditate, you'll notice your mind wander. When it does, see if can notice where
        your mind has gone. What are you thinking about? Note this down in the app and hit enter
        to log it as a 'perception.' Then return to your homebase. Then repeat. When you are done,
        you can save your session and see all your perceptions saved as your own virtual Mindscape.
        <br/><br/>

        You can meditate with or without logging in, but if you want
        to save your sessions you'll need to create an account.  
        </h3>
    </Container>
  </div>
)
}

export default About 
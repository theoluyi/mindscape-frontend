import React from 'react'
import {Container, Divider} from 'semantic-ui-react'


const About = () => {
return(
  <div>
    <Container className='about-container'>
        <h1> About </h1>
        <Divider/>
        <div className='about-text'>
          <p>Mindscape is an interactive meditation app that allows meditators to jot down their passing thoughts while meditating and save them for later review. This will allow meditators to gain more insight into their internal “mindscape.” </p>
          <p>The concept of Mindscape derives from a meditation technique called “mental noting.” Contrary to the common misconception of meditation as being about “clearing one’s mind of all thoughts,” arising thoughts are in fact a part of any meditation practice. </p>
          <p>In common forms of meditation, when the meditator becomes aware that their mind has gotten hooked by a perception, they note or label the perception, and then return to their homebase.* While simple to explain, this mental process can be challenging to sustain in practice, since the mind tends to wander.</p>
          <p>For this reason, Mindscape was created to make the process of noting more tangible. Physically noting down what has captured the meditator’s attention note only helps them to pause mindfully before returning to their homebase, but also relieves them of the compulsion to remember any significant thoughts they may have. This also facilitates their ability to transition from a state of mind-wandering back to mindful concentration on their homebase. </p>
          <p>We hope that you benefit from using Mindscape and gain insight into your own inner mindscape. Wishing you a peaceful sit! </p>
        </div>
        <div className='about-footnote'>
          <p> *Other sources may use terms like “point of focus” or “anchor” instead of homebase. Common choices of homebase include the breath, sounds in the environment, and sensations in the body.</p> 
        </div>
        
    </Container>
  </div>
)
}

{/* <br/>
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
        </h3> */}

export default About 
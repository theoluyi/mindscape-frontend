import React from 'react'
import {Container, Divider} from 'semantic-ui-react'


const About = () => {
return(
  <div>
    <Container className='about-container'>
        <h1> About </h1>
        <Divider/>
        <div className='about-text'>
          <p><i><b>Mindscape</b></i> is an interactive meditation app that allows meditators to jot down their 
          passing thoughts while meditating and save them for later review. The mission of this app is to help 
          meditators gain more insight into their internal “mindscape.”</p>
          
          <p>The concept of Mindscape derives from a meditation technique called 
          “mental noting.” Contrary to the common misconception that meditation is 
          about “clearing one’s mind of all thoughts,” <b><i>thoughts are 
          in fact an inevitable part of all meditation practice.</i></b> </p>

          <p>In common forms of meditation, when the meditator becomes aware that 
          their mind has gotten hooked by a perception (thought, feeling, memory, etc.), they note or label the perception, 
          and then return to their homebase of attention.* </p>
          
          <p>The act of <i><b>noting</b></i> the arising perception 
          and allowing it to become the object of meditation – rather than reactively pushing it away immediately – 
          helps  to facilitate <i><b>shifting</b></i> between mind-wandering and focus. 
          I created Mindscape to make the process of noting more tangible and easier to understand.</p>
          
          <figure>
            <img 
              src={require("../mind_wandering_diagram.png")}
              alt='mind-wandering-to-concentration-diagram'
              className='center' />
            <figcaption className='center'> Noting occurs right after awareness of mind-wandering (bottom left).</figcaption>
          </figure>
          
          <br/>

          <p> 
          Physically noting down what has captured your attention not only helps you 
          to pause mindfully before returning to your homebase, but also relieves you of the 
          compulsion to remember any thoughts you may have had. This further facilitates your 
          ability to transition from a state of <i><b>mind-wandering</b></i> back to <b><i>mindful concentration.</i></b></p>

          <p>I hope that Mindscape helps you gain insight into your own inner world.</p>
        </div>

        <br/><br/>
        <div className='about-footnote'>
          <p> *Other sources may use terms like “point of focus” or “anchor” instead of homebase. Common choices 
          of homebase include the breath, sounds in the environment, and sensations in the body.</p> 
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
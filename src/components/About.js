import React from 'react'
import {Container, Divider} from 'semantic-ui-react'


const About = () => {
return(
  <div>
    <Container className='about-container'>
        <h1> About </h1>
        <Divider/>
    
        <h2 className='about-text'>Concept</h2>
        <div className='about-text'>
          <p><i><b>Mindscape</b></i> is an interactive meditation app that allows meditators to jot down their 
          passing thoughts while meditating and save them for later review. The mission of this app is to help 
          meditators gain more insight into their internal “mindscape.”</p>
          
          <p>The concept of Mindscape derives from a meditation technique called 
          “mental noting.” Contrary to the common misconception that meditation is 
          about “clearing one’s mind of all thoughts,” <b><i>thoughts are 
          in fact an inevitable part of all meditation practice.</i></b> </p>

          <p>In a common form of meditation, when the meditator becomes aware that 
          their mind has gotten hooked by a perception (thought, feeling, memory, etc.), they note or label the perception, 
          and then return to their homebase of attention.* </p>
          
          <p>The act of <i><b>noting</b></i> the arising perception 
          and allowing it to become the object of meditation – rather than <i>reactively</i> pushing it away – 
          helps  to facilitate <i><b>shifting</b></i> between mind-wandering and focus. 
          I created Mindscape to make the process of noting more tangible and easier to understand.</p>
          
          <figure>
            <img 
              src={require("../mind_wandering_diagram.png")}
              alt='mind-wandering-to-concentration-diagram'
              className='center' />
            <figcaption className='center'> Noting (not pictured) occurs after <b> awareness of mind-wandering (6 o'clock)</b>, and before <b>shifting of attention back toward the homebase (9 o'clock).</b></figcaption>
          </figure>
          
          <br/>

          <p> 
          Physically noting down what has captured your attention not only helps you 
          to pause mindfully before returning to your homebase, it also relieves you of the 
          compulsion to remember any important thoughts you may have had. This further facilitates the 
          ability to transition from a state of <i><b>mind-wandering</b></i> back to <b><i>mindful concentration. </i></b>  
          I hope that Mindscape helps you gain greater insight into your inner world.</p>
        </div>

        <br/>
        <h2 className='about-text'>How to use Mindscape</h2>
        <div className='about-text'>
          <p>
            To meditate, click on the <b>Meditate</b> tab, select a duration, and click the start button.
            While you are meditating, whenever you notice a thought or perception arise, you can 
            note it down by typing a description into the field and clicking <b>Note your perception.</b>
          </p>
          <p>
            To view all your meditation sessions and notes, click on the <b>Sessions</b> tab. 
            All of your sessions are here, and you can also add any sessions from meditations you completed 
            outside of the app as well. 
          </p>
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

export default About 
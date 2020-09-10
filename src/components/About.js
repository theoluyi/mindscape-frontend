import React from 'react'
import {Container, Divider} from 'semantic-ui-react'


const About = () => {
return(
  <div>
    <Container textAlign='justified' >
        <br/>
        <h1> About </h1>
        <Divider/>
        <h3> Mindscape is a simple yet interactive meditation app designed to assist experienced
        and novice meditators alike. It makes use of and enhances a fundamental and powerful meditation 
        technique called "mental noting."
        <br/><br/>
        As with common types of meditation practice, to the meditate with Mindscape, the meditator first settles into a
        relaxed but wakeful posture and choose a point of focus. Some people call this point of
        focus a "homebase" or an "anchor." Common homebases include sounds in one's environment, 
        the feeling of one's body (hot or cold temperatures, a pleasant breeze, body aches, neutral sensations), 
        and of course, the breath (which itself can be noticed in different ways, i.e., changing temperature at the nostrils, 
        rising and falling of the chest or belly). In any case, your homebase is the object of attention that
        you return to when you notice your mind has wandered elsewhere.
        <br/><br/>

        Mental noting occurs in this transition. When the meditator notices that their mind has
        wandered, rather than immediately trying to force their attention back to their homebase,
        they pause for a moment to note what it was that captured their imagination.
        The clawing itch, the funny meme so-and-so sent yesterday, the chore they forgot.
        And they watch the sensation, thought, whatever object of attention, act out its mental scene.
        Then they return to the homebase
        <br/><br/>

        Mindscape aims to facilitate this simple but subtle practice of noting by giving the meditator
        a convenient way of noting down perceptions without interrupting their meditation. This can 
        help the meditator start to notice more clearly what catches their attention and to what extent;
        it is also practical since I often notice myself remembering items for my grocery list and other lists
        while meditating, and want a convenient way to note these things without navigating away from my
        meditation app and getting sucked into something else, and I assume I am not alone in this.

        {/* <img src="../../public/mind_wandering_diagram.png">mind_wandering_diagram</img> */}
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
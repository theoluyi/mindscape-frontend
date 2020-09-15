import React from 'react';

const Welcome = (props) => {

  return (
    <div>
      <h1 id="header">{props.username? `Welcome to Mindscape, ${props.username}` : "Welcome to Mindscape"}</h1>
      <br/>
        <img id='landscape' 
          src="https://media.giphy.com/media/5xtDarsUgCwZMXqcVQA/giphy.gif" 
          alt="landscape"
        />
    </div>
  );
}

export default Welcome;

import React from 'react';
import {Timeline} from 'react-twitter-widgets';

function About() {
return (
     <div id="About">
        <h1 className='header'>About</h1>
        <p id='aboutParagraph'> Delta-Five Performance primarily serves individuals 
            seeking to break through a plateau in their training. 
            We specialize, but are not limited too, helping prepare tactical 
            athletes for selection courses and building specialized
            strength for combat sport athletes.  
            The more we train, the more we realize that 
            athletes of all levels require better basic function 
            of all of their biological systems.  Any athlete will 
            improve exponentially using our dynamic systems based approach.
        </p>
        <Timeline dataSource={{
            theme: 'dark',
            sourceType: 'profile',
            screenName: 'd5performance'
        }}
        options={{
            height: '400'
          }}></Timeline>
        
        
    </div>
    );
    }
 
export default About;
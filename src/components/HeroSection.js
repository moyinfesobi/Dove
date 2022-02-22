import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import  './HeroSection.css';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description
}) {
    return (
        <> 
          <div className={lightBg ? 'home__hero-section'  : 'home__hero-section darkBg'} > 
              <h1>Task</h1>
          </div>
        </>
    )
}

export default HeroSection;


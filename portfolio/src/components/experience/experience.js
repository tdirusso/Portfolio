import React from 'react';
import './experience.css';

import logMeInLogo from '../../assets/experience/logmein.png';
import redRockLogo from '../../assets/experience/redrock.png';
import sunstateLogo from '../../assets/experience/sunstate.png';

function Experience() {

    return (
        <div className="experience-container container" id="experience">
            <h1 className="experience-header">Experience<div className="header-dot"></div></h1>
            <div className="experiences">
                <div className="logmein-experience experience">
                    <img src={logMeInLogo} className="experience-icon" alt="LogMeIn"></img>
                    <div className="experience-details">
                        <span className="experience-company">LogMeIn, Inc.</span>
                        <span className="experience-title">Software Engineer, Professional Services</span>
                        <span className="experience-date">July 2018 &ndash; Present (3 years)</span>
                    </div>
                </div>

                <div className="experience-separator"></div>

                <div className="redrock-experience experience">
                    <img src={redRockLogo} className="experience-icon" alt="RedRock Software Corporation"></img>
                    <div className="experience-details">
                        <span className="experience-company">RedRock Software Corporation</span>
                        <span className="experience-title">Software Engineer Intern</span>
                        <span className="experience-date">May 2017 &ndash; April 2018 (1 year)</span>
                    </div>
                </div>

                <div className="experience-separator"></div>

                <div className="sunstate-experience experience">
                    <img src={sunstateLogo} className="experience-icon" alt="SunState Equipment"></img>
                    <div className="experience-details">
                        <span className="experience-company">SunState Equipment</span>
                        <span className="experience-title">Information Technology Intern</span>
                        <span className="experience-date">May 2016 &ndash; July 2017 (1 year)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

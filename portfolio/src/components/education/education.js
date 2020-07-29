import React from 'react';
import './education.css';

import asuLogo from '../../assets/education/asu.png';
import bitmojStudying from '../../assets/bitmoji/bitmoji-studying.png';

function Education() {

    return (
        <div className="education-container container" id="education">
            <h1 className="education-header">Education<div className="header-dot"></div></h1>
            <div className="education-content">
                <img src={asuLogo} alt="Arizona State University" className="asu-logo"></img>
                <div className="education-description">
                    <h2 className="education-school">Arizona State University</h2>
                    <h3 className="education-degree">Bachelor of Science (BS), Software Engineering</h3>
                    <h4 className="education-date">2014 &ndash; 2018</h4>
                </div>
            </div>
            <img src={bitmojStudying} className="bitmoji-studying" alt=""></img>
        </div>
    );
}

export default Education;

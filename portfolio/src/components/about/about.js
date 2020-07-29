import React from 'react';
import './about.css';

import bitmojiWaving from '../../assets//bitmoji/bitmoji-waving.png';
import abbottLogo from '../../assets/clients/abbott.png';
import accentureLogo from '../../assets/clients/accenture.png';
import aceLogo from '../../assets/clients/ace.png';
import canonLogo from '../../assets/clients/canon.png';
import citrixLogo from '../../assets/clients/citrix.png';
import dysonLogo from '../../assets/clients/dyson.png';
import fanniemaeLogo from '../../assets/clients/fanniemae.png';
import geLogo from '../../assets/clients/ge.png';
import kbrLogo from '../../assets/clients/kbr.png';
import vansLogo from '../../assets/clients/vans.png';

import languagesLogo from '../../assets/tech-headers/languages.png';
import frameworksLogo from '../../assets/tech-headers/framework.png';
import toolsLogo from '../../assets/tech-headers/tools.png';

const tools = [
    'Git Source Control',
    'Amazon Web Services',
    'Heroku',
    'Docker'
];

const frameworks = [
    'ReactJS',
    'AngularJS',
    'jQuery',
    'Bootstrap'
];

const languages = [
    'HTML5',
    'JavaScript',
    'CSS3',
    'NodeJS',
    'Java',
    'PHP',
    'MySQL'
];

const clients = [
    abbottLogo,
    accentureLogo,
    aceLogo,
    canonLogo,
    citrixLogo,
    dysonLogo,
    fanniemaeLogo,
    geLogo,
    kbrLogo,
    vansLogo
];

function About() {

    return (
        <div className="about-container container" id="about">
            <h1 className="about-header">About Me<div className="header-dot"></div></h1>
            <div className="about-content">
                <img className="bitmoji-waving" src={bitmojiWaving} alt="Hello"></img>
                <div className="about-text-container">
                    <p className="about-text">
                        <span>Hi there!  &nbsp;My name is Tim DiRusso.</span>
                        <br></br><br></br>
                        I'm an experienced Software Engineer with demonstrated expertise in
                        full-stack web application development.
                        <br></br><br></br>
                        I currently work
                        as an Engineer &amp; Consultant for a cloud-based
                        software company that offers services in
                        remote connectivity and collaboration,
                        IT management and customer engagement.
                    </p>
                </div>
            </div>

            <div className="tech-content">
                <div className="languages-container tech-container">
                    <h2 className="tech-header">Languages</h2>
                    <img src={languagesLogo} className="tech-icon" alt=""></img>
                    <ul className="languages-list">
                        {languages.map((language, index) => <li className="language" key={`language-${index}`}>{language}</li>)}
                    </ul>
                </div>
                <div className="frameworks-container tech-container">
                    <h2 className="tech-header">Frameworks</h2>
                    <img src={frameworksLogo} className="tech-icon" alt=""></img>
                    <ul className="frameworks-list">
                        {frameworks.map((framework, index) => <li className="language" key={`framework-${index}`}>{framework}</li>)}
                    </ul>
                </div>
                <div className="tools-container tech-container">
                    <h2 className="tech-header">Tools</h2>
                    <img src={toolsLogo} className="tech-icon" alt=""></img>
                    <ul className="tools-list">
                        {tools.map((tool, index) => <li className="language" key={`tool-${index}`}>{tool}</li>)}
                    </ul>
                </div>
            </div>

            <div className="client-content">
                <h2 className="client-header">Clients I've worked with</h2>
                {
                    clients.map((client, index) => {
                        return (
                            <div className="client" key={`client-${index}`}>
                                <img src={client} className="client-logo" alt=""></img>
                            </div>);
                    })
                }
            </div>
        </div>
    );
}

export default About;
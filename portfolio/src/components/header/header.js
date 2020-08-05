import React, { createRef } from 'react';
import './header.css';

class Header extends React.Component {

    constructor() {
        super();
        this.header = createRef();
    }

    closeHeader() {
        this.header.current.style.removeProperty('left');
        document.querySelector('.main-container').style.removeProperty('margin-left');
        setTimeout(() => {
            document.querySelector('.fa-bars').style.removeProperty('display');
        }, 300);
    }

    scrollToSection(sectionID) {
        if (window.innerWidth <= 1000) {
            this.closeHeader();
            setTimeout(() => {
                document.getElementById(sectionID).scrollIntoView();
            }, 500);
        } else {
            document.getElementById(sectionID).scrollIntoView();
        }
    }

    render() {
        return (
            <div>
                <header ref={this.header}>
                    <i className="fa fa-times" onClick={() => this.closeHeader()}></i>
                    <h1 className="header-title" onClick={() => window.location.reload()}>Tim<div className="header-dot"></div></h1>

                    <nav>
                        <ul className="nav-list">
                            <li className="nav-item active" id="home-nav" onClick={() => this.scrollToSection('home')}>Home</li>
                            <li className="nav-item" id="about-nav" onClick={() => this.scrollToSection('about')}>About</li>
                            <li className="nav-item" id="experience-nav" onClick={() => this.scrollToSection('experience')}>Experience</li>
                            <li className="nav-item" id="projects-nav" onClick={() => this.scrollToSection('projects')}>Projects</li>
                            <li className="nav-item" id="education-nav" onClick={() => this.scrollToSection('education')}>Education</li>
                            <li className="nav-item" id="contact-nav" onClick={() => this.scrollToSection('contact')}>Contact</li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;

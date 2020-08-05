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

    scrollToSection(sectionID, event) {
        document.querySelector('.nav-item.active').classList.remove('active');
        event.target.classList.add('active');
        document.getElementById(sectionID).scrollIntoView();
    }

    render() {
        return (
            <div>
                <header ref={this.header}>
                    <i className="fa fa-times" onClick={() => this.closeHeader()}></i>
                    <h1 className="header-title" onClick={() => window.location.reload()}>Tim<div className="header-dot"></div></h1>

                    <nav>
                        <ul className="nav-list">
                            <li className="nav-item active" onClick={(event) => this.scrollToSection('home', event)}>Home</li>
                            <li className="nav-item" onClick={(event) => this.scrollToSection('about', event)}>About</li>
                            <li className="nav-item" onClick={(event) => this.scrollToSection('experience', event)}>Experience</li>
                            <li className="nav-item" onClick={(event) => this.scrollToSection('projects', event)}>Projects</li>
                            <li className="nav-item" onClick={(event) => this.scrollToSection('education', event)}>Education</li>
                            <li className="nav-item" onClick={(event) => this.scrollToSection('contact', event)}>Contact</li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;

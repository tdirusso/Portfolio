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

    render() {
        return (
            <div>
                <header ref={this.header}>
                    <i className="fa fa-times" onClick={() => this.closeHeader()}></i>
                    <h1 className="header-title" onClick={() => window.location.reload()}>Tim<div className="header-dot"></div></h1>

                    <nav>
                        <ul className="nav-list">
                            <li className="nav-item active" onClick={() => { }}>Home</li>
                            <li className="nav-item" onClick={() => { }}>About</li>
                            <li className="nav-item" onClick={() => { }}>Experience</li>
                            <li className="nav-item" onClick={() => { }}>Education</li>
                            <li className="nav-item" onClick={() => { }}>Projects</li>
                            <li className="nav-item" onClick={() => { }}>Contact</li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;

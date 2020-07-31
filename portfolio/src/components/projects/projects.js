import React, { createRef } from 'react';
import './projects.css';

class Projects extends React.Component {

    constructor() {
        super();
        this.test = createRef();
        this.state = {
            style: {}
        };
    }

    componentDidMount() {
        this.setState({
            style: {
                maxHeight: this.test.current.scrollHeight
            }
        });
    }

    expandProject(event) {
        event.target.classList.toggle('active');
        event.target.firstElementChild.classList.toggle('flipped');

        const panel = event.target.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }

    render() {
        return (
            <div className="projects-container container" id="projects">
                <h1 className="projects-header">Projects<div className="header-dot"></div></h1>


                <div className="projects-list">
                    <button className="accordion first active" onClick={(event) => { this.expandProject(event) }}>Lockify<i className="fa fa-caret-down flipped"></i></button>
                    <div className="panel" ref={this.test} style={this.state.style}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button className="accordion last" onClick={(event) => { this.expandProject(event) }}>Spotify Data Visualizer<i className="fa fa-caret-down"></i></button>
                    <div className="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
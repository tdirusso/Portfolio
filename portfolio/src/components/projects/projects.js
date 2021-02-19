import React from 'react';
import './projects.css';
import lockifyDash from '../../assets/projects/lockify/dashboard.png';
import lockifyDeletedSongs from '../../assets/projects/lockify/deletedSongs.png';
import spotifyVisualizerArtists from '../../assets/projects/spotify-visualizer/visualizer-artists.png';
import spotifyVisualizerTracks from '../../assets/projects/spotify-visualizer/visualizer-tracks.png';
import upstreamDash1 from '../../assets/projects/upstream/dashboard1.png';
import upstreamDash2 from '../../assets/projects/upstream/dashboard2.png';

class Projects extends React.Component {

    expandProject(event) {
        if (event.target.tagName === 'I') event.target = event.target.parentElement;

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
                    <button className="accordion first active" onClick={(event) => { this.expandProject(event) }}>Lockify &ndash; A Spotify Backup Service<i className="fa fa-caret-down flipped"></i></button>
                    <div className="panel">
                        <span>
                            Have you accidentally deleted or unliked a song from your Spotify playlist, only to find out there is no real way to determine exactly which song your quick and mindless fingers inadvertently swiped off the list?
                            <br></br><br></br>
                            Your problem has now been solved!
                            <br></br><br></br>
                            Lockify gives you the ability to back-up your Spotify playlist for future access to recently deleted songs through a free and open-source dashboard.
                            <br></br><br></br>
                            <a href="https://lockify.herokuapp.com" target="_blank" rel="noopener noreferrer">Click to view the Lockify Dashboard</a>
                            <img src={lockifyDash} alt=""></img>
                            <h3>Stack</h3>
                            <ul>
                                <li>NodeJS &amp; Express - Server</li>
                                <li>React - UI / UX</li>
                            </ul>
                            <h3>Deployment</h3>
                            Heroku — the Lockify web application is hosted on a free tier Heroku Dyno. The NodeJS server currently hosts the static files that were compiled and built by React.
                            <h3>Features</h3>
                            <ul>
                                <li>Directly and securely login with your existing Spotify account</li>
                                <li>Back-up your current Spotify playlist for future access to recently deleted songs</li>
                                <li>Seamlessly navigate from Lockify to Spotify (web or mobile) to listen to and re-add songs</li>
                                <li>Easily bring your Spotify playlist back up to date in our database</li>
                                <li>Quickly refresh the dashboard for real time updates</li>
                                <li>No sweat — you can effortlessly delete your Lockify account straight from the dashboard</li>
                            </ul>
                            <img src={lockifyDeletedSongs} alt=""></img>
                            <a href="https://github.com/tdirusso/Lockify" target="_blank" rel="noopener noreferrer">View on Github</a>
                        </span>
                    </div>

                    <button className="accordion" onClick={(event) => { this.expandProject(event) }}>Spotify Data Visualizer<i className="fa fa-caret-down"></i></button>
                    <div className="panel">
                        <span>
                            This web application enables users to make use of their Spotify data.
                            <br></br><br></br>
                            With this app, users can upload their downloadable streaming data from Spotify – from there, the files are parsed and the user is presented with 2 responsive custom charts that detail their top 10 tracks and artists, along with the total play time for each (in minutes).
                            <br></br><br></br>
                            <a href="https://spotify-streaming-visualizer.herokuapp.com/" target="_blank" rel="noopener noreferrer">Click to view the Data Visualizer</a>
                            <img src={spotifyVisualizerArtists} alt=""></img>
                            <img src={spotifyVisualizerTracks} alt=""></img>
                            <h3>Stack</h3>
                            <ul>
                                <li>NodeJS &amp; Express - Server</li>
                                <li>Vanilla HTML &amp; JavaScript - UI / UX</li>
                                <li>Chart.js - Custom Charts</li>
                                <li>jQuery</li>
                            </ul>
                            <h3>Deployment</h3>
                            Heroku — the Data Visualizer web application is hosted on a free tier Heroku Dyno.
                            The NodeJS server currently hosts the static HTML file.
                            <br></br><br></br>
                            <a href="https://github.com/tdirusso/Spotify-Data-Visualizer" target="_blank" rel="noopener noreferrer">View on Github</a>
                        </span>
                    </div>

                    <button className="accordion last" onClick={(event) => { this.expandProject(event) }}>UpStream &ndash; A Budget Management Tool<i className="fa fa-caret-down"></i></button>
                    <div className="panel">
                        <span>
                            UpStream is a desktop budgeting/finance management tool.
                            <br></br><br></br>
                            This application enables real time budget analysis, visualization and management through a seamless and intuitive user interface.
                            Users can create and modify custom budget categories, import (through downloadable CSV) or manually insert monthly expenses and
                            view trends and reports of their budget on a month to month basis.
                            <br></br><br></br>
                            <img src={upstreamDash1} alt=""></img>
                            <img src={upstreamDash2} alt=""></img>
                            <h3>Stack</h3>
                            <ul>
                                <li>ElectronJS - Desktop GUI Framework</li>
                                <li>ReactJS - UI / UX</li>
                                <li>Chart.js - Charting and Analytics Visuals</li>
                            </ul>
                            <h3>Deployment</h3>
                            This budgeting tool can be downloaded and used as a desktop application via an executable.
                            <br></br><br></br>
                            <a href="https://github.com/tdirusso/UpStream" target="_blank" rel="noopener noreferrer">View on Github</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
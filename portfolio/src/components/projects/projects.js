import React from 'react';
import './projects.css';
import lockifyDash from '../../assets/projects/lockify/dashboard.png';
import lockifyDeletedSongs from '../../assets/projects/lockify/deletedSongs.png';
import spotifyVisualizerArtists from '../../assets/projects/spotify-visualizer/visualizer-artists.png';
import spotifyVisualizerTracks from '../../assets/projects/spotify-visualizer/visualizer-tracks.png';

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
                    <button className="accordion first active" onClick={(event) => { this.expandProject(event) }}>Lockify<i className="fa fa-caret-down flipped"></i></button>
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
                        </span>
                    </div>

                    <button className="accordion last" onClick={(event) => { this.expandProject(event) }}>Spotify Visualizer<i className="fa fa-caret-down"></i></button>
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
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
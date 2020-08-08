import React from 'react';
import './home.css';
import bitmojiProfile from '../../assets/bitmoji/bitmoji-profile.png';

function Home() {

	const socialLinks = {
		linkedIn: 'https://www.linkedin.com/in/tim-dirusso/',
		github: 'https://github.com/tdirusso',
		twitter: 'https://twitter.com/TimDiRusso',
		instagram: 'https://www.instagram.com/timdirusso/',
	};

	return (
		<div className="home-container container" id="home">
			<div className="home-content">
				<img src={bitmojiProfile} className="profile-image" alt="Hello"></img>
				<h1 className="profile-name">Tim DiRusso</h1>
				<h2 className="profile-title">Software Engineer</h2>

				<ul className="social-links">
					<li className="social-link" onClick={() => window.open(socialLinks.linkedIn, '_blank')}><i className="fa fa-linkedin-square"></i></li>
					<li className="social-link" onClick={() => window.open(socialLinks.github, '_blank')}><i className="fa fa-github-square"></i></li>
					<li className="social-link" onClick={() => window.open(socialLinks.twitter, '_blank')}><i className="fa fa-twitter-square"></i></li>
					<li className="social-link" onClick={() => window.open(socialLinks.instagram, '_blank')}><i className="fa fa-instagram"></i></li>
				</ul>

				<button className="hire-button" onClick={() => document.getElementById('contact-nav').click()}>Hire Me</button>
			</div>
			<div className="scroll-tip">
				<span onClick={() => document.getElementById('about-nav').click()}>Scroll Down</span>
				<i className="fa fa-angle-down"></i>
				<i className="fa fa-angle-down"></i>
				<i className="fa fa-angle-down"></i>
			</div>
		</div>
	);
}

export default Home;

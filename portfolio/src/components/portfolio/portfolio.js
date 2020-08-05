import React, { createRef } from 'react';
import './portfolio.css';
import Header from '../header/header';
import Home from '../home/home';
import About from '../about/about';
import Experience from '../experience/experience';
import Education from '../education/education';
import Projects from '../projects/projects';
import Contact from '../contact/contact';

class Portfolio extends React.Component {

	constructor() {
		super();
		this.header = createRef();
	}

	componentDidMount() {
		const self = this;
		const home = document.getElementById('home');
		const about = document.getElementById('about');
		const experience = document.getElementById('experience');
		const projects = document.getElementById('projects');
		const education = document.getElementById('education');
		const contact = document.getElementById('contact');

		const middleScreenPixels = (window.innerHeight / 2.5).toFixed(0);

		window.onscroll = function () {
			const homeOffset = home.getBoundingClientRect().top;
			const aboutOffset = about.getBoundingClientRect().top;
			const experieceOffset = experience.getBoundingClientRect().top;
			const projectsOffset = projects.getBoundingClientRect().top;
			const educationOffset = education.getBoundingClientRect().top;
			const contactOffset = contact.getBoundingClientRect().top;

			if (contactOffset <= middleScreenPixels && contactOffset > educationOffset) self.updateNav('contact-nav');
			else if (educationOffset <= middleScreenPixels && educationOffset > projectsOffset) self.updateNav('education-nav');
			else if (projectsOffset <= middleScreenPixels && projectsOffset > experieceOffset) self.updateNav('projects-nav');
			else if (experieceOffset <= middleScreenPixels && experieceOffset > aboutOffset) self.updateNav('experience-nav');
			else if (aboutOffset <= middleScreenPixels && aboutOffset > homeOffset) self.updateNav('about-nav');
			else if (homeOffset <= middleScreenPixels) self.updateNav('home-nav');
		}
	}

	updateNav(sectionID) {
		document.querySelector('.nav-item.active').classList.remove('active');
		document.getElementById(sectionID).classList.add('active');
	}

	openHeader(event) {
		event.target.style.display = 'none';
		this.header.current.header.current.style.left = '0px';
		document.querySelector('.main-container').style.marginLeft = '280px '
	}

	render() {
		return (
			<div>
				<i className="fa fa-bars" onClick={(event) => this.openHeader(event)}></i>
				<Header ref={this.header} />
				<div className="main-container">
					<Home />
					<About />
					<Experience />
					<Projects />
					<Education />
					<Contact />
				</div>
			</div>
		);
	}
}

export default Portfolio;

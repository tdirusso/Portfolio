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
		const header = document.getElementById('header');

		const firstProject = projects.querySelector('.accordion.first + .panel');
		firstProject.style.maxHeight = '10000px';

		let shownAbout = false;
		let shownExperience = false;
		let shownProjects = false;
		let shownEducation = false;
		let shownContact = false;

		let middleScreenPixels = (window.innerHeight / 2).toFixed(0);

		if (window.innerHeight <= 800) {
			middleScreenPixels = (window.innerHeight / 1.5).toFixed(0);
		}

		home.classList.add('animate__animated', 'animate__fadeInDown', 'animate__faster');
		header.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__faster');

		window.onscroll = () => {
			const homeOffset = home.getBoundingClientRect().top;
			const aboutOffset = about.getBoundingClientRect().top;
			const experieceOffset = experience.getBoundingClientRect().top;
			const projectsOffset = projects.getBoundingClientRect().top;
			const educationOffset = education.getBoundingClientRect().top;
			const contactOffset = contact.getBoundingClientRect().top;

			if (contactOffset <= middleScreenPixels) {
				self.updateNav('contact-nav');
				if (!shownContact) {
					shownContact = true;
					contact.classList.add('animate__animated', 'animate__fadeInUp', 'animate__faster');
				}
			} else if (educationOffset <= middleScreenPixels) {
				self.updateNav('education-nav');
				if (!shownEducation) {
					shownEducation = true;
					education.classList.add('animate__animated', 'animate__fadeInUp', 'animate__faster');
				}
			} else if (projectsOffset <= middleScreenPixels) {
				self.updateNav('projects-nav');
				if (!shownProjects) {
					shownProjects = true;
					projects.classList.add('animate__animated', 'animate__fadeInUp', 'animate__faster');
				}
			} else if (experieceOffset <= middleScreenPixels) {
				self.updateNav('experience-nav');
				if (!shownExperience) {
					shownExperience = true;
					experience.classList.add('animate__animated', 'animate__fadeInUp', 'animate__faster');
				}
			} else if (aboutOffset <= middleScreenPixels) {
				self.updateNav('about-nav');
				if (!shownAbout) {
					shownAbout = true;
					about.classList.add('animate__animated', 'animate__fadeInUp', 'animate__faster');
				}
			} else if (homeOffset <= middleScreenPixels) {
				self.updateNav('home-nav');
			}
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

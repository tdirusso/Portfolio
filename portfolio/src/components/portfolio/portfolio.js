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
					<Education />
					<Projects />
					<Contact />
				</div>
			</div>
		);
	}
}

export default Portfolio;

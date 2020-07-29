import React from 'react';
import './contact.css';

import bitmojiQuestions from '../../assets/bitmoji/bitmoji-questions.png';

function Contact() {

    return (
        <div className="contact-container container" id="contact">
            <h1 className="contact-header">Contact<div className="header-dot"></div></h1>
            <img src={bitmojiQuestions} className="bitmoji-questions" alt="Questions?"></img>
            <h2 class="have-questions">Have Questions?</h2>
            <div className="contact-separator"></div>
            <div class="get-in-touch">
                Feel free to get in touch my sending me an email or a direct message on LinkedIn!
            </div>
            <div className="contact-buttons">
                <button className="email-button" onClick={() => window.location.href = 'mailto:timgdirusso@gmail.com'}>Email</button>
                <button className="linkedin-button" onClick={() => window.open('https://www.linkedin.com/in/tim-dirusso/', '_blank')}>LinkedIn</button>
            </div>
        </div>
    );
}

export default Contact;
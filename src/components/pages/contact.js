import React from 'react' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function() {
    return (
<div>
    <div className="header"><h1>contact</h1></div>
    <div className="content-wrapper">
        <div className="left-side">
            <div className="contact-info">
                <div className="icons">
                <FontAwesomeIcon icon="phone-volume"/> (555) 555-5555
                </div>
                <div className="icons">
                <FontAwesomeIcon icon="envelope"/> fakeEmail@gmail.com
                </div>
                <div className="icons">
                <FontAwesomeIcon icon="address-book"/> 1234 weststreet north-south pole
                </div>
            </div>
        </div>
        <div className="right-side">
            <img src="../../../static/assets/images/login.jpg"/>
        </div>
    </div>
</div>
    );
}
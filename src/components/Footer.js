import React from 'react';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';

const Footer = () => {
    return (
        <div className='xfooter'>
            <div className="copyright">
                <p><span>&copy;</span> Copyright 2017 Rise. All Right Reserved</p>
            </div>
            
            <div className="socials">
                <div className="social">
                    <img src={facebook} height="20px" />
                </div>
                <div className="social">
                    <img src={twitter} height="20px" />
                </div>
                <div className="social">
                    <img src={linkedin} height="20px" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
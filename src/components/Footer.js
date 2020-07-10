import React from 'react';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';

const Footer = () => {
    return (
        <div className='xfooter'>
            <div className="copyright">
                <p><span>&copy;</span> Copyright 2017 Rise. All Right Reserved</p>
            </div>

            <div className="socials">
                <div className="row">
                    <div className="social">
                        <img src={facebook} height="30px" />
                    </div>
                    <div className="social">
                        <img src={twitter} height="30px" />
                    </div>
                    <div className="social">
                        <img src={linkedin} height="30px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
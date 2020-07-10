import React from 'react';
import logo from '../images/logo.svg';

const BeforeFooter = () => {
    return (
        <div className="row container-fluid beforeFooter" style={{ margin: "auto" }}>
            <div className="col-md-3">
                <img src={logo} width="24px" height="26.7px" className="d-inline-block align-top" alt="logo" />
                <span className="xlogo-fotter-text">Rise</span>

                <p>Occaecat elit elit exercitation eiusmod. Irure ad ex ullamco velit qui pariatur ullamco eiusmod mollit enim reprehenderit. Incididunt ea proident pariatur minim in</p>
            </div>

            <div className="col-md-3">
                <h2 className="xlogo-fotter-text">Categories</h2>
                <ul className='first-ul'>
                    <a href="#" className='text-reset text-decoration-none'><li>Fashion Design</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Furniture</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Baking</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Make Over</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Photography</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Electricity</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Painting</li></a>
                </ul>
            </div>

            <div className="col-md-3">
                <ul className='second-ul'> 
                    <a href="#" className='text-reset text-decoration-none'><li>Interior Design</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Hair Dressing</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Electrician</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Plumber</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Builder</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Carpenter</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>BrickLayer</li></a>
                </ul>
            </div>

            <div className="col-md-3">
                <h2 className="xlogo-fotter-text">Quick Links</h2>
                <ul className='first-ul'>
                    <a href="#" className='text-reset text-decoration-none'><li>Home</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>FAQ</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Contact Us</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Help</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Categories </li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>Vendors</li></a>
                    <a href="#" className='text-reset text-decoration-none'><li>About</li></a>
                </ul>
            </div>
        </div>
    );
}

export default BeforeFooter;
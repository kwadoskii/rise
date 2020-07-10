import React from 'react';
import pin from '../images/pin.svg';
import phone from '../images/phone.svg';

const TopPicksCard = (props) => {
    const bestSeller = props.bestseller ? <p className="best-seller">Best Seller</p> : "";
    return (
        <div className="topPickCard">
            <div className="card-image">
                <div className="card-cate" style={{ backgroundImage: `url(${props.imgPath})` }}>
                    <p className='category'>{props.category}</p>
                    {bestSeller}
                </div>
            </div>

            <div className="card-details">
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
                <div className="amount-holder">
                    <div className="old">
                        <p><span className="currency"></span>{props.amt}</p>
                    </div>
                    <div className="new">
                        <p><span className="currency"></span>{props.discount}</p>
                    </div>
                </div>
                <hr/>
                <div className="contact">
                    <div className="address">
                        <img src={pin} alt="address"/>
                        <p>{props.location}</p>
                    </div>
                    <div className="phone">
                        <img src={phone} alt="phone"/>   
                        <p>{props.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopPicksCard;
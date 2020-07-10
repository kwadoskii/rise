import React, { Component } from 'react';
import { topPicks } from '../helpers/data';
import TopPicksCard from './TopPicksCard';

class TopPicks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toppicks: topPicks()
        }        
    }

    topPicksCardList(){
        return this.state.toppicks.map(toppick => {
            return (
                <TopPicksCard 
                    category={toppick.category} 
                    name={toppick.name} 
                    imgPath={toppick.imgPath} 
                    amt={toppick.amt} 
                    discount={toppick.discount} 
                    location={toppick.location} 
                    phone={toppick.phone} 
                    bestseller={toppick.bestseller} 
                    desc={toppick.desc} 
                    key={toppick.id}
                />
            );
        });
    }
    
    render() {
        return (
            <div className='suggested-holder toppick-holder-holder'>
                <div className="header">
                    <h3>Top Picks</h3>
                    <p>See out top pick of cities with good artisans</p>

                    <div className="toppick-holder">
                        {this.topPicksCardList()}
                    </div>
                </div>
            </div>
        );
    }
}

export default TopPicks;
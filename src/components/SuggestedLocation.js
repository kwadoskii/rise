import React, { Component } from 'react';
import Location from './LocationCard';
import { locations } from '../helpers/data';

class SuggestedLocation extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            locations: locations()
        }
    }
    
    locationList(){
        return this.state.locations.map((loc) => {
            return (
                <Location
                    state={loc.state}
                    noOfSMEs={loc.noOfSMEs}
                    noOfArtisans={loc.noOfArtisans}
                    key={loc.id}
            />);
        });
    }

    render() {
        return (
            <div className='suggested-holder'>
                <div className="header">
                    <h3>Suggested Locations</h3>
                    <p>See out top pick of cities with good artisans</p>

                    <div className="location-holder row" >
                        {this.locationList()}
                    </div>
                </div>            
            </div>
        );
    }
}

export default SuggestedLocation;
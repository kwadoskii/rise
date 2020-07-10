import React, { Component } from 'react';
import { availableCate } from '../helpers/data';
import AvailableCategoryCard from './AvailableCategoryCard';

class AvailabeCategory extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            availableCates: availableCate()
        }
    }

    availableCatesList(){
        return this.state.availableCates.map(cate => {
            return (
                <AvailableCategoryCard
                    imgPath={cate.imgPath}
                    localServices={cate.localServices}
                    intlServices={cate.intlServices}
                    payOnDelivery={cate.payOnDelivery}
                    key={cate.id}
                />
            );
        });
    }
    
    render() {
        return (
            <div className='suggested-holder'>
                <div className="header">
                    <h3>Available Categories</h3>
                    <p>See out top pick of cities with good artisans</p>

                    <div className="catergotyCard-holder">
                        {this.availableCatesList()}
                    </div>
                </div>
            </div>
        );
    }
}

export default AvailabeCategory;
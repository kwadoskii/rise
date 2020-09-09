import React, { Component } from "react";
import { availableCate } from "../helpers/data";
import AvailableCategoryCard from "./AvailableCategoryCard";

class AvailabeCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableCates: availableCate(),
    };
  }

  availableCatesList() {
    return this.state.availableCates.map((cate) => {
      return (
        <AvailableCategoryCard
          imgPath={cate.imgPath}
          category={cate.category}
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
      <div className="suggested-holder">
        <div className="header">
          <h3>Available Categories</h3>
          <p>See out top pick of cities with good artisans</p>

          <div className="row container-fluid" style={{ margin: "auto" }}>
            {this.availableCatesList()}

            <div className="more-cate">
              <p>LOAD MORE CATEGORIES</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AvailabeCategory;

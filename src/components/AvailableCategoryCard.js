import React from "react";

const AvailableCategoryCard = (props) => {
  return (
    <div className="col-md-3 cate-holder">
      <div className="cate-card-image">
        <div className="cate-image" style={{ backgroundImage: `url(${props.imgPath})` }}>
          <p className="category">{props.category}</p>
        </div>

        <div className="cate-cate-details">
          <div className="locals">
            <p>
              Local Services : <span className="xgrey">{props.localServices}</span>
            </p>
            <hr />
            <p>
              International Services : <span className="xgrey">{props.intlServices}</span>
            </p>
            <hr />
            <p>
              Pay on Delivery : <span className="xgrey">{props.payOnDelivery}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCategoryCard;

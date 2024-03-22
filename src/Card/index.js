import React from "react";

const Card = () => {
  return (
    <div className="">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://wonted-react.vercel.app/assets/images/awards/1.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Nominated</h5>
              <p className="card-text">
                International Thriller Writers Award for Best Novel (These Toxic
                Things)
              </p>
              <p className="card-text">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd time */}
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://wonted-react.vercel.app/assets/images/awards/3.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Guest of Honor</h5>
              <p className="card-text">
                International Thriller Writers Award for Best Novel (These Toxic
                Things)
              </p>
              <p className="card-text">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd time */}

      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://wonted-react.vercel.app/assets/images/awards/4.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Winner</h5>
              <p className="card-text">
                International Thriller Writers Award for Best Novel (These Toxic
                Things)
              </p>
              <p className="card-text">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

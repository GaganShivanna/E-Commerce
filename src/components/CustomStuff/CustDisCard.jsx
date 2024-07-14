import discount from "../../assets/discount.png";
import React from "react";

function CustDisCard() {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={discount} className="card-img-top" alt="Discount" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={discount} className="card-img-top" alt="Discount" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={discount} className="card-img-top" alt="Discount" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
      <div class="card text-center">
        <div class="card-header fs-1">
          Featured
        </div>
        <div></div>
            
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-body-secondary">
          2 days ago
          </div>
        </div>
    </>
  );
}

export default CustDisCard;

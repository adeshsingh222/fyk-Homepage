import React from "react";
import "./body.css";
import plate from "../images/pinar-kucuk-Ae7jQFDTPk4-unsplash 1.png";
import deliveryBoy from "../images/food-delivery-boy.png";
import fohBoh from "../images/foh-boh.png";
function Body() {
  return (
    <div>
      <div className="full-container-1">
        <div className="container">
          <div className="header-3">
            <div className="text-container-1">
              <h4>How we are different from other delivery apps?</h4>
              <p>
                FYK makes it easy for you to discover and get what you want.
                Delivered to you quickly, reliably, and affordably.
              </p>
            </div>
            <div className="image-container-1">
              <img src={plate} alt="plate" className="plate-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="full-container-2">
        <div className="container">
          <div className="header-4-contact-us">
            <h3>Contact Us</h3>
            <p>
              For us, it’s not just brining you good food from your favorite
              restaurants. It’s about making a connection, which is why we sit
              down with the chefs, dreaming up menus that will arrive fresh and
              full of flavor. Try us!
            </p>
            <button>Learn more</button>
          </div>
          <div className="customer-feedback">
            <h4>Customer Review</h4>
          </div>
        </div>
      </div>

      <div className="full-container-3">
        <div className="container">
          <div className="header-5">
            <div className="text-container-2">
              <h4>Sign up to FYK and get Paid</h4>
              <p>
                FYK makes it easy for you to discover and get what you want.
                Delivered to you quickly, reliably, and affordably.
              </p>
            </div>
            <div className="image-container-2">
              <img
                src={deliveryBoy}
                alt="delivery-boy"
                className="delivery-boy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="full-container-4">
        <div className="container">
          <div className="header-6">
            <div className="text-container-3">
              <h4>Grow your business with FKY</h4>
              <p>
                Businesses large and small partner with FYK to reach new
                customers, increase order volume, and drive more sales.
              </p>
            </div>
            <div className="image-container-3">
              <img
                src={fohBoh}
                alt="restraunt-staff"
                className="restraunt-staff"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="full-container-2">
        <div className="container">
          <div className="header-4-contact-us">
            <h4>Restaurants in your pocket</h4>
            <p>
              Order from your favorite restaurants, with the all - new FYK app.
            </p>
            <p>Google Play</p>
            <p>App Store</p>
          </div>
        </div>
      </div>

      <div className="full-container-6">
        <div className="container">
          <div className="header-6-contact-us">
            <h3>Contact Us</h3>
            <p>
              For us, it’s not just brining you good food from your favorite
              restaurants. It’s about making a connection, which is why we sit
              down with the chefs, dreaming up menus that will arrive fresh and
              full of flavor. Try us!
            </p>
            <button>Learn more</button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Body;

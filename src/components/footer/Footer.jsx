import appleStore from "../../Images/apple-store.png";
import playStore from "../../Images/playstore.png";

import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer_1">
        <div className="common">
          <div className="download_section">
            <h2>Download App</h2>
            <div>
              <div>
                <img src={playStore} alt="playstore" />
              </div>
              <div>
                <img src={appleStore} alt="applestore" />
              </div>
            </div>
          </div>
          <div className="contact">
            <div>
              <h2>Contact</h2>

              <h4>
                General Queries - <a href="#" >support@coinswitch.co</a>
              </h4>
            </div>
          </div>
        </div>

        <div className="company common">
          <h2>Company</h2>
          <h4>About us</h4>
          <h4>Careers</h4>
          <h4>Press</h4>
        </div>
        <div className="products common">
          <h2>Products</h2>
          <h4>Crypto Rupee Index (CRE8)</h4>
          <h4>Systematic Investment Plan</h4>
        </div>
        <div className="policy common">
          <h2>Policies</h2>
          <h4>T & C</h4>
          <h4>AML Policy</h4>
          <h4>Privacy Policy</h4>
        </div>
        <div className="buy_crypto common">
          <div className="buy_crypto_section">
            <div>
              <h2>Buy Crypto</h2>
              <div className="inside_buy_crypto_section">
                <h4>Buy BTC</h4>
                <h4>Buy ETH</h4>
                <h4>Buy DOGE</h4>
                <h4>Buy SHIB</h4>
              </div>
            </div>
            <div className="right_side_of_inside_buy_crypto_section">
              <h4>Buy Ripple</h4>
              <h4>Buy Tether</h4>
              <h4>Buy Litecoin</h4>
              <h4>Buy Tron</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_2">
      <h4>© 2022 Crypto Trade. All rights reserved.</h4>

      </div>
    </>
  );
};

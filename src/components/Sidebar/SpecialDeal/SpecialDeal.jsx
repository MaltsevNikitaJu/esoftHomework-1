import "./SpecialDeal.css";
import clockIcon from "../../../assets/clock-icon.svg";
import closeIcon from "../../../assets/close-icon.svg";

export default function SpecialDeal() {
  return (
    <div className="deal-container">
      <div className="deal-content-container">
        <div className="deal-main-content">
          <div className="deal-header-container">
              <div className="deal-header-content">
                <div className="deal-header">
                    <div className="deal-header-img"><img src={clockIcon} alt="clock icon" /></div>
                    <div className="deal-header-text">Special deal!</div>
                </div>
              </div>
          </div>
          <div className="deal-body-contaner">
              <div className="deal-body-text">Register now to unlock exclusive offers and discounts</div>
              <div className="deal-body-text-timer">
              <div className="deal-body-text">Offer expires in:</div>
              <div className="deal-body-timer">0:59:59</div>
              </div>
          </div>
        </div>
        <div className="deal-close-container">
          <div className="deal-close"><img src={closeIcon} alt="close icon" /></div>
        </div>
      </div>
    </div>
  );
}

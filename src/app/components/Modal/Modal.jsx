import {FaCalendarAlt } from 'react-icons/fa';
import './Modal.css';
export default function Modal() {
  return (
    <div className="modalRight">
    <div className="modal">
      <div className="priceHeader">
        <div className="discountHeader">₹1,49,086</div>
        <div className="money">₹1,00,086</div>
        <div className="time">/Night</div>
      </div>

      <div className="discount">
        <div className="inner">
          <p className="text">
          Special discounts available!!
          </p>
          <button className="discountButton">
            Unlock Price
          </button>
        </div>
      </div>

      <div className="booking-form">
        <div className="form-group">
          <button id="date-picker" className="date-picker-button">
          <FaCalendarAlt size={15} color="#888" />
            Check in - Check out
          </button>
        </div>

        <div className="form-group">
         
          <select id="guest-select" className="guest-select">
            <option value="">2 guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
          </select>
        </div>

        <button className="check-availability-button">Check Availability</button>
      </div>
    </div></div>
  )
}

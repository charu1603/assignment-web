import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div className='location'>
      <h2 className='title'>Location</h2>
   
      <div className="locationMap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.34595228118!2d77.2410728792402!3d23.199639471303872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1734113859575!5m2!1sen!2sin"></iframe>
      </div>
   
      <div className="locationButton">
        <button className='location'>Get Direction</button>
      </div>
    </div>
  );
}

export default Location;

import React from "react";
import "./About.css";
import { FaRegStar } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { IoMdPaw } from "react-icons/io";
import { LuSquareParking } from "react-icons/lu";

const About = () => {
    const tags=[
        {
            id:"1",
            icon : <IoHome />,
            tagLine:"Entire Villa"

        },
        {
            id:"2",
            icon : <BsFillPeopleFill />,
            tagLine:"6-12 Guests"

        },
        {
            id:"3",
            icon : <IoBed />,
            tagLine:"8 Bedrooms"

        },
        {
            id:"4",
            icon : <IoMdPaw />,
            tagLine:"Pet-Friendly",

        },
    ]
    const amenities =[
        {
            id:"1",
            heading:"4 Bedrooms",
            icon:<IoBed />,
        },
        {
            id:"2",
            heading:"Free parking",
            icon:<LuSquareParking />,
        },
        {
            id:"3",
            heading:"4 Bedrooms",
            icon:<IoBed />,
        },
        {
            id:"4",
            heading:"12 Guests",
            icon:<BsFillPeopleFill />,
        },
        {
            id:"5",
            heading:"Air conditioning",
            icon:<LuSquareParking />,
        },
        {
            id:"6",
            heading:"12 Guests",
            icon:<BsFillPeopleFill />,

        }
    ]
  return (
    <div className="About">
      <div className="aboutHead">
        <div className="aboutHeadLeft">
          <div className="aboutStar">
            <FaRegStar className="star"/>
          </div>
          <div className="ratings">4.5/5   | </div>
          <div className="reviews"> 105 reviews</div>
        </div>
        <div className="aboutHeadRight">
          <div className="share">
            <BsShare />
          </div>
          <div className="likes">
            <FaRegHeart />
          </div>
        </div>
      </div>
      <div className="aboutTags">
<div className="tags">
    {tags.map((item)=>(
       <> <div className="tag" key={item.id}>
        <span>{item.icon}</span>
        <p>{item.tagLine}</p>
            </div>
            <span>●</span></>
    ))}
</div>
      </div>
      <div className="aboutContent">
        <h2>About</h2>
        <ul>
          <li>
            Tucked away cosily in the lap of nature, this is the perfect
            destination getaway for a vacation<br></br> trip near Delhi and Chandigarh.
            The tourist-favourite Bhimtal Lake is only a stones throw away
          </li>
          <li>
            The tourist-favourite Bhimtal Lake is only a stones throw away. Read
            more
          </li>
        </ul>
      </div>
      <div className="aboutAmenities">
        <h2>Amenities</h2>
        <div className="AmenitiesList">
          <div className="left">
            <div><IoBed /> 4 Bedrooms</div>
            <div><LuSquareParking />12 Guests</div>
            <div><IoBed /> 4 Bedrooms</div>
          </div>
          <div className="right">
            <div><LuSquareParking />4 Bedrooms</div>
            <div><IoBed />12 Guests</div>
            <div><LuSquareParking />4 Bedrooms</div>
          </div>
        </div>
        <div className="">
          <button className="Amenities-button">View all Amenities</button>
        </div>
      </div>
      <div className="aboutMeals">
        <h2>Meals</h2>
        <p>
          A cook is available to prepare local specialities and a delicious
          spread of home-cooked meals all day, at an additional charge
        </p>
        <div className="mealType">
            <div className="vegType">
            <div className="veg"><span></span></div>
            Veg</div>
            <div className="non-vegType">
            <div className="non-veg"><span></span></div>
            Non Veg
        </div></div>
        <div className="aboutMealsButtons">
          <button>View menu</button>
          <button>Meal rate Card</button>
        </div>
      </div>
    </div>
  );
};

export default About;

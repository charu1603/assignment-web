import Image from "next/image";
import Navbar from "../app/components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Location from "./components/Location/Location";
import RoomCards from "./components/RoomCards/RoomCards";
import './page.css';
export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
    <div className="mainContent">
       
    <div className="leftContent">
    
    <About/>
    <Cards/>
<Location/>
 <RoomCards/>
      </div>
      <div className="rightContent">
        <Modal/>
      </div></div>
      <Footer/>
    </>
  );
}

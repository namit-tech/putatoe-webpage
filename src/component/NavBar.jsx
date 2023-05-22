import React from 'react';
import vg from "../assets/logo.jpg";
import img1 from "../assets/airtel.png";
import img2 from "../assets/jio.png";
import img3 from "../assets/vodafone.png";
import img4 from "../assets/bsnl.png";
import upi from "../assets/qr code.jpg";
import grocery from "../assets/grocery.jpg";
import consult from "../assets/consultancy.png";
import { FaHome, FaMale, FaList, FaFacebookMessenger, FaSearchLocation, FaBell, FaShoppingCart, FaMobile, FaTv, FaRupeeSign, FaNewspaper, FaBlog, FaLayerGroup, FaGasPump, FaLightbulb, FaWater, FaArrowRight, FaVolumeUp } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <nav>
                <img src={vg} alt="logo" className='logo' />
                <main>
                    <div className='navigations'>
                        <FaHome className='icon home' />
                        <Link>Home</Link>
                    </div>
                    <div className='navigations'>
                        <FaMale className='icon profile' />
                        <Link>Profile</Link>
                    </div>
                    <div className='navigations'>
                        <FaList className='icon list' />
                        <Link>Follow List</Link>
                    </div>
                    <div className='navigations'>
                        <FaFacebookMessenger className='icon chat' />
                        <Link>Chat</Link>
                    </div>
                </main>
                <div className='search'>
                    <input type="text" placeholder='Search Here' />
                    <FaSearchLocation className='locate' />
                    <h1 className='location'>New Delhi</h1>
                    <FaBell className='img' />
                    <FaShoppingCart className='img' />
                </div>
            </nav>
            <header>
                <div className='section-1'>
                    <h1 className='head-1'>RECHARGE</h1>
                    <p className='text-1'>with ease, with Putatoe!</p>
                    <div className="image">
                        <img src={img1} alt="airtel" />
                        <img src={img2} alt="jio" />
                        <img src={img3} alt="vi" />
                        <img src={img4} alt="bsnl" />
                    </div>
                    <div className="btns">
                        <button className="btn1">Recharge Now</button>
                        <button className="btn2">Learn More</button>
                    </div>
                </div>
                <div className="section-2">
                    <img src={upi} alt="UPI" />
                </div>
            </header>
            <hr />
            <section>
                <div className="payment">
                    <div className="area-1">
                        <FaMobile className="symbol" />
                        <p>Prepaid Mobile <br /> Recharge</p>
                        <FaTv />
                        <p>DTH Recharge</p>
                        <FaRupeeSign className="symbol" />
                        <p>Loans</p>
                    </div>
                    <div className="area-2">
                        <FaVolumeUp className="symbol" />
                        <p>Promotion</p>
                        <FaNewspaper className="symbol" />
                        <p>News</p>
                        <FaBlog className="symbol" />
                        <p>Blog</p>
                    </div>
                    <div className="area-3">
                        <FaLayerGroup className="symbol" />
                        <p>Jobs</p>
                        <FaNewspaper className="symbol" />
                        <p>Anonymous <br /> Feedback</p>
                        <FaGasPump className="symbol" />
                        <p>Gas Booking</p>
                    </div>
                    <div className="area-4">
                        <FaLightbulb className="symbol" />
                        <p>Electricity Bill</p>
                        <FaWater className="symbol" />
                        <p>Water Bill</p>
                        <FaArrowRight className="symbol" />
                        <p>See More</p>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <div className="box-1">
                    <h1>All Popular Services Providers</h1>
                </div>
                <br /> <br />
                <div className="box-1">
                    <h1>Services We Provide</h1>
                </div>
            </section>
            <hr />
            <section className='design'>
                <div className="card">
                    <img src={grocery} alt="grocery" className='grocery' />
                    <div className="gradient"></div>
                    <div className="p-1">
                        <p>20% Off</p>
                    </div>
                    <div className="p-2">
                        <p>Daily Needs</p>
                    </div>
                </div>
                <div className="card">
                    <img src={consult} alt="consult" className='consult' />
                    <div className="gradient"></div>
                    <div className="p-1">
                        <p>20% Off</p>
                    </div>
                    <div className="p-2">
                        <p>Consultancy</p>
                    </div>
                </div>

            </section>
        </>
    )
};
export default NavBar;
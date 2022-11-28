import React from 'react';
import img1 from '../../../assest/banner image/1.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="hero w-full">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src={img1} alt ="" className=" rounded-lg  shadow-2xl w-1/2" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">About Us!</h1>
                        <p className="py-6">Laptop World Bangladesh is the pioneer of the E-commerce industry who has brought a new trend of online retail platform in Bangladesh and change the shopping trend of Bangladesh. Daraz Bangladesh create new platform for our all generation alone with who loves to do shopping from online platform. As I completed my internship under Commercial Department as a Vendor Acquisition Executive at Daraz Bangladesh therefore while I was preparing the report, I have tried to bring possible information regarding the Commercial Department and its work. First of all, I have provided the Introduction of my report. Then I provide the overview and history of Daraz Bangladesh. Later on, I have discussed about service offerings and Daraz operational network organogram and its vision for the future. </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
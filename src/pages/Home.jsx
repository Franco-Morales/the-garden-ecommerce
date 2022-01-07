import React from 'react';

import "../scss/pages/home.scss";

import Header from "../components/Header";
import CardProduct from "../components/Card";

import CualityIcon from "../assets/icons/comercio.png";
import LocalizationIcon from "../assets/icons/localizacion.png";
import SecureIcon from "../assets/icons/seguro.png";
import mockupDataJson from "../assets/json/mockup-data.json";

function Home() {

    const data = mockupDataJson;

    return (  
        <>
            <Header />
            <main id="landing" className='container'>
                <section id="ecommerce-desc">
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className="card shadow bg-dark text-light">
                                <div className='float-icon'> 
                                    <img src={CualityIcon} alt="cuality icon" className="icon"/>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title mb-3">High cuality products</h3>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, voluptatum repudiandae, corrupti quia deserunt adipisci at quasi dolorum delectus deleniti temporibus. Quibusdam cupiditate alias aliquam? Minus laborum aperiam soluta voluptates.</p>
                                </div>
                            </div>                        
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className="card shadow bg-dark text-light">
                                <div className='float-icon'> 
                                    <img src={LocalizationIcon} alt="world icon" className="icon"/>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title mb-3">Worldwide shipping</h3>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, voluptatum repudiandae, corrupti quia deserunt adipisci at quasi dolorum delectus deleniti temporibus. Quibusdam cupiditate alias aliquam? Minus laborum aperiam soluta voluptates.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className="card shadow bg-dark text-light">
                                <div className='float-icon'> 
                                    <img src={SecureIcon} alt="secure icon" className="icon"/>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title mb-3">Secure first</h3>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, voluptatum repudiandae, corrupti quia deserunt adipisci at quasi dolorum delectus deleniti temporibus. Quibusdam cupiditate alias aliquam? Minus laborum aperiam soluta voluptates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='sale-product' className='mt-5'>
                    <div className="row">
                        <h3>Discounts  of the day</h3>
                    </div>
                    <div className="row">
                            {
                                data.filter( el => el.isOnSale ).map( (el, index) => {
                                    return (
                                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                                            <CardProduct product={el}/>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
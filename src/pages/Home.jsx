import React from 'react';

import "../scss/home.scss";
import Header from "../components/Header";

import CualityIcon from "../assets/icons/comercio.png";
import LocalizationIcon from "../assets/icons/localizacion.png";
import SecureIcon from "../assets/icons/seguro.png";


function Home() {
    return (  
        <>
            <Header />
            <main id="landing">
                <div className='container'>
                    <section id="ecommerce-desc">
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className="card shadow-lg bg-dark text-light">
                                    <div className='float-icon bg-light'> 
                                        <img src={CualityIcon} alt="cuality icon" className="icon"/>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title mb-3">High cuality products</h3>
                                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, voluptatum repudiandae, corrupti quia deserunt adipisci at quasi dolorum delectus deleniti temporibus. Quibusdam cupiditate alias aliquam? Minus laborum aperiam soluta voluptates.</p>
                                    </div>
                                </div>                        
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className="card shadow-lg bg-dark text-light">
                                    <div className='float-icon bg-light'> 
                                        <img src={LocalizationIcon} alt="world icon" className="icon"/>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title mb-3">Worldwide shipping</h3>
                                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, voluptatum repudiandae, corrupti quia deserunt adipisci at quasi dolorum delectus deleniti temporibus. Quibusdam cupiditate alias aliquam? Minus laborum aperiam soluta voluptates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className="card shadow-lg bg-dark text-light">
                                    <div className='float-icon bg-light'> 
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
                </div>
            </main>
        </>
    );
}

export default Home;
import React from 'react';

import "../scss/pages/home.scss";
import Header from "../components/Header";

import CualityIcon from "../assets/icons/comercio.png";
import LocalizationIcon from "../assets/icons/localizacion.png";
import SecureIcon from "../assets/icons/seguro.png";
import PlantMockup from "../assets/images/lily-plant.jpg";


function Home() {
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
                <section id='sale-product'>
                    <div className="row">
                        { ["a","b","c"].map( (el , index) => {
                            return (
                                <div className="col-12 col-md-4" key={index}>
                                    <div className="card shadow">
                                        <img src={PlantMockup} className="card-img-top" alt="product_plant" />
                                        <div className="card-body">
                                            <h5 className="card-title">Generic "{el}" Indoor Plant <span className="badge bg-success ms-4">Sale</span></h5>
                                            <h6 className="card-subtitle">
                                                <span className="text-success me-2">$46</span>
                                                <span className="text-muted text-decoration-line-through">$46</span>
                                            </h6>
                                        </div>
                                        <div className='card-body d-grid gap-2 d-md-flex justify-content-md-center'>
                                            <button className="btn btn-outline-artichoke">View Product</button>
                                            <button className="btn btn-amazon">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
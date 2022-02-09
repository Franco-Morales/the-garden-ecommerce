import React,{ useState, useEffect } from 'react';

import "../scss/pages/home.scss";

import Header from "../components/Header";
import Loading from "../components/Loading";
import ItemList from './ItemList/ItemList';

import CualityIcon from "../assets/icons/comercio.png";
import LocalizationIcon from "../assets/icons/localizacion.png";
import SecureIcon from "../assets/icons/seguro.png";

import { getProductsBySale } from "../services/firebaseSvc";


const CardInfo = ({ info }) => {
    return (
        <div className="card shadow bg-dark text-light">
            <div className='float-icon'> 
                <img src={info.Img} alt="cuality icon" className="icon" loading='lazy'/>
            </div>
            <div className="card-body">
                <h3 className="card-title mb-3">{info.title}</h3>
                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, voluptatum repudiandae, corrupti quia deserunt adipisci at quasi dolorum delectus deleniti temporibus. Quibusdam cupiditate alias aliquam? Minus laborum aperiam soluta voluptates.</p>
            </div>
        </div> 
    );
}

function Home() {
    let arrayCardsInfo = [
        { title: "High cuality products", Img: CualityIcon },
        { title: "Worldwide shipping", Img: LocalizationIcon },
        { title: "Secure first", Img: SecureIcon },
    ];

    const [ productSale, setProductSale ] = useState([]);
    const [ loading, setLoading ] = useState( true );

    useEffect(() => {
        getProductsBySale()
            .then( resp => { 
                setProductSale(resp);
                setLoading(false);
            })
            .catch( error => console.error(error));
    }, [])

    return (  
        <>
            <Header />
            <main id="landing" className='container'>
                <section id="ecommerce-desc">
                    <div className='row'>
                        {arrayCardsInfo.map((el, index) => {
                            return (
                                <div className='col-12 col-md-6 col-lg-4' key={index}>
                                    <CardInfo info={el}/>                
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section id='sale-product' className='mt-5'>
                    <div className="row">
                        <h3>Discounts  of the day</h3>
                    </div>
                    <div className="row">
                            { ( loading )? <Loading /> : <ItemList products={productSale}/>}
                    </div>
                </section>
            </main>
        </>
    );
}


export default Home;
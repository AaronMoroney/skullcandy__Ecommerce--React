//dependencies

import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
//img
//import shopBCG from '../images/skullcandyBCG.jpeg'
//styles
import '../styles/components/_allProductsCards.scss'
import '../styles/components/_infinite-carousel.scss'

//components
import ShopNav from '../components/navbar/shopNav.js'



function GetAllProducts() {
    const [productInfo, setProductInfo] = useState([]);
    const URI = 'http://localhost:3000/api/products';

    /*
    ** | fetch
    */

    useEffect(() => {
        fetch(URI) 
        .then((response) => response.json())
        .then((data) => { 
            console.log('data',data);
            setProductInfo(data);
        }); 
    }, []);
  

    return ( 
        <>
            <ShopNav />
            <header style={{display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
                <h4> <span className ='header-year'>skullcandy collection</span></h4>
            </header>
          
            <div className='product__cards__parent'>
                    {productInfo.map(product =>
                        (   
                            <>
                               <Link to={`${product._id}`} >
                                <div className='product__cards'>
                                    <div className='product__cards--img' >
                                        <img 
                                            src={product.imageUrl} 
                                            key={product._id + product.img}
                                            alt={product.altText}
                                            style={{  maxWidth: '100%', height: 'auto'}}
                                        >
                                        
                                        </img>
                                    </div>
                                    <div className='product__cards--name'>
                                        <h2 key={product._id + product.name}> {product.name} </h2>
                                    </div>
                                    <div className='product__cards--price' key={product._id + product.price }>
                                        <h6> $ {product.price} </h6>
                                    </div>
                                </div>
                                </Link>
                               
                            </>
                         
                        )
                    )}
                    </div>  
                    <div className='infinite__carousel--parent'>
                        <h2 style={{color: 'white', opacity: '50%'}}>Infinite Carousel Infinite Carousel Infinite Carousel Infinite Carousel </h2>
                    </div>
        </>
    )     
} 

export default GetAllProducts
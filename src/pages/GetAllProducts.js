//dependencies

import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
//img
//import shopBCG from '../images/skullcandyBCG.jpeg'
//styles
import '../styles/utils/_variables.scss'
//components
import ShopNav from '../components/navbar/shopNav.js'


//useEffectReact
//useState
//calling functions within JSX, returning JSX

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
            <div className='product__cards__parent'>
                    {productInfo.map(product =>
                        (   
                            <Link to={`${product._id}`}>
                             <div>
                                <div className='product__cards--img' >
                                    <img 
                                        src={product.imageUrl} 
                                        key={product._id + product.img}
                                        alt={product.altText}
                                        style={{width: '25%'}}
                                    >
                                    </img>
                                </div>
                                <div className='product__cards--name'>
                                    <h4 key={product._id + product.name}> {product.name} </h4>
                                </div>
                                <div className='product__cards--price' key={product._id + product.price }>
                                    <h4> $ {product.price} </h4>
                                </div>
                                </div>
                            </Link>
                        )
                    )}
            </div>  
        </>
    )     
} 

export default GetAllProducts
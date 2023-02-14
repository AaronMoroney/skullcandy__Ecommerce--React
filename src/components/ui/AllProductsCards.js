import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
//img
//import shopBCG from '../images/skullcandyBCG.jpeg'
//styles
import '../../styles/components/_allProductsCards.scss'



function AllProductsCards() {
    const [allProductsInfo, setAllProductsInfo] = useState([]);
    const URI = 'http://localhost:3000/api/products';

    /*
    ** | fetch
    */

    useEffect(() => {
        fetch(URI) 
        .then((response) => response.json())
        .then((data) => { 
            console.log('data',data);
            setAllProductsInfo(data);
            
        }); 
    }, []);

  
  

    return ( 
        <>
        <header style={{display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
                <h4> <span className ='header-year'>skullcandy collection</span></h4>
        </header>
            <div className='product__cards__parent'>
                
                {allProductsInfo.map(product =>
            
                  
                    
                    (   
                        
                        <>
                            <Link to={`${product._id}`} >
                            <div className='product__cards'>
                                <div className='product__cards--img' >
                                    <img 
                                        src={product.imageUrl} 
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
        </>
    )
}

export default AllProductsCards
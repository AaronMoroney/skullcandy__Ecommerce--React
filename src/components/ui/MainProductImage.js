//dependencies
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//styles
import '../../styles/components/_mainProductImage.scss'
//axios
import Axios from 'axios'

function SingleProductImg() {
    //states
    const [singleProductInfo, setSingleProductInfo] = useState([]);
    const [altImage, setAltImage] = useState([]);
    const [updatedImage, setUpdatedImage ] = useState([]);
    //initialized states
    const [activeImage, setActiveImage ] = useState(false);
    //toggle for active image
    const changeImage = () => {
        setActiveImage(prev => !prev)
    }

    //Fetch
    let location = useLocation();
    let slicedString = location.pathname.slice(10);
    let URI = 'http://localhost:3000/api/products/' + slicedString;

    useEffect(() => {
        Axios.get(URI, {} 
        ).then(async(response) => {
            let imageDataResponse = response.data.imageUrlAlt;
            setAltImage(imageDataResponse);
            setSingleProductInfo(response.data);
        }).catch((error)=>{console.error(error);});
    }, []);
    
    //global variables 
    let counter = 1;
    //handle click function
    const handleClick = (event) =>  {
        setUpdatedImage(event.target.getAttribute('src'));
    }

    return (
        <>
            <div className='image__component--parent'>
                <div className='main__image--wrapper'>

                    <div className='main__image--numbers__parent'>
                        {altImage.map(() => {
                            return (<h2 className='main__image--numbers'>{counter++}</h2>)
                        })}
                    </div>

                    {activeImage ? 
                    <img src={updatedImage} alt = '' className='main__image'></img>
                    : 
                    <img src={singleProductInfo.imageUrl} alt = {singleProductInfo.alt} className='main__image'></img>
                    }

                    <div className='image__selector--parent'>
                        {altImage.map((image, key) => 
                            (<div className='image__selector--image__parent'> 
                                <img 
                                className = 'image__selector--image' 
                                src = {'http://localhost:3000/images/' + image} 
                                alt=''
                                onClick={function(event){
                                    changeImage(); 
                                    handleClick(event, key);
                                }
                            }/>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProductImg
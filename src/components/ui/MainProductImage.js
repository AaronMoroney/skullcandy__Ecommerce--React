//dependencies
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//styles
import '../../styles/components/_mainProductImage.scss'
//axios
import Axios from 'axios'



/*
** alt image 1 = same as main image in the JSON
** conditionally render a mainImage() funciton or an updatedMainImage function
** depending on if the alt images are active or not 
**
** If active, find the index 
** of the active image, take the image from that data, and use it to populate the
** updatedImageFunction
**
** When selected, find the index of that image, and use it to trigger the
** left hand numbers panel
**
*/

function SingleProductImg() {

    const [singleProductInfo, setSingleProductInfo] = useState([]);
    const [altImage, setAltImage] = useState([]);
    let location = useLocation();
    
    let slicedString = location.pathname.slice(10);
    let URI = 'http://localhost:3000/api/products/' + slicedString;

    useEffect(() => {
        //axios get
        Axios.get(URI, {} 
        ).then(async(response) => {
         
            let imageDataResponse = response.data.imageUrlAlt;
            setAltImage(imageDataResponse);
            setSingleProductInfo(response.data);
        }).catch((error)=>{console.error(error);});
    }, []);

    
    let counter = 1;
    /*
    let length = altImage.length;
    
    while(counter <= length) {
        //var imageNumbers = counter++;
        console.log('imageNumbers', imageNumbers);
    }
    */
    
    
    return (
        <>
            <div className='image__component--parent'>
                <div className='main__image--wrapper'>
                    <div className='main__image--numbers__parent'>
                        {altImage.map(() => {
                            return (<h2 className='main__image--numbers'>{counter++}</h2>)
                        })}
                    </div>
                    <img src={singleProductInfo.imageUrl} alt = {singleProductInfo.alt} className='main__image'></img>
                    <div className='image__selector--parent'>
                        {altImage.map(image => 
                            (<div className='image__selector--image__parent'>
                                <img className = 'image__selector--image' src = {'http://localhost:3000/images/' + image} alt=''></img> 
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProductImg
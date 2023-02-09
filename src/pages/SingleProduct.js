import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';


function SingleProduct() {

    let location = useLocation();
    
    let slicedString = location.pathname.slice(10);
    console.log(slicedString);

    let URI = 'http://localhost:3000/api/products/' + slicedString;

    useEffect(() => {
        fetch(URI) 
        .then((response) => response.json())
        .then((data) => { 
            console.log('data',data);
           
        }); 
    }, []);
    
    return (
        <>
            <h1>Hello!</h1>
        </>
    )
}

export default SingleProduct
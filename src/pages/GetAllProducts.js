function GetAllProducts() {


    const URI = 'http://localhost:3000/api/products';

    /*
    ** | fetch
    */

    fetch(URI) 
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // works without console.log, good for access however   
    });  
    return (
        <div>
           
        </div>
    ) 
}

export default GetAllProducts
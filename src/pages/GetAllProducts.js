//components
import ShopNav from '../components/navbar/shopNav.js'
import AllProductCards from '../components/ui/AllProductsCards'
import InfiniteCarousel from '../components/ui/InfiniteCarousel'

function GetAllProducts() {
    return ( 
        <>
            <ShopNav />
            <AllProductCards />
            <InfiniteCarousel />
        </>
    )     
} 

export default GetAllProducts
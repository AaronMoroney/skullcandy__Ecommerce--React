//dependencies
import { Link } from "react-router-dom";
//images
import skullcandywordlogo from '../../images/logos/skullcandylogowordblack.jpeg'
function ShopNav() {
    return (
        <>
            <nav style={{height: '6vh', backgroundColor: '#000000'}}>
                <div className="logo__container"> 
                    <img src={skullcandywordlogo} alt='skullcandy wordmark with logo' style={{width: '30%', backgroundBlendMode: 'hardlight'}}></img>
                </div>
                <div>
                    <ul >
                       
                        <Link to = '/'> {/* home endpoint */}
                            <li className="li"> Home</li>
                        </Link>
                        <Link to ='/products'> {/* get all products endpoint */}
                            <li className="li"> Store</li>
                        </Link>
                      
                        <Link> {/* cart endpoint */}
                            <li className="li"> Cart </li>
                        </Link>
                        <Link> {/* cart endpoint */}
                            <li className="li"> Github  </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default ShopNav
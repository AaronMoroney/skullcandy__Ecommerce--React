//dependencies
import { Link } from "react-router-dom";
//styles
import '../../styles/components/_buttons.scss'


function Button() {
    return (
        <>
            <Link to='/products'>
                <button className="cta__button" style={{paddingTop: '10px'}} >
                    <h6>VIEW ALL</h6>
                </button>
            </Link> 
        </>
    )
}

export default Button
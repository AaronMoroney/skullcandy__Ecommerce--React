import whiteLogo from '../../images/logos/skullcandylogowhite.png'
//components
import Button from '../buttons/CtaButton';
//styles
import '../../styles/components/_cta.scss';

function Cta() {
    return (
        <>
            <div className='home__cta'>
                <div className='home__cta--logo__div'>
                        <img src ={whiteLogo} alt='white skullcandy logomark' style={{width: '50px'}}></img>
                        <div className='line__parent'>
                            <div className='line'></div>
                            <div className='line--right'></div>
                        </div>
                    </div>
                    <div className='home__cta--info__div'>
                        <div>
                            <h6>NEW FOR 2023</h6>
                            <h1 className='title'>Discover the deepest dimension of sound<span className='dot'>.</span> </h1>
                        </div>
                        <h2>Crusher ANC  ®  - Personalized Sound, <br></br> 100% Noise Cancelling + <br></br>Wireless Headphones.</h2>
                        <Button/>
                    </div>
            </div>
        </>  
    )
}

export default Cta
    
       
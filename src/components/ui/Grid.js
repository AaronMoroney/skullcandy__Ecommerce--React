import '../../styles/components/_grid.scss'
//images
import crusher from '../../images/products/crusher4.webp'
import jib from '../../images/products/jib1.webp'
import whiteLogo from '../../images/logos/skullcandylogowhite.png'
import indy from '../../images/products/indy1.webp'
//video
import video from '../../images/video/videoForSkullcandy.mp4'

function Grid() {
    return (
        <>
            <div className='home__grid'>
                <div className='home__grid__parent--items'>

                    <div className='items__top--parent'>

                        <div className='items__accessories'>
                            <h2 style = {{marginLeft: '20px', marginTop: '60px'}}>Accessories</h2>
                            <p style = {{marginLeft: '20px', marginBottom: '30px'}}>View all</p>
                        </div>

                        <div className='items__accessories--img'>
                            <img src={crusher} alt='crusher headphones' style={{width: '100%', backgroundsize: 'contain', paddingTop: '50px'}}></img>
                        </div>
                    </div>

                    <div className='items__middle--parent'>
                        <div className='items__accessories--img'>
                            <img src={jib} alt='jib' style={{width: '100%', backgroundsize: 'contain', paddingTop: '15px' }}></img>
                        </div>
                        <div className= 'items__earphones'>
                            <h2 style = {{marginLeft: '20px', marginTop: '60px'}}>Earphones</h2>
                            <p style = {{marginLeft: '20px', marginBottom: '30px'}}>View all</p>
                        </div>
                    </div>

                    <div className='home__grid__parent--video'>
                        <h2 className='video-text'> Crusher ANC  ®  - Feel The Sound </h2>
                        <video className='video' autoPlay loop muted>
                            <source src={video} type='video/mp4' /> 
                        </video>
                    </div>

                    <div className='items__bottom--parent'>

                        <div className='items__bottom--logo'>
                            <img src={whiteLogo} alt='jib' style={{width: '20%', backgroundsize: 'contain', paddingTop: '15px' }}></img>
                        </div>

                        <div className='items__bottom--img'>
                            <img src={indy} alt='jib' style={{width: '80%', backgroundsize: 'contain', paddingTop: '15px' }}></img>
                        </div>
                        
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Grid


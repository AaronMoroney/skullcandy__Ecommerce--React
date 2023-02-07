import '../../styles/components/_grid.scss'

function Grid() {
    return (
        <>
            <div className='home__grid'>
                <div className='home__grid__parent--items'></div>
                    <div className='items__top--parent'>
                        <div className='items__accessories'>
                            <p>Accessories</p>
                            <p>View all</p>
                        </div>
                        <div>
                            <img></img>
                        </div>
                    </div>
                    <div className='items__bottom--parent'>
                        <div>
                            <img></img>
                        </div>
                        <div className= 'items__earphones'>
                            <p>Earphones</p>
                            <p>View all</p>
                        </div>
                    </div>
                <div className='home__grid__parent--video'></div>
                <div className='home__grid__parent--text'></div>
            </div>
        </>
    )
}

export default Grid


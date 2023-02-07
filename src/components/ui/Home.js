//styles
import '../../styles/components/_home.scss'
//components
import NavbarRight from '../navbar/NavbarRight';
import Grid from '../../components/ui/Grid.js';
import Cta from '../ui/Cta.js'

function Home() {
    return (
        <div>
            <div className='home'>
                <Cta/>
                <Grid />
                <NavbarRight />
            </div>
        </div>
     
    )
}

export default Home

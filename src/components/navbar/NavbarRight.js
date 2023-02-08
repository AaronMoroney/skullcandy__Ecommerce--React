//styles
import '../../styles/components/_nav.scss'
//images
import logoBlack from '../../images/logos/skullcandylogoblack.png'
//components
//import Button from '../../components/buttons/CtaButton'
//icons
import MenuIcon from '@material-ui/icons/Menu';

function NavbarRight() {
    return (
        <>
           <div className='home__nav'>
                <MenuIcon style={{paddingTop: '55px', paddingLeft: '100px'}}/>
                <img src={logoBlack} alt='logo in black' style={{opacity: '80%', width: '100%'}}/>
           </div>
        </>
    )
}
                        
export default NavbarRight
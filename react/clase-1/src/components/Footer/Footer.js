import {Container} from 'react-bootstrap';

const Footer = () => {

    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '0px'
    }

    return(
        <Container fluid className='bg-light p-2 border border-radius' to="/" style={footerStyle}><img src="https://raw.githubusercontent.com/Santiago-Musso/Coderhouse/main/images/logoheader.webp" alt="Logo Heladeria Trapani"></img></Container>
    )
}

export default Footer
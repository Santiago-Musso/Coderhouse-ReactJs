import { Container } from 'react-bootstrap'

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <Container
      fluid
      className='bg-light p-2 border border-radius'
      to='/'
      style={footerStyle}
    >
      <img
        src='https://raw.githubusercontent.com/Santiago-Musso/Coderhouse/main/images/logoheader.webp'
        alt='Logo Heladeria Trapani'
      />
    </Container>
  )
}

export default Footer

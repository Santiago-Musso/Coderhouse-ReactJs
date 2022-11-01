import { Link } from 'react-router-dom'

const ErrorNotFound = () => {
  const containerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: '77.5vh'
  }

  return (
    <div style={containerStyle}>
      <h3>La pagina que buscabas no existe</h3>
      <h3><Link className='text-decoration-none' to='/'>Click Aquí </Link> para volver a home</h3>
    </div>
  )
}

export default ErrorNotFound

import { Link } from 'react-router-dom'

const ShowOrderNumber = ({ children }) => {
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
      <h3>La orden se completo correctamente!</h3>
      <h3><Link className='text-decoration-none' to={`/order/${children}`}>Click Aquí </Link> para ver tu pedido</h3>
    </div>
  )
}

export default ShowOrderNumber

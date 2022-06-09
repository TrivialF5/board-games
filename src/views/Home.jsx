import { Link } from 'react-router-dom';
import Bg from '../assets/img/fondo.jpg';

const Home = () => {

    const bgStyle = {
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    }
  return (
    <div style={bgStyle}>
      <Link to="/simon">Simon</Link>
      <p>sdgadgg</p>
      <p>sfdgfdsgfdsg</p>
      <p>fdgfdsgdsfgs</p>
    </div>
  )
}

export default Home
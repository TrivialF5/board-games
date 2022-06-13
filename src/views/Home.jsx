import Bg from '../assets/img/fondo.jpg'
import simon from '../assets/img/iconoSimon.png'
import Game from '../components/Game'
import TextTitle from '../components/TextTitle'

const Home = () => {
  const bgStyle = {
    backgroundImage: `url(${Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  }
  const gameOptions = [
    {
      name: 'Simon',
      highlightName: 'Says',
      color: 'text-emerald-500',
      path: '/simon',
      icon: simon,
    }, {
      name: 'Chess',
      path: '/chess',
      icon: simon,
    }
  ]


  return (
    <div style={bgStyle}>
      {gameOptions.map(game => (
        <Game 
          key={game.name}
          path={game.path}
          icon={game.icon}
        >
          <TextTitle title={game.name} highlightTitle={game.highlightName} colorText={game.color}/>
        </Game>
      ))}
    </div>
  )
}

export default Home
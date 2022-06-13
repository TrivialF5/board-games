import Bg from '../assets/img/fondo.jpg';
import simon from '../assets/img/iconoSimon.png';
import Game from '../components/Game';
import TextTitle from '../components/TextTitle';

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
        color: 'text-orange-400',
        path: '/simon',
        icon: simon,
      },
      {
        name: 'Simon',
        highlightName: 'Says',
        color: 'text-orange-400',
        path: '/loading',
        icon: simon,
      },  
      
    ]


  return (
    
    <div style={bgStyle}>
      <section className='flex justify-center pt-10'>
        <TextTitle prevTitle = 'e' title = 'Board' highlightTitle='Gaming' colorText = 'text-green-500' />
      </section>
      <section className=' h-3/5 flex justify-center place-items-end   '>
        {gameOptions.map(game => (
          <Game 
            key={game.name}
            path={game.path}
            icon={game.icon}
          > 
            <TextTitle className='text-xl' title={game.name} highlightTitle={game.highlightName} colorText={game.color}/>
          </Game>
        ))}
      </section>
    </div>
  )
}

export default Home
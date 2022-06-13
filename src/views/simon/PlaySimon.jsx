import { useEffect, useState } from 'react'
import ButtonSimon from '../../components/ButtonSimon'
import Counter from '../../components/Counter'

const PlaySimon = () => {
  const [count, setCount] = useState(0)
  const [sequence, setSequence] = useState([])
  const [isPlaying, setIsPlaying] = useState(null)
  //const [isCorrect, setIsCorrect] = useState(false)
  
  const createSequence = () => {
    const newSequence = [...sequence]
    newSequence.push(Math.floor(Math.random() * 4))
    setSequence(newSequence)
    console.log(sequence)
    setCount(count + 1)
  }

  useEffect(() => {
    if (isPlaying === 'pc') {
      createSequence()
    }
  }, [isPlaying])


  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <div className="mt-20 mx-auto relative h-72 overflow-hidden border-8 border-black grid grid-cols-2 gap-2 bg-black rounded-full aspect-square">
        <ButtonSimon 
          value={1}
          onClick={(e) => handleClick(e)}
          color='emerald'
        />
        <ButtonSimon 
          value={2}
          onClick={(e) => handleClick(e)}
          color='orange'
        />
        <ButtonSimon 
          value={3}
          onClick={(e) => handleClick(e)}
          color='sky'
        />
        <ButtonSimon 
          value={4}
          onClick={(e) => handleClick(e)}
          color='amber'
        />
        <Counter start={count}/>
      </div>
      <button 
        className="flex items-center justify-center h-32 pl-5 text-4xl font-semibold uppercase border w-80 rounded-xl mx-auto mt-12 bg-slate-300" 
        onClick={() => setIsPlaying('pc')}>
        play
      </button>
    </>
  )
}

export default PlaySimon
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
    newSequence.push(Math.floor(Math.random() * 4) + 1)
    setSequence(newSequence)
  }

  useEffect(() => {
    setCount(count + 1)
  }, [sequence])
  
  useEffect(() => {
    if (isPlaying === 'pc') {
      createSequence()
    }
  }, [isPlaying])

  const handleClick = (e) => {
    console.log(e.target)
  }

  return (
    <>
      <ul>
        {sequence.map((selected, indice) => (
          <li key={indice}>{selected}</li>
        ))}
      </ul>

      <div className="mt-20 mx-auto relative h-72 overflow-hidden border-8 border-black grid grid-cols-2 gap-2 bg-black rounded-full aspect-square">
        <ButtonSimon 
          value={1}
          onClick={(e) => handleClick(e)}
          color='bg-emerald-400'
          colorActive='bg-emerald-200'
        />
        <ButtonSimon 
          value={2}
          onClick={(e) => handleClick(e)}
          color='bg-orange-400'
          colorActive='bg-orange-200'
        />
        <ButtonSimon 
          value={3}
          onClick={(e) => handleClick(e)}
          color='bg-sky-400'
          colorActive='bg-sky-200'
        />
        <ButtonSimon 
          value={4}
          onClick={(e) => handleClick(e)}
          color='bg-amber-400'
          colorActive='bg-amber-200'
        />
        <Counter start={count}/>
      </div>
      <button 
        className="flex items-center justify-center h-32 text-4xl font-semibold uppercase border w-80 rounded-xl mx-auto mt-12 bg-slate-300" 
        onClick={() => setIsPlaying('pc')}>
        play
      </button>
    </>
  )
}

export default PlaySimon
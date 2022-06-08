
const ButtonDifficulty = ({
  children,
  onClick,
}) => {
  return (
    <button 
      className="flex-1 uppercase bg-purple-300 h-20 w-36 font-bold text-xl hover:bg-purple-500 active:bg-purple-800"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonDifficulty
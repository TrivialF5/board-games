
const ButtonDifficulty = ({
  children,
  onClick,
}) => {
  return (
    <button 
      className="flex-1 bg-violet-400 active:bg-violet-600 h-16 uppercase font-black text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonDifficulty
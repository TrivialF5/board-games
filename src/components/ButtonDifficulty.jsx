
const ButtonDifficulty = ({
  children,
  onClick,
  selected,
}) => {
  return (
    <button 
      className={`flex-1 h-20 text-xl font-bold uppercase w-36 hover:bg-purple-500 ${selected ? "bg-purple-500" : "bg-purple-300"}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonDifficulty
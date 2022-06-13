
const Instrument = ({
  instrument,
  color,
  colorLight,
  icon,
  onClick,
}) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-4 overflow-hidden text-xl font-bold rounded-md h-14 ${colorLight}`}
    >
      <div className={`flex items-center justify-center h-14 w-14 ${color}`}>
        {icon}
      </div>
      <p>{instrument}</p>
    </button>
  )
}

export default Instrument
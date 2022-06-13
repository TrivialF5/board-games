const ButtonSimon = ({
  value,
  onClick,
  color,
  active = false,
}) => {

  return (
    <button 
      value={value}
      onClick={onClick}
      className={`aspect-square duration-200  ${active ? `bg-${color}-200` : `bg-${color}-400`} active:bg-${color}-200`}>
    </button>
  )
}
export default ButtonSimon
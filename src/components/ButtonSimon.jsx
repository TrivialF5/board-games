import { useEffect } from 'react'

const ButtonSimon = ({
  value,
  onClick,
  color,
  colorActive,
  active = false,
}) => {
  // const className = `aspect-square duration-200 ${active ? `${colorActive}` : `${color}`} active:${colorActive}`
  const className = `aspect-square duration-200 ${active ? colorActive : color} active:${colorActive}`

  // useEffect(() => {
  //   console.log('ButtonSimon:', value)
  //   console.log('Active:', active)
  //   className === 'bg-orange-200' ? console.log('orange') : console.log('not orange')
  // }, [active])

  useEffect(() => {
    console.log('ButtonSimon:', value)
  }, [active])

  return (
    <button 
      value={value}
      onClick={onClick}
      className={className}
      selected={active}
    >
    </button>
  )
}
export default ButtonSimon
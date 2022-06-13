import { Link } from 'react-router-dom'

const Game = ({
  children,
  path,
  icon,
}) => {
  return (
    <Link to={path}>
      <div className="flex flex-col h-64 w-64 rounded-3xl border-[1px] border-black z-10 backdrop-brightness-50 items-center justify-center">
        <div className="flex items-center justify-center h-26 aspect-square">
          <img src={icon} alt="" />
        </div>
        {children}
      </div>
    </Link>

  )
}

export default Game
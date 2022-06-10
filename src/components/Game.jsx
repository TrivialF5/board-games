import { Link } from "react-router-dom"

const Game = ({
    children,
    path,
    icon,
}) => {
    return (
        <Link to={path}>
            <div className="flex flex-col h-52 w-52 rounded-3xl border-[2px] border-black z-10 backdrop-opacity-100 shadow-2xl items-center justify-center ">
                <div className="flex items-center justify-center h-32 aspect-square ">
                    <img src={icon} alt="" />
                </div>
                {children}
            </div>
        </Link>

    )
}

export default Game
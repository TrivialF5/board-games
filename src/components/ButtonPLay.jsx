import { Link } from "react-router-dom";


const ButtonPlay = ({
  color,
  to,
}) => {
  return (
      
    <Link 
      className={`flex items-center justify-center h-32 pl-5 text-4xl font-semibold uppercase border w-80 rounded-xl ${color}`}
      to={to}
    >
      play
    </Link>
  );
}

export default ButtonPlay; 
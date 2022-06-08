import Instrument from "../../components/Instrument"
import { MdPiano } from "react-icons/md";
import { GiViolin } from "react-icons/gi";
import ButtonDifficulty from "../../components/ButtonDifficulty";

const Select = () => {
  const instrumentsOprions = [
    {
      instrument: "Piano",
      color: "bg-blue-500",
      colorLight: "bg-blue-400",
      icon: <MdPiano />
    }, {
      instrument: "Violin",
      color: "bg-orange-500",
      colorLight: "bg-orange-400",
      icon: <GiViolin />
    }
  ];
  return (
    <>
      <div className="flex flex-col">
        {instrumentsOprions.map(instrument => (
          <Instrument
            key={instrument.instrument}
            instrument={instrument.instrument}
            color={instrument.color}
            colorLight={instrument.colorLight}
            icon={instrument.icon}
          />
        ))}
      </div>
      <div className="flex fixed bottom-0 w-full">
        <ButtonDifficulty>Easy</ButtonDifficulty>
        <ButtonDifficulty>Medium</ButtonDifficulty>
        <ButtonDifficulty>Hard</ButtonDifficulty>
      </div>
    </>
  )
}

export default Select
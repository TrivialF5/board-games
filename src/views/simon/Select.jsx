import Instrument from "../../components/Instrument"
import { MdPiano } from "react-icons/md";
import { GiViolin } from "react-icons/gi";

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
      <div>Select</div>
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
    </>
  )
}

export default Select
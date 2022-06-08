import Instrument from "../../components/Instrument"
import { MdPiano } from "react-icons/md";
import { GiViolin } from "react-icons/gi";
import ButtonDifficulty from "../../components/ButtonDifficulty";

const Select = () => {
  const instrumentsOprions = [
    {
      instrument: "Piano",
      color: "bg-emerald-500",
      colorLight: "bg-emerald-400",
      icon: <MdPiano />
    }, {
      instrument: "Violin",
      color: "bg-amber-500",
      colorLight: "bg-amber-400",
      icon: <GiViolin />
    }
  ];
  return (
    <>
      <section className="flex flex-col p-5 gap-3">
        {instrumentsOprions.map(instrument => (
          <Instrument
            key={instrument.instrument}
            instrument={instrument.instrument}
            color={instrument.color}
            colorLight={instrument.colorLight}
            icon={instrument.icon}
          />
        ))}
      </section>
      <div className="flex fixed bottom-0 w-full">
        <ButtonDifficulty>Easy</ButtonDifficulty>
        <ButtonDifficulty>Medium</ButtonDifficulty>
        <ButtonDifficulty>Hard</ButtonDifficulty>
      </div>
    </>
  )
}

export default Select
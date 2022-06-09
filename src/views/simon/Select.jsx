import Instrument from "../../components/Instrument"
import { MdPiano } from "react-icons/md";
import { GiViolin } from "react-icons/gi";
import { GiHarp} from "react-icons/gi";
import { GiDrumKit} from "react-icons/gi";
import ButtonDifficulty from "../../components/ButtonDifficulty";

const Select = () => {
  const instrumentsOprions = [
    {
      instrument: "Piano",
      color: "bg-emerald-500",
      colorLight: "bg-emerald-400",
      icon: <MdPiano />,
      soundUrl: "https://s17.aconvert.com/convert/p3r68-cdx67/ufj48-jfy1r.mp3",
    }, {
      instrument: "Violin",
      color: "bg-amber-500",
      colorLight: "bg-amber-400",
      icon: <GiViolin />,
      soundUrl : "https://s19.aconvert.com/convert/p3r68-cdx67/719y3-8q03h.mp3"
    } , {
      instrument: "Harp",
      color: "bg-orange-500",
      colorLight: "bg-orange-400",
      icon: <GiHarp />,
      soundUrl : "https://s17.aconvert.com/convert/p3r68-cdx67/7lnqt-y66pd.mp3"
    } ,
    {
      instrument: "Drums",
      color: "bg-blue-500",
      colorLight: "bg-blue-400",
      icon: <GiDrumKit />,
      soundUrl : "https://s31.aconvert.com/convert/p3r68-cdx67/y6ztl-rwy0t.mp3"
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
            soundUrl={instrument.soundUrl}
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
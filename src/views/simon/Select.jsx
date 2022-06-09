import Instrument from "../../components/Instrument"
import { MdPiano } from "react-icons/md";
import { GiViolin } from "react-icons/gi";
import { GiHarp} from "react-icons/gi";
import { GiDrumKit} from "react-icons/gi";
import ButtonDifficulty from "../../components/ButtonDifficulty";
import ButtonPlay from "../../components/ButtonPLay";

const Select = () => {
  const instrumentsOprions = [
    {
      instrument: "Piano",
      color: "bg-emerald-500",
      colorLight: "bg-emerald-400",
      icon: <MdPiano />,
      soundUrl: "https://drive.google.com/file/d/1Qjj_SCnfKPjaLAJSzYgYnkUdjDw4jjGa/view?usp=sharing",
    }, {
      instrument: "Violin",
      color: "bg-amber-500",
      colorLight: "bg-amber-400",
      icon: <GiViolin />,
      soundUrl : "https://drive.google.com/file/d/1wrB3n0oktXfXThCfqwUHNG4-2KczRwmU/view?usp=sharing"
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
      <section className="h-full flex justify-center items-center pt-5">
      <ButtonPlay />
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
import Instrument from "../../components/Instrument"
import { MdPiano } from "react-icons/md";
import { GiViolin } from "react-icons/gi";
import { GiHarp} from "react-icons/gi";
import { GiDrumKit} from "react-icons/gi";
import ButtonDifficulty from "../../components/ButtonDifficulty";
import ButtonPlay from "../../components/ButtonPLay";
import pianoIntro from "../../assets/audio/piano/pianoIntro.mp3";
import violinIntro from "../../assets/audio/violin/violinIntro.mp3";
import harpIntro from "../../assets/audio/harp/harpIntro.mp3";
import drumsIntro from "../../assets/audio/drums/drumsIntro.mp3";
import TextTitle from "../../components/TextTitle";



const Select = () => {
  const instrumentsOprions = [
    {
      instrument: "Piano",
      color: "bg-emerald-500",
      colorLight: "bg-emerald-400",
      icon: <MdPiano className="h-7 w-7" />,
      soundUrl: pianoIntro,
    }, {
      instrument: "Violin",
      color: "bg-amber-500",
      colorLight: "bg-amber-400",
      icon: <GiViolin className="h-7 w-7"/>,
      soundUrl : violinIntro,
    } , {
      instrument: "Harp",
      color: "bg-orange-500",
      colorLight: "bg-orange-400",
      icon: <GiHarp className="h-7 w-7" />,
      soundUrl : harpIntro,
    } ,
    {
      instrument: "Drums",
      color: "bg-blue-500",
      colorLight: "bg-blue-400",
      icon: <GiDrumKit className="h-7 w-7"/>,
      soundUrl : drumsIntro,
    }
  ];

  return (
    <>
        <section className='flex justify-center pt-5'>
          <TextTitle title= 'Simon' highlightTitle='Says' colorText= 'text-orange-400' />
          </section>
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
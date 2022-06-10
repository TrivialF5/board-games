import { useState } from "react";
import useSound from 'use-sound';

import Instrument from "../../components/Instrument"
import { MdPiano } from "react-icons/md";
import { GiViolin } from "react-icons/gi";
import { GiHarp} from "react-icons/gi";
import { GiDrumKit} from "react-icons/gi";
import ButtonDifficulty from "../../components/ButtonDifficulty";
import ButtonPlay from "../../components/ButtonPlay";
import pianoIntro from "../../assets/audio/piano/pianoIntro.mp3";
import violinIntro from "../../assets/audio/violin/violinIntro.mp3";
import harpIntro from "../../assets/audio/harp/harpIntro.mp3";
import drumsIntro from "../../assets/audio/drums/drumsIntro.mp3";



const Select = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [playColor, setPlayColor] = useState("bg-slate-300");
  const [selectedInstrument, setSelectedInstrument] = useState("piano");
  const [sound, setSound] = useState(null);
  
  const instrumentsOprions = [
    {
      instrument: "piano",
      color: "bg-emerald-500",
      colorLight: "bg-emerald-400",
      icon: <MdPiano className="h-7 w-7" />,
      soundUrl: pianoIntro,
    }, {
      instrument: "violin",
      color: "bg-amber-500",
      colorLight: "bg-amber-400",
      icon: <GiViolin className="h-7 w-7"/>,
      soundUrl : violinIntro,
    } , {
      instrument: "harp",
      color: "bg-orange-500",
      colorLight: "bg-orange-400",
      icon: <GiHarp className="h-7 w-7" />,
      soundUrl : harpIntro,
    } ,
    {
      instrument: "drums",
      color: "bg-blue-500",
      colorLight: "bg-blue-400",
      icon: <GiDrumKit className="h-7 w-7"/>,
      soundUrl : drumsIntro,
    }
  ];

  const [play] = useSound(
    sound,
    { volume: 0.5 }
  )

  const handleDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  }

  const handleInstrument = (instrument) => {
    setSelectedInstrument(instrument.instrument);
    setPlayColor(instrument.colorLight);
    setSound(instrument.soundUrl);
    play();
    console.log(instrument.soundUrl);
  }

  return (
    <>
      <section className="flex flex-col gap-3 p-5">
        {instrumentsOprions.map(instrument => (
          <Instrument
            key={instrument.instrument}
            instrument={instrument.instrument}
            color={instrument.color}
            colorLight={instrument.colorLight}
            icon={instrument.icon}
            soundUrl={instrument.soundUrl}
            onClick={() => handleInstrument(instrument)}
          />
        ))}
      </section>
      <section className="flex items-center justify-center h-full pt-5">
        <ButtonPlay 
          color={playColor}
          to={`/simon/${selectedInstrument}/${difficulty}`}
        />
      </section>
      <div className="fixed bottom-0 flex w-full">
        <ButtonDifficulty 
          onClick={() => handleDifficulty("easy")}
          selected={difficulty === "easy"}
        >
          Easy
        </ButtonDifficulty>
        <ButtonDifficulty
          onClick={() => handleDifficulty("medium")}
          selected={difficulty === "medium"}
        >
          Medium
        </ButtonDifficulty>
        <ButtonDifficulty
          onClick={() => handleDifficulty("hard")}
          selected={difficulty === "hard"}
        >
          Hard
        </ButtonDifficulty>
      </div>
    </>
  )
}

export default Select
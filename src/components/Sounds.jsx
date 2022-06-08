import useSound from 'use-sound';
import Instrument from './components/Instrument';


function PianoIntro() {

    const soundUrl = '/sounds/PianoIntro.mp3';

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.5 }
    );

    const [isHovering, setIsHovering] = React.useState(
    false
    );

    return (
        <Instrument>
            onMouseEnter={() => {
                setIsHovering(true);
                play();
            }}
            onMouseLeave={() => {
                setIsHovering(false);
                stop();
            }}
        </Instrument>
    );  
}

    export default PianoIntro;
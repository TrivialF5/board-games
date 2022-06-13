
import { GiMusicalNotes } from "react-icons/gi";
import { IoIosMusicalNote} from "react-icons/io";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdPiano } from "react-icons/md";
import { GiViolin } from "react-icons/gi";
import { GiHarp} from "react-icons/gi";
import { GiDrumKit} from "react-icons/gi";

import TextTitle from "../../components/TextTitle";





const Loading = () => {
    return (
            <>
                <section className='flex justify-center pt-5'>
                    <TextTitle title= 'Simon' highlightTitle='Says' colorText= 'text-orange-400' />
                </section>
                <section className='h-60 flex justify-center place-items-end '>
                        <IoIosMusicalNote className="h-20 w-20 animate-bounce " /> 
                        <IoIosMusicalNotes className="h-20 w-20 animate-bounce" /> 
                         <IoIosMusicalNote className="h-20 w-20 animate-bounce" />
                        <IoIosMusicalNotes className="h-20 w-20 animate-bounce" />
                </section>
                <section className='h-24 flex justify-center place-items-end'>
                        <MdPiano className="h-12 w-12" /> 
                        <GiViolin  className="h-12 w-12" />  
                        <GiHarp className="h-12 w-12" />
                        <GiDrumKit className="h-12 w-12" />
                </section>
                <section className='flex justify-center pt-5'>
                <TextTitle prevTitle = 'Play' title = 'with' highlightTitle='Us' colorText = 'text-orange-400' />
                </section>
            </>

     
        
    );





    
}


export default Loading;
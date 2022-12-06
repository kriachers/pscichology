
import { useState } from "react";


function Accordion(props) {

    const [size, setSize] = useState(false);

    return (

        <div className="Questions__accordion">
            <div onClick={() => setSize(!size)} className={`Questions-accordion__top ${size ? 'open' : ''} flex justify-between `}>
                <p className="text-bold mb-2">{props.title}</p>
                <img className="self-start" src={`./icons/${size ? 'minus' : 'plus'}.svg`} alt="" />
            </div>
            <p className={`Questions-accordion__bottom  text-light ${size ? 'show' : 'hidden'}`}>{props.descr}</p>

        </div>
    );
}

export default Accordion;

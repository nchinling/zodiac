import HoroscopeImage from './HoroscopeImage';
import './styles/Output.css';


function Output({ details }) {

    let formattedOutput

    const { name, age, horoscope } = details;

    if (name !== null) {
        formattedOutput = (
            <div className="textStyle">
                <p >Hi <span>{name}. </span>You are <span>{age} years old.</span></p>
                <p>You are a <span>{horoscope}.</span></p>
            </div>
        );
    }

    return (
        <>
            <br />
            <div className="formatted-output">
                {formattedOutput}
            </div>
            <HoroscopeImage horoscope={horoscope} />
        </>

    );
}

export default Output;
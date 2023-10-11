import './styles/HoroscopeImage.css';
import AriesImage from './zodiac/aries.png';
import TaurusImage from './zodiac/taurus.png';
import GeminiImage from './zodiac/gemini.png';
import CapricornImage from './zodiac/capricorn.png';
import AquariusImage from './zodiac/aquarius.png';
import CancerImage from './zodiac/cancer.png';
import LeoImage from './zodiac/leo.png';
import LibraImage from './zodiac/libra.png';
import PiscesImage from './zodiac/pisces.png';
import SagitariusImage from './zodiac/sagitarius.png';
import VirgoImage from './zodiac/virgo.png';
import ScorpioImage from './zodiac/scorpio.png';

function HoroscopeImage({ horoscope }) {

    const horoscopeImages = {
        "Aries": AriesImage,
        "Taurus": TaurusImage,
        "Gemini": GeminiImage,
        "Capricorn": CapricornImage,
        "Aquarius": AquariusImage,
        "Cancer": CancerImage,
        "Leo": LeoImage,
        "Libra": LibraImage,
        "Pisces": PiscesImage,
        "Sagitarius": SagitariusImage,
        "Virgo": VirgoImage,
        "Scorpio": ScorpioImage,
    };

    const imageSrc = horoscopeImages[horoscope];

    return (
        <div className="horoscopeImage">
            <h1>{horoscope}</h1>
            <img className="horoscopeImage" src={imageSrc} alt={horoscope} />
        </div>
    );
}

export default HoroscopeImage;
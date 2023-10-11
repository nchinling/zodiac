import { useState } from "react";
import './styles/Form.css';
import Output from './Output';
import Title from './Title';


function Form({ models }) {
    const [formData, setFormData] = useState({ name: null, dateOfBirth: null });
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null)
    const [horoscope, setHoroscope] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setName(formData.name);
        setAge(calculateAge(formData.dateOfBirth));
        setHoroscope(determineHoroscope(formData.dateOfBirth));


    };

    return (
        <div className="container" style={{ height: '750px' }}>
            <Title title="Daily Horoscope" />

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />

                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} /><br />

                <button type="submit">Submit</button>

            </form>
            <Output details={{ name, age, horoscope }} />

        </div>
    );
}

export default Form;


function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    const daysDiff = currentDate.getDate() - birthDate.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        return yearsDiff - 1;
    } else {
        return yearsDiff;
    }
}

function determineHoroscope(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const month = birthDate.getMonth() + 1; // Month is zero-based, so we add 1
    const day = birthDate.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "Pisces";
    }

    return "Horoscope not found";
}



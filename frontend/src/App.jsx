import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Timeline from './components/Timeline';
import Location from './components/Location';
import DressCode from './components/DressCode';
import Details from './components/Details';
import RSVPForm from './components/RSVPForm';
import Petals from './components/Petals';

function App() {
    const params = new URLSearchParams(window.location.search);
    const guestSlug = params.get('guest');

    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!guestSlug) {
            setLoading(false);
            return;
        }

        fetch(`${process.env.REACT_APP_API_URL}/api/guest/${guestSlug}`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(() => {
                setValid(true);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [guestSlug]);

    if (loading) return null;

    if (!valid) {
        return (
            <div className="app">
                <section className="section guest-error" data-aos="fade-up">
                    <h2>Приглашение не найдено</h2>
                    <p>Пожалуйста, перейдите по вашей персональной ссылке из приглашения.</p>
                </section>
            </div>
        );
    }

    return (
        <div className="app">
            <Petals />
            <Header/>
            <Greeting/>
            <Timeline/>
            <Location/>
            <DressCode/>
            <Details/>
            <RSVPForm/>
        </div>
    );
}


export default App;

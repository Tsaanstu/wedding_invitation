import React from "react";
import {Route, Routes, useParams} from "react-router-dom";
import Petals from "./components/Petals";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Timeline from "./components/Timeline";
import Location from "./components/Location";
import DressCode from "./components/DressCode";
import Details from "./components/Details";
import RSVPForm from "./components/RSVPForm";
import GirlParty from "./components/GirlParty";
import BoyParty from "./components/BoyParty";

function App() {
    return (
        <Routes>
            <Route path="/guest/:slug" element={<GuestPageWrapper/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

function GuestPageWrapper() {
    const {slug} = useParams();
    const [guest, setGuest] = React.useState(null);
    const [notFound, setNotFound] = React.useState(false);

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/guest/${slug}`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => setGuest(data))
            .catch(() => setNotFound(true));
    }, [slug]);

    if (notFound) return <NotFound/>;
    if (!guest) return null;

    return <GuestPage guest={guest}/>;
}

function GuestPage({guest}) {
    return (
        <div className="app">
            <Petals/>
            <Header/>
            <Greeting/>
            <Timeline/>
            <Location/>
            <DressCode/>
            <Details/>
            <div className="section-group">
                {guest.girl_party && <GirlParty />}
                {guest.boy_party && <BoyParty />}
                <RSVPForm />
            </div>
        </div>
    );
}

function NotFound() {
    return (
        <section className="section rsvp" data-aos="fade-up">
            <h2>Приглашение не найдено</h2>
            <h2>Для заполнения анкеты используйте вашу персональную ссылку.</h2>
        </section>
    );
}

export default App;

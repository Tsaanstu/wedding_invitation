import React from "react";
import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom";
import Petals from "./components/Petals";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Timeline from "./components/Timeline";
import Location from "./components/Location";
import DressCode from "./components/DressCode";
import Details from "./components/Details";
import RSVPForm from "./components/RSVPForm";

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
    const [isValid, setIsValid] = React.useState(null);

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/guest/${slug}`)
            .then(res => {
                setIsValid(res.ok);
            })
            .catch(() => setIsValid(false));
    }, [slug]);

    if (isValid === null) return null; // optionally show loading indicator
    if (!isValid) return <NotFound/>;

    return <GuestPage/>;
}

function GuestPage() {
    return (
        <div className="app">
            <Petals/>
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

function NotFound() {
    return (
        <section className="section rsvp" data-aos="fade-up">
            <h2>Приглашение не найдено</h2>
            <h2>Для заполнения анкеты используйте вашу персональную ссылку.</h2>
        </section>
    );
}

export default App;

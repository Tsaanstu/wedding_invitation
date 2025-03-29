import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Header from './components/Header';
import Greeting from './components/Greeting';
import Timeline from './components/Timeline';
import Location from './components/Location';
import DressCode from './components/DressCode';
import Details from './components/Details';
import RSVPForm from './components/RSVPForm';
import Petals from './components/Petals';

function GuestPage() {
    const { slug } = useParams();
    console.log('Rendering GuestPage for slug:', slug);
    return (
        <div className="app">
            <Petals />
            <Header />
            <Greeting />
            <Timeline />
            <Location />
            <DressCode />
            <Details />
            <RSVPForm />
        </div>
    );
}

function NotFound() {
    console.log('Rendering NotFound page');
    return (
        <div className="app">
            <section className="section guest-error" data-aos="fade-up">
                <h2>Приглашение не найдено</h2>
                <p>Пожалуйста, перейдите по вашей персональной ссылке из приглашения.</p>
            </section>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/guest/:slug" element={<GuestPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;

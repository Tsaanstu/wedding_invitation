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

function GuestPage({ slug }) {
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

function GuestPageWrapper() {
    const { slug } = useParams();
    return <GuestPage slug={slug} />;
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
            <Route path="/guest/:slug" element={<GuestPageWrapper />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;

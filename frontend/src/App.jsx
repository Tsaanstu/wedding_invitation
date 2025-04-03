import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
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
import BackgroundManager from "./components/BackgroundManager"; // Убедись, что компонент работает как фон

function App() {
  return (
    <>
      {/* Здесь фоновый компонент */}
      <BackgroundManager />

      <div className="app">
        <Routes>
          <Route path="/guest/:slug" element={<GuestPageWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

function GuestPageWrapper() {
  const { slug } = useParams();
  const [guest, setGuest] = React.useState(null);
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/guest/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setGuest(data))
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) return <NotFound />;
  if (!guest) return null;

  return <GuestPage guest={guest} />;
}

function GuestPage({ guest }) {
  return (
    <>
      <Petals />
      <Header />
      <Greeting guest={guest} />
      <Timeline />
      <Location />
      <DressCode />
      <Details />
      {guest.girl_party ? <GirlParty /> : null}
      {guest.boy_party ? <BoyParty /> : null}
      <RSVPForm guest={guest} />
    </>
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

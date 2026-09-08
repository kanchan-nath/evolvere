import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect, lazy, Suspense } from 'react'

import Header from './components/Header'
import About from './components/About'
import Loader from './components/Loader/loader'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './App.css'
import './styles/global.css'

// Below-the-fold sections are code-split — they no longer bloat
// the initial bundle or block first paint.
const EventList = lazy(() => import('./components/EventList'))
const Gallery = lazy(() => import('./components/Gallery'))
const Faculty = lazy(() => import('./components/Faculty'))
const Team = lazy(() => import('./components/Team'))
const Form = lazy(() => import('./components/Form'))
const Footer = lazy(() => import('./components/Footer'))

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Header />
      <About />
      <Suspense fallback={null}>
        <EventList />
        <Gallery />
        <Faculty />
        <Team />
        <Form />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
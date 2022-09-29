import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Recommended from './components/Recommended';
import Testimonials from './components/Testimonials';
import MapContainer from './components/map/MapContainer';
class App extends React.Component {
  render() {

    return (
      <>
        <Router>
          <Navbar />

          <Routes>


            <Route
              exact path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Recommended />
                  <Testimonials />
                </>}
            >
            </Route>


            <Route
              exact path="/home"
              element={
                <>
                  <Hero />
                  <Services />
                  <Recommended />
                  <Testimonials />
                </>
              }
            >
            </Route>

          </Routes>

          <ScrollToTop />
          <MapContainer />

          <Footer />

        </Router>
      </>
    );
  }
}
export default App;

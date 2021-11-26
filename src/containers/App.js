import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import TravelPermit from '../components/TravelPermit/TravelPermit';
import Scholarships from '../components/Scholarships/Scholarships';
import Arbeitsvisum from '../components/Arbeitsvisum/Arbeitsvisum';
import Sprache from '../components/Sprache/Sprache';
import Zertifikat from '../components/Sprache/Zertifikat/Zertifikat';
import WegZuLernen from '../components/Sprache/WegZuLernen/WegZuLernen';
import EmbassyInterview from '../components/EmbassyInterview/EmbassyInterview.js';
import DetailsEI from '../components/EmbassyInterview/DetailsEI/DetailsEI';
import FAQ from '../components/EmbassyInterview/FAQ/FAQ';
import WiedervereinigungsVisum from '../components/WiedervereinigungsVisum/WiedervereinigungsVisum';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/contact'>
              <Contact />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/travelpermit_missions_armypostponement'>
              <TravelPermit />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/scholarships'>
              <Scholarships />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/arbeitsvisum'>
              <Arbeitsvisum />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/sprache'>
              <Sprache />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/sprache/zertifikat'>
              <Zertifikat />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/sprache/wegzulernen'>
              <WegZuLernen />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/embassyinterview'>
              <EmbassyInterview />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/embassyinterview/details'>
              <DetailsEI />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/embassyinterview/FAQ'>
              <FAQ />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/wiedervereinigungsvisum'>
              <WiedervereinigungsVisum />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

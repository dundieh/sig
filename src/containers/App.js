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
import MotivationLetter from '../components/MotivationLetter/MotivationLetter';
import Aupair from '../components/Aupair/Aupair';
import LebenInDeutschland from '../components/LebenInDeutschland/LebenInDeutschland';
import General from '../components/LebenInDeutschland/General/General';
import ForGirls from '../components/LebenInDeutschland/ForGirls/ForGirls';
import Kosten from '../components/LebenInDeutschland/Kosten/Kosten';
import Posts from '../components/LebenInDeutschland/Posts/Posts';
import StudentWork from '../components/LebenInDeutschland/StudentWork/StudentWork';
import Ausbildung from '../components/Ausbildung/Ausbildung';
import ClosedAccount from '../components/ClosedAccount/ClosedAccount';
import Fintiba from '../components/ClosedAccount/Fintiba/Fintiba';
import CurrentBankAcc from '../components/ClosedAccount/CurrentBankAcc/CurrentBankAcc';
import Refund from '../components/ClosedAccount/Refund/Refund';
import FinancialGuarantor from '../components/ClosedAccount/FinancialGuarantor/FinancialGuarantor';
import BestBank from '../components/ClosedAccount/BestBank/BestBank';
import More from '../components/ClosedAccount/More/More';
import StudentVisum from '../components/StudentVisum/StudentVisum';
import REQS from '../components/StudentVisum/REQS/REQ';
import InterviewSV from '../components/StudentVisum/InterviewSV/InterviewSV';
import BasicDOCS from '../components/StudentVisum/BasicDOCS/BasicDOCS';
import DAAD from '../components/StudentVisum/DAAD/DAAD';
import HighSchool from '../components/StudentVisum/HighSchool/HighSchool';
import PrepYear from '../components/StudentVisum/PrepYear/PrepYear';
import Recog from '../components/StudentVisum/Recog/Recog';
import Apply from '../components/StudentVisum/Apply/Apply';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/contact'>
              <Contact />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/studentvisum'>
              <StudentVisum />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/studentvisum/requirements'>
              <REQS />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/studentvisum/interview'>
              <InterviewSV />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/studentvisum/basic_docs'>
              <BasicDOCS />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/studentvisum/daad'>
              <DAAD />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/studentvisum/highschool'>
              <HighSchool />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/studentvisum/prepyear'>
              <PrepYear />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/studentvisum/recognization'>
              <Recog />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/studentvisum/apply'>
              <Apply />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/travelpermit_missions_armypostponement'>
              <TravelPermit />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/scholarships'>
              <Scholarships />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/arbeitsvisum'>
              <Arbeitsvisum />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

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

          {/* ___________________________________________________________ */}

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

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/wiedervereinigungsvisum'>
              <WiedervereinigungsVisum />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/motivationletter'>
              <MotivationLetter />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/aupair'>
              <Aupair />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/lebeninDeutschland'>
              <LebenInDeutschland />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/lebeninDeutschland/general'>
              <General />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/lebeninDeutschland/kosten'>
              <Kosten />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/lebeninDeutschland/forgirls'>
              <ForGirls />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/lebeninDeutschland/stundentwork'>
              <StudentWork />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/lebeninDeutschland/posts'>
              <Posts />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/ausbildung'>
              <Ausbildung />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Switch>
            <Route exact path='/closedbankaccount_financialguarantor'>
              <ClosedAccount />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/closedbankaccount_financialguarantor/fintiba_sutorbank'>
              <Fintiba />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/closedbankaccount_financialguarantor/bestbank'>
              <BestBank />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/closedbankaccount_financialguarantor/currentbankaccount'>
              <CurrentBankAcc />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/closedbankaccount_financialguarantor/refund'>
              <Refund />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/closedbankaccount_financialguarantor/financialguarantor'>
              <FinancialGuarantor />
            </Route>
          </Switch>

          <Switch>
            <Route exact path='/closedbankaccount_financialguarantor/more'>
              <More />
            </Route>
          </Switch>

          {/* ___________________________________________________________ */}

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

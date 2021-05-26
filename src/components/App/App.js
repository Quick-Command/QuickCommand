import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DatabaseMenu from '../DatabaseMenu/DatabaseMenu';
import IncidentsMenu from '../IncidentsMenu/IncidentsMenu';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profiles from '../Profiles/Profiles';
import Passport from '../Passport/Passport';
import ChartView from '../ChartView/ChartView';
import IncidentInfo from '../IncidentInfo/IncidentInfo';
import WeatherReport from '../WeatherReport/WeatherReport';

const App = () => {

  return (
    <main className='app'>
      <div className='content-wrap'>
        <Header />
        <Switch>
          <Route exact path='/' component={IncidentsMenu} />
          <Route path='/database' component={DatabaseMenu} />
          <Route path='/profiles' component={Profiles} />
          <Route path='/passport' component={Passport} />
          {/* below is test-only for specific incident view */}
          <Route path='/incident/details/:id' render={({ match }) => {
            const { id } = match.params;
            return (<IncidentInfo id={id} />)
          }} />
          <Route path='/incident/:id' render={({ match }) => {
            const { id } = match.params;
            return (<ChartView id={id} />)
          }} />
          <Route path='/weather/:location' render={({ match }) => {
            const { location } = match.params;
            return (<WeatherReport location={location} />)
          }} />
        </Switch>
        <Footer />
      </div>
    </main>
  )

}

export default App

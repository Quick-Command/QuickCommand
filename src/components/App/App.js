import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DatabaseMenu from '../DatabaseMenu/DatabaseMenu';
import IncidentsMenu from '../IncidentsMenu/IncidentsMenu';
import './App.css';
import Header from '../Header/Header';
const App = () => {

  return (
    <main className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={IncidentsMenu} />
        <Route path='/database' component={DatabaseMenu} />
      </Switch>
    </main>
  )

}

export default App
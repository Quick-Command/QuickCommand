import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import DatabaseMenu from '../DatabaseMenu/DatabaseMenu'
import IncidentsMenu from '../IncidentsMenu/IncidentsMenu'
import './App.css';

const App = () => {
  
  return (
    <main className='app'>
      <h1 className='site-header'>QuickCommand</h1>
      <nav>
        <NavLink to='/database' className='nav-link'>DATABASE</NavLink>
        <NavLink to='/' className='nav-link'>INCIDENTS</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={IncidentsMenu} />
        <Route path='/database' component={DatabaseMenu} />
      </Switch>
    </main>
  )

}

export default App
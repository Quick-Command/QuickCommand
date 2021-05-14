import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import DatabaseMenu from '../DatabaseMenu/DatabaseMenu'
import IncidentsMenu from '../IncidentsMenu/IncidentsMenu'
// import { Counter } from '../../features/counter/Counter';
import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <main className='app'>
        <h1>QuickCommand</h1>
        <nav className='nav-bar'>
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
}

// function App() {
//   return (
//     <div>
//       <h1>This is QuickCommand</h1>
//       <p>welcome to quick command</p>
//     </div>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

// export default App;

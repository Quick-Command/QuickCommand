import './Profiles.css';

const Profiles = () => {
  return (
    <section data-cy='profiles' className='profiles'>
      <div className='profile-single'>
        <a href='https://github.com/klatour324' target="_blank" rel="noopener noreferrer">Katy La Tour
          <img src='https://avatars.githubusercontent.com/u/23460878?v=4' alt='Katy La Tour'></img>
        </a>
      </div>
      <div className='profile-single'>
        <a href='https://github.com/jmichlitsch' target="_blank" rel="noopener noreferrer">Jeremiah Michlitsch
          <img src='https://avatars.githubusercontent.com/u/61896482?v=4' alt='Jeremiah Michlitsch'></img>
        </a>
      </div>
      <div className='profile-single'>
        <a href='https://github.com/amsmyth1' target="_blank" rel="noopener noreferrer">Alexa Morales Smyth
          <img src='https://avatars.githubusercontent.com/u/73140135?v=4' alt='Alexa Morales Smyth'></img>
        </a>
      </div>
      <div className='profile-single'>
        <a href='https://github.com/cbmackintosh' target="_blank" rel="noopener noreferrer">Cameron Mackintosh
          <img src='https://avatars.githubusercontent.com/u/72054706?v=4' alt='Cameron Mackintosh'></img>
        </a>
      </div>
      <div className='profile-single'>
        <a href='https://github.com/JeffShepherd' target="_blank" rel="noopener noreferrer">Jeff Shepherd
          <img src='https://avatars.githubusercontent.com/u/66529559?v=4' alt='Jeff Shepherd'></img>
        </a>
      </div>
      <div className='profile-single'>
        <a href='https://github.com/percworld' target="_blank" rel="noopener noreferrer">Chuck Morris
          <img src='https://avatars.githubusercontent.com/u/71858456?v=4' alt='Chuck Morris'></img>
        </a>
      </div>
    </section >
  )
}
export default Profiles;
import reactlogo from './assets/react-logo.png'
export default function Header (){
    return (
      <nav className='nav'>
        {/* <img src="../src/assets/react-logo.png" alt="react logo" /*width="40px"*/ }
        <img src={reactlogo} alt="react logo" /*width="40px"*/ className='react-logo'/>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
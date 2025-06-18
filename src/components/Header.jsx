import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='nav__bar'>
      <div className='navigation'>
        <div className='nav__buttons'>
          <a href='#'>Home</a>
          <a href='#'>Find Job</a>
          <a href='#'>Employers</a>
          <a href='#'>Candidates</a>
          <a href='#'>Pricing Plans</a>
          <a href='#'>Customer Supports</a>
        </div>

        <div className='contacts'>
          <div className='contact__info'>
            <img src='./images/callphone.png' alt='Call Icon'></img>
            <div className='number'>+7-707-898-90-31</div>
          </div>
          <div className='language__btn'>
            <img src='./images/flag.png' alt='flag icon' />
            <div className='language'>Qazaqsha</div>
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
      </div>


      <div className='search__section'>
        <div className='logo__search'>
          <img src='./images/logo.svg' alt='logo'></img>
          <img src='./images/logo-text.svg' alt='logo-text'></img>

          <div className="search-bar">
            <button className="country-btn">
              <img src="./images/flag.png" alt="KZ" />
              <span>Kazakhstan</span>
              <i className="fa fa-chevron-down"></i>
            </button>

            <div className="divider"></div>

            <div className="search-icon">
              <i className="fa fa-search"></i>
            </div>

            <input type="text" placeholder="Job title, keyword, company" />
          </div>

        </div>
        <div className='registration__bar'>
          <Link>Sign In</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>

    </div >


  )
}

export default Header
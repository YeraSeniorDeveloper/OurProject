import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='nav__bar'>
      <div className='container'>
      <div className='navigation'>
        <div className='nav__buttons'>
          <Link to="home">Basty bet</Link>
          <Link to="jobboard">Jumis tabu</Link>
          <Link to='#'>Jumis berushiler</Link>
          <Link to='#'>Umitkerler</Link>
          <Link to="price">Baga zhospary</Link>
          <Link to='#'>Tutynushyga qoldau</Link >
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
          <div className='logo'><img src='./images/logo.svg' alt='logo'></img></div>
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

            <input type="text" placeholder="Jumistin aty, kilt sozder, company" />
          </div>

        </div>
        <div className='registration__bar'>
          <Link>Kiru</Link>
          <Link to="/register">Tirkelu</Link>
        </div>
      </div>
      </div>

    </div >


  )
}

export default Header
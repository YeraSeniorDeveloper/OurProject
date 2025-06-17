import './Header.css'
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
          </div>
        </div>
      </div>




      <div className='search__section'>
        <div className='logo__search'>
          <img src='./images/logo.svg' alt='logo'></img>
          <img src='./images/logo-text.svg' alt='logo-text'></img>
        </div>
        <div className='registration__bar'>
          <a>Sign In</a>
          <a>Sign Up</a>
        </div>
      </div>

    </div >


  )
}

export default Header
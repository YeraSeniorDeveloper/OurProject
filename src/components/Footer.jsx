import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container6'>
        <div className='row'>
            <div className='footer-col'>
              <h4>Silteme</h4>
              <ul>
                <li><a href='#'>Biz zhaily</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Baga</a></li>
                <li><a href='#'>Blog</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Umitkerlerge</h4>
              <ul>
                <li><a href='#'>Zhymustardy sholu</a></li>
                <li><a href='#'>Zhumis berushilerdi sholu</a></li>
                <li><a href='#'>Canditattyn baqylau taqtasy</a></li>
                <li><a href='#'>Saqtalgan zhumys oryndary</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Qoldau</h4>
              <ul>
                <li><a href='#'>Жиі qoiylatyn suraqtar</a></li>
                <li><a href='#'>Qupiyalyq sayasaty</a></li>
                <li><a href='#'>Sharttar men talapar</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Bizben birge bolynyz</h4>
              <div className='social-links'>
                <a href='#'><i className='fab fa-facebook-f'></i></a>
                <a href='#'><i className='fab fa-twitter'></i></a>
                <a href='#'><i className='fab fa-instagram'></i></a>
                <a href='#'><i className='fab fa-linkedin-in'></i></a>
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
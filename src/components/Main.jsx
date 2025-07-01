import './Main.css'
import { Link } from 'react-router-dom'
import CategorySection from './MainComponents/CategorySection'
function Main() {
  return (
    <main>
      <div className='section__1'>
        <div className='container__2'>
          <div className='section__title'>En tanymal bos oryndar</div>
          <div className='job__list'>
            <Link to='/joblist'>Derekter galymy
              <p>5 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>Xirurgter
              <p>104 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>Aiteur bireuler
              <p>9 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>Ortodont -darigerlery
              <p>39 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>IT-mamandary
              <p>73 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>Bagdarlamalyq zhasaqtama<br />azirleushisi
              <p>230 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>Psixiatorlar
              <p>34 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>UI/UX Dizainerler
              <p>70 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>Qarzhy menedzhery
              <p>29 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>Anesteziologtar
              <p>59 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>Bet-jaq xirurgteri
              <p>17 Ashyq positsiya</p>
            </Link>
            <Link to='/joblist'>Mugalimder
              <p>120 Ashyq positsiya</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="section__2">
        <h2 className="title">Jobber qalai zhumis zhasaıdy?</h2>

        <div className="steps">
          <div className="step">
            <div className="icon">
              <img src="./images/Icon.svg" alt="step1" />
            </div>
            <h3>Akkаunt аshu</h3>
            <p>Az uaqittin ishinde ozinizge account ashiniz</p>
          </div>

          <div className="step">
            <div className="icon">
              <img src='./images/Icon2.svg' alt='step2' />
            </div>
            <h3>Tuyindeme/rezyumeni jүktep salynyz</h3>
            <p>Ozinizge tan tuyindemeni zhuqtep,accountinizga beqitiniz</p>
          </div>

          <div className="step">
            <div className="icon">
              <img src='./images/Icon3.svg' alt='step3' />
            </div>
            <h3>Saıkes jumys tabynyz</h3>
            <p>Oziniz qalagan zhumisqa bos vacanciyalardi izdep korimiz</p>
            <p></p>
          </div>

          <div className="step">
            <div className="icon">
              <img src='./images/Icon4.svg' alt='step4' />
            </div>
            <h3>Jumysqa otinish beriniz</h3>
            <p>Unatqan vacanciyaga otinish qaldyrynyz</p>
          </div>
        </div>
      </div>
      <div className='section__3'><CategorySection /></div>

      <div class="line"></div>

      <div className='section__4'>
        <div class="cards-section">
          <div class="card candidate">
            <h2>Umitker bolynyz</h2>
            <p>Ozingizge unagan, oziniz qalağan jumisinizi <br/>tabynyz.</p>
            <Link to='/register'>Qazir Tirkeliniz </Link>
          </div>

          <div class="card employer">
            <h2>Jumis berushi boliniz</h2>
            <p>Koptegen umitkerlerdin ishinen, kasibinizge sai umitkerdi tandanyz</p>
            <Link to='#'>Qazir Tirkeliniz</Link>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Main

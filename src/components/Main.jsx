import './Main.css'
function Main() {
  return (
    <main>
      <div className='section__1'>
        <div className='container__2'>
          <div className='section__title'>En tanymal bos oryndar</div>
          <div className='job__list'>
            <a>Derekter galymy</a>
            <a>Xirurgter</a>
            <a>Akusher-ginekoloqtar</a>
            <a>Ortodont -darigerlery</a>
            <a>IT-mamandary</a>
            <a>Bagdarlamalyq zhasaqtama<br />azirleushisi</a>
            <a>Psixiatorlar</a>
            <a>UI/UX Dizainerler</a>
            <a>Qarzhy menedzhery</a>
            <a>Anesteziologtar</a>
            <a>Bet-jaq xirurgteri</a>
            <a>Mugalimder</a>
          </div>
        </div>
      </div>
      <div className='section__2'>
        <div className='container__3'>
          <h2 className="section__title2">Jobber qalai jumis jasaidy?</h2>

          <div className="steps">
            <div className="step__card">
              <img src='./images/Icon.svg'/>
              <text>Akkaunt ashu</text>
            </div>
            <div className="step__card">
              <img src='./images/Icon2.svg'/>
              <text>Tuyindeme/rezyumeni juktep salınız</text>
            </div>
            <div className="step__card">
              <img src='./images/Icon3.svg'/>
              <text>Saikes jumis tabynyz</text>
            </div>
            <div className="step__card">
              <img src='./images/Icon4.svg'/>
               <text>Jumisqa otinish beriniz</text>
            </div>
          </div>
        </div>
      </div>
      <div className='section__3'></div>
      <div className='section__4'></div>
      <div className='section__5'></div>
    </main>
  )
}

export default Main

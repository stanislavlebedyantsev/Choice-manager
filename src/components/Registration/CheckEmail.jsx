import s from './CheckEmail.module.css';

const checkEmail = () => {
    return (
        <div >
          <div className={s.container}>
          <button className={s.clBtn7}/>
              <div className={s.headName}><p>Check your Email</p></div>
              <div>
                  <form>
                      <input type="emailKey" placeholder="Confirm the code" className={s.emailKey}/>
                  </form>
              </div>
              <div>
                  <button className={s.confirmButt}>Confirm</button>
              </div>
              <div className={s.sendAgain}>
              <p>Didn't receive the code?<a href="#"> Send again</a></p>
              </div>
          </div>
        </div>
  );
}

export default checkEmail;
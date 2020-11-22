import s from './Goals.module.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const goals = (props) => {
  return (
    <div className={s.background}>
      <Header></Header>
      <div className={s.container}>
        <div className={s.yourGoals}>Your Goals</div>
        <div className={s.grid}>
          <div>
            <div className={s.buttons}>
              <button className={s.editButtton}></button>
              <button className={s.deleteButton}></button>
            </div>
            <h6 className={s.goalNameH6}>Goal name
              <p className={s.descriptionP}>Short description</p>
            </h6>
            <progress className={s.progressBar} value="57" max="100"></progress>
            <label className={s.checkbox}>
              <input type="checkbox" checked="checked"/>
              <span className="checkmark"></span>
              Task 1
            </label>

            <label className={s.checkbox}>
              <input type="checkbox"/>
              <span className="checkmark"></span>
              Task 2
            </label>

            <label className={s.checkbox}>
              <input type="checkbox"/>
              <span className="checkmark"></span>
              Task 3
            </label>

            <label className={s.checkbox}>
              <input type="checkbox"/>
              <span className="checkmark"></span>
              Task 4
            </label>
          </div>
          <div>
            <div className={s.buttons}>
              <button className={s.editButtton}></button>
              <button className={s.deleteButton}></button>
            </div>
            <h6 className={s.goalNameH6}>Goal name
              <p className={s.descriptionP}>Short description</p>
            </h6>
            <progress className={s.progressBar} value="37" max="100"></progress>
            <label className={s.checkbox}>
              <input type="checkbox" checked="checked"/>
              <span className="checkmark"></span>
              Task 1
            </label>

            <label className={s.checkbox}>
              <input type="checkbox"/>
              <span className="checkmark"></span>
              Task 2
            </label>

            <label className={s.checkbox}>
              <input type="checkbox"/>
              <span className="checkmark"></span>
              Task 3
            </label>

            <label className={s.checkbox}>
              <input type="checkbox"/>
              <span className="checkmark"></span>
              Task 4
            </label>
          </div>
          <div>
            <div className={s.buttons}>
              <button className={s.editButtton}></button>
              <button className={s.deleteButton}></button>
            </div>
            <h6 className={s.goalNameH6}>Goal name
              <p className={s.descriptionP}>Short description</p>
            </h6>
            <progress className={s.progressBar} value="87" max="100"></progress>
            <label className={s.checkbox}>
              <input type="checkbox" checked="checked"/>
              <span className="checkmark"></span>
              Task 1
            </label>

            <label className={s.checkbox}>
              <input type="checkbox"/>
              <span className="checkmark"></span>
              Task 2
            </label>

            <label className={s.checkbox}>
              <input type="checkbox"/>
              <span className="checkmark"></span>
              Task 3
            </label>

            <label className={s.checkbox}>
              <input type="checkbox"/>
              <span className="checkmark"></span>
              Task 4
            </label>
          </div>
          <button></button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default goals;
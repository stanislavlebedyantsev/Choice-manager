import s from "../Goals.module.css";

const ProgressBar = (props) => {
  return (
    <div className={s.progressBarContainer}>
      <div className={s.progressBarBack} >
        <div>
          <span style={{width: `${props.progress}%`}} className={s.progressBar}/>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;
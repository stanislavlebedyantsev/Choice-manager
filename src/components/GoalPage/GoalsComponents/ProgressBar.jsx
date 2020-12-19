import s from "../Goals.module.css";

const ProgressBar = ({progress}) => {
  return (
    <div className={s.progressBarContainer}>
      <div className={s.progressBarBack} >
        <div>
          <span style={{width: `${progress}%`}} className={s.progressBar}/>

        </div>
      </div>
      <span className={s.progress}>
        {progress}%
      </span>
    </div>
  )
}

export default ProgressBar;
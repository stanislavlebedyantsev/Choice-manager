import s from './DevelopersDescription.module.css'

function DeveloperDescription(props) {
  return (
    <div className={s.content}>
      <div className={s.developerImg}>
        <img src="http://via.placeholder.com/250x160" alt=""/>
      </div>
      <div className={s.developerDescription}>
        <p>
          *Name Surname*
          <br/>*Back-end/Front-end/Database*
          <br/>*Description*
        </p>
      </div>
    </div>
  )
}

export default DeveloperDescription;
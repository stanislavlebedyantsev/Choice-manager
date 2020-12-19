import React from 'react';
import {connect} from "react-redux";
import s from "./Goals.module.css";
import Header from "../common/Header/Header";
import GoalComponent from "./GoalsComponents/GoalComponent";
import {
  addSubtask,
  deleteTaskThunkCreator, getTaskThunkCreator,
  postTaskThunkCreator, putTaskThunkCreator,
  subtaskIsDoneChange
} from "../../redux/goalsReducer";
import {withAuthAndTestingRedirectComponent} from "../../hoc/withAuthAndTestingRedirect";
import {compose} from "redux";
import {getGoalIsFetching, getGoalsData} from "../../redux/selectors";
import Footer from "../common/Footer/Footer";
import Preloader from "../common/Preloader/Preloader";


class GoalApiComponent extends React.Component {
  componentDidMount() {
    this.props.getTaskThunkCreator();
  }

  putEditedTaskBtn(objForPut) {
    this.props.putTaskThunkCreator(objForPut);
  }

  postEditedTaskBtn() {
    this.props.postTaskThunkCreator({
      name: '',
      explanation: '',
      done: false,
      tasks: []
    });
  }

  subtaskStateChange(tasksId) {
    this.props.subtaskIsDoneChange(tasksId);
  }

  addStateSubtask(id) {
    this.props.addSubtask(id);
  }

  deleteTask(id) {
    this.props.deleteTaskThunkCreator(id);
  }

  completeTask(task) {
    this.props.completeTask(task);
  }

  render() {
    if(this.props.isFetching){
      return <Preloader/>
    }
    return (
      <div className={s.background}>
        <Header/>
        <div className={s.container}>
          <div className={s.yourGoals}>Your personal goals</div>
          <div className={s.grid}>
            {
              this.props.goalsStateData.goals.length !== 0 ?
                this.props.goalsStateData.goals.map((el, i) => (
                  <GoalComponent state={el}
                                 key={i}
                                 putEditedTask={this.putEditedTaskBtn.bind(this)}
                                 subtaskIsDoneChange={this.subtaskStateChange.bind(this)}
                                 addSubtask={this.addStateSubtask.bind(this)}
                                 deleteTask={this.deleteTask.bind(this)}
                                 completeTask={this.completeTask.bind(this)}
                  />
                )) : null
            }
            <button className={s.addGoalBtn} onClick={this.postEditedTaskBtn.bind(this)}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  goalsStateData: getGoalsData(state),
  isFetching: getGoalIsFetching(state)
});


export default compose(connect(mapStateToProps, {
    addSubtask,
    deleteTaskThunkCreator,
    subtaskIsDoneChange,
    getTaskThunkCreator,
    postTaskThunkCreator,
    putTaskThunkCreator
  }),
  withAuthAndTestingRedirectComponent
)(GoalApiComponent);

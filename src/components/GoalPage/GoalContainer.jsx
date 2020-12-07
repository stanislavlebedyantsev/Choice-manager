import React from 'react';
import {connect} from "react-redux";
import s from "./Goals.module.css";
import Header from "../common/Header/Header";
import GoalComponent from "./GoalsComponents/GoalComponent";
import {
  addSubtask, addTask, completeTask,
  deleteTaskThunkCreator, editGoals, editProgress,
  editSubtask, getTaskThunkCreator,
  postTaskThunkCreator, putTaskThunkCreator,
  subtaskIsDoneChange, toggleEdit
} from "../../redux/goalsReducer";
import {Redirect} from "react-router-dom";
import FooterContainer from "../common/Footer/FooterContainer";


class GoalApiComponent extends React.Component {
  componentDidMount() {
    this.props.getTaskThunkCreator();
  }


  toggleEditBtn(id) {
    this.props.toggleEdit(id);
  }

  editGoal(data) {
    this.props.editGoals(data);
  }

  editSubtask(data) {
    this.props.editSubtask(data);
  }

  putEditedTaskBtn(obj, taskIsDone = false) {
    if (taskIsDone){
      this.props.completeTask(obj.id);
    }
    this.props.putTaskThunkCreator(obj);
  }

  postEditedTaskBtn(obj) {
    this.props.postTaskThunkCreator(obj);
  }

  subtaskStateChange(obj) {
    this.props.subtaskIsDoneChange(obj);
  }

  addStateSubtask(obj) {
    this.props.addSubtask(obj);
  }

  deleteTask(obj) {
    this.props.deleteTaskThunkCreator(obj);
  }

  addNewTask() {
    this.props.addTask();
  }

  completeTask(task) {
    this.props.completeTask(task);
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>;
    } else if (this.props.isAuth && !this.props.isTested) return <Redirect to={'/testing'}/>;
    return (
      <div className={s.background}>
        <Header/>
        <div className={s.container}>
          <div className={s.yourGoals}>Your Goals</div>
          <div className={s.grid}>
            {
              this.props.goalsStateData.goals.length !== 0 ?
                this.props.goalsStateData.goals.map(el => (
                  <GoalComponent state={el}
                                 isEdit={this.props.isEdit}
                                 toogleEditBtn={this.toggleEditBtn.bind(this)}
                                 editGoal={this.editGoal.bind(this)}
                                 putEditedTask={this.putEditedTaskBtn.bind(this)}
                                 postEditedTask={this.postEditedTaskBtn.bind(this)}
                                 subtaskIsDoneChange={this.subtaskStateChange.bind(this)}
                                 editSubtask={this.editSubtask.bind(this)}
                                 addSubtask={this.addStateSubtask.bind(this)}
                                 deleteTask={this.deleteTask.bind(this)}
                                 completeTask={this.completeTask.bind(this)}
                  />
                )) : null
            }
            <button className={s.addGoalBtn} onClick={this.addNewTask.bind(this)}/>
          </div>
        </div>
        <FooterContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  goalsStateData: state.goalsPage,
  isFetching: state.goalsPage.isFetching,
  isAuth: state.auth.isAuth,
  isTested: state.auth.isTested,
});


export default connect(mapStateToProps, {
  toggleEdit,
  editGoals,
  editSubtask,
  addSubtask,
  deleteTaskThunkCreator,
  addTask,
  subtaskIsDoneChange,
  getTaskThunkCreator,
  postTaskThunkCreator,
  putTaskThunkCreator,
  completeTask
})(GoalApiComponent);
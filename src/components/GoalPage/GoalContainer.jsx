import React from 'react';
import {connect} from "react-redux";
import s from "./Goals.module.css";
import Header from "../common/Header/Header";
import GoalComponent from "./GoalsComponents/GoalComponent";
import {
  addSubtask, addTask,
  deleteTaskThunkCreator, editGoals,
  editSubtask, getTaskThunkCreator,
  postTaskThunkCreator, putTaskThunkCreator,
  subtaskIsDoneChange, toggleEdit
} from "../../redux/goalsReducer";
import FooterContainer from "../common/Footer/FooterContainer";
import {withAuthAndTestingRedirectComponent} from "../../hoc/withAuthAndTestingRedirect";



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

  putEditedTaskBtn(objForPut) {
    this.props.putTaskThunkCreator(objForPut);
  }

  postEditedTaskBtn(newTask) {
    this.props.postTaskThunkCreator(newTask);
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

  addNewTask() {
    this.props.addTask();
  }

  completeTask(task) {
    this.props.completeTask(task);
  }

  render() {
    return (
      <div className={s.background}>
        <Header/>
        <div className={s.container}>
          <div className={s.yourGoals}>Your personal goals</div>
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

let AuthRedirectComponent = withAuthAndTestingRedirectComponent(GoalApiComponent);

const mapStateToProps = (state) => ({
  goalsStateData: state.goalsPage,
  isFetching: state.goalsPage.isFetching
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
  putTaskThunkCreator
})(AuthRedirectComponent);

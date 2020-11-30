import React from 'react';
import {connect} from "react-redux";
import s from "./Goals.module.css";
import Header from "../common/Header/Header";
import GoalComponent from "./GoalsComponents/GoalComponent";
import Footer from "../common/Footer/Footer";
import {
  addSubtask, addTask, deleteTask, editGoals, editSubtask, putEditedTask,
  subtaskIsDoneChange,
  toggleEdit
} from "../../redux/goalsReducer";


class GoalApiComponent extends React.Component {
  toggleEditBtn(id) {
    this.props.toggleEdit(id);
  }


  editGoal(data) {
    this.props.editGoals(data);
  }

  editSubtask(data) {
    this.props.editSubtask(data);
  }

  putEditedTaskBtn(obj) {
    this.props.putEditedTask(obj);
  }

  subtaskStateChange(obj) {
    this.props.subtaskIsDoneChange(obj);
  }

  addStateSubtask(obj) {
    this.props.addSubtask(obj);
  }

  deleteTask(obj) {
    this.props.deleteTask(obj);
  }

  addNewTask() {
    this.props.addTask();
  }

  render() {
    return (
      <div className={s.background}>
        <Header/>
        <div className={s.container}>
          <div className={s.yourGoals}>Your Goals</div>
          <div className={s.grid}>
            {
              this.props.goalsStateData.goals.map(el => (
                <GoalComponent state={el}
                               isEdit={this.props.isEdit}
                               toogleEditBtn={this.toggleEditBtn.bind(this)}
                               editGoal={this.editGoal.bind(this)}
                               putEditedTask={this.putEditedTaskBtn.bind(this)}
                               subtaskIsDoneChange={this.subtaskStateChange.bind(this)}
                               editSubtask={this.editSubtask.bind(this)}
                               addSubtask={this.addStateSubtask.bind(this)}
                               deleteTask={this.deleteTask.bind(this)}
                />
              ))
            }
            <button className={s.addGoalBtn} onClick={this.addNewTask.bind(this)}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  goalsStateData: state.goalsPage,
  isFetching: state.goalsPage.isFetching,
  isEdit: state.goalsPage.isEdit
});



export default connect(mapStateToProps, {
  toggleEdit,
  editGoals,
  editSubtask,
  addSubtask,
  putEditedTask,
  deleteTask,
  addTask,
  subtaskIsDoneChange
})(GoalApiComponent);
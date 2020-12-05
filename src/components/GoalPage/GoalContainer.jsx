import React from 'react';
import {connect} from "react-redux";
import s from "./Goals.module.css";
import Header from "../common/Header/Header";
import GoalComponent from "./GoalsComponents/GoalComponent";
import Footer from "../common/Footer/Footer";
import {
  addSubtask, addTask, deleteTask, editGoals, editSubtask, getTask, postEditedTask, putEditedTask,
  subtaskIsDoneChange,
  toggleEdit
} from "../../redux/goalsReducer";
import * as axios from 'axios';


class GoalApiComponent extends React.Component {
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8080/goals",
        {
          headers: {
            Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
          }
        }
      )
      .then(responce => {
        this.props.getTask(responce.data);
      });
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

  putEditedTaskBtn(obj) {
    this.props.putEditedTask(obj);
  }
  postEditedTaskBtn(obj) {
    this.props.postEditedTask(obj);
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
                  />
                )) : null
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
  isFetching: state.goalsPage.isFetching
});


export default connect(mapStateToProps, {
  toggleEdit,
  editGoals,
  editSubtask,
  addSubtask,
  putEditedTask,
  deleteTask,
  addTask,
  subtaskIsDoneChange,
  getTask,
  postEditedTask
})(GoalApiComponent);
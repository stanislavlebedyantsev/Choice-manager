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
import {goalsAPI} from "../../api/goalsApi";


class GoalApiComponent extends React.Component {
  componentDidMount() {
    goalsAPI.getGoals().then(response => {
      this.props.getTask(response);
    })
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
    goalsAPI.putGoals(obj);
  }
  postEditedTaskBtn(obj) {
    goalsAPI.postGoals(obj)
      .then(response => {
        /////if andrey fix id in db use variant in comment
        /*copyState.goals[action.data - 1].isEdit = false;*/
        //////unless if andrey d fix id in db use this
        console.log(response);
        obj.id = response
        this.props.postEditedTask(obj);
      })
      .catch(r => {
        console.log(r);
      });
  }

  subtaskStateChange(obj) {
    this.props.subtaskIsDoneChange(obj);
  }

  addStateSubtask(obj) {
    this.props.addSubtask(obj);
  }

  deleteTask(obj) {
    goalsAPI.deleteGoals(obj)
      .then(response => {
        this.props.deleteTask(obj);
      });
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
  deleteTask,
  addTask,
  subtaskIsDoneChange,
  getTask,
  postEditedTask
})(GoalApiComponent);
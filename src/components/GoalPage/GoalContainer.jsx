import React from 'react';
import {connect} from "react-redux";
import s from "./Goals.module.css";
import Header from "../Header/Header";
import GoalComponent from "./GoalsComponents/GoalComponent";
import Footer from "../Footer/Footer";
import {toggleEdit, updateTask} from "../../redux/goalsReducer";


class GoalApiComponent extends React.Component {
  toggleEditBtn(){
    this.props.toggleEdit()
  }
  EditGoal(data){
    this.props.EditGoals(data)
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
                               EditGoal={this.EditGoal.bind(this)}
                />
              ))
            }

            <button className={s.addGoalBtn}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goalsStateData: state.goalsPage,
    isFetching: state.goalsPage.isFetching,
    isEdit: state.goalsPage.isEdit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEdit: () => {
      dispatch(toggleEdit())
    },
    EditGoals: (obj) => {
      dispatch(updateTask(obj))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalApiComponent);
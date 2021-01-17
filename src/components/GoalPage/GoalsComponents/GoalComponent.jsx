import React, {useEffect, useState} from 'react';
import s from "../Goals.module.css";
import SubtaskComponent from "./SubtaskComponent";
import GoalTopButtons from "./GoalTopButtons";
import GoalFooterButtons from "./GoalFooterButtons";
import ProgressBar from "./ProgressBar";

const GoalComponent = React.memo(({state, putEditedTask, addSubtask, deleteTask, subtaskIsDoneChange}) => {
  let [editMode, setEditMode] = useState(false);
  let [goalData, setGoalData] = useState({...state});
  useEffect(() => {
    setGoalData({...state});
  }, [state]);
  const handleChange = (event) => {
    let obj = {
      ...goalData
    };
    obj = {
      ...obj,
      [event.target.name]: event.target.value
    };
    setGoalData(obj);
  };
  const handleEditSubtask = (obj) => {
    let oldObj = {
      ...goalData
    };
    goalData.tasks.filter((el, i) => {
      if (el.id === obj.id) {
        oldObj.tasks[i] = {...obj};
      }
    });
    setGoalData(oldObj);
  };
  const handleEdit = () => {
    setEditMode(true);
  };
  const handleSave = () => {
    setEditMode(false);
    putEditedTask(goalData);
  };
  const handleAddSubTask = () => {
    addSubtask(goalData.id);
  };
  const handleDelete = () => {
    deleteTask(goalData.id);
  };
  const handleComplete = () => {
    const objForPut = {...goalData, done: true};
    objForPut.tasks.forEach(el => {
      el.done = true;
    });
    putEditedTask(objForPut, true);
  };

  const handleCheck = (tasksId) => {
    subtaskIsDoneChange(tasksId);
    putEditedTask(goalData);
  };

  return (
    <div className={s.goalContainer}>
      <div>
        <GoalTopButtons handleEdit={handleEdit}
                        handleSave={handleSave}
                        handleDelete={handleDelete}
                        done={goalData.done}
                        isEdit={editMode}/>
        <div className={s.goalNameH6}>
          {
            editMode ?
              (
                <div>
                  <p><input autoFocus={true} className={s.editInput} name={"name"}
                            value={goalData.name}
                            placeholder={'Type title of your goal'}
                            onChange={handleChange}/>
                  </p>
                  <p><input className={s.editInput}
                            name={"explanation"} value={goalData.explanation}
                            placeholder={'Type your goal'}
                            onChange={handleChange}/>
                  </p>
                </div>
              )
              :
              (
                <div>
                  <p className={s.taskName}>{state.name}</p>
                  <p className={`{/*${s.descriptionP}*/} ${s.discrPaddings}`}>
                    {state.explanation}
                  </p>
                </div>
              )
          }
        </div>
        <ProgressBar progress={goalData.progress}/>
        {goalData.tasks.map(el => (
          <SubtaskComponent subtaskState={el}
                            taskId={goalData.id}
                            subtaskIsDoneChange={handleCheck}
                            editSubtask={handleEditSubtask}
                            isEdit={editMode}
                            isTaskDone={goalData.done}
                            key={el.id}
          />
        ))}
        <GoalFooterButtons handleAddSubTask={handleAddSubTask}
                           handleComplete={handleComplete}
                           done={goalData.done}
                           isEdit={editMode}/>

      </div>
    </div>
  );
});

export default GoalComponent;


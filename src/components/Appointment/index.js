import React, { Fragment } from 'react';
import 'components/Appointment/styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  console.log('Appointment props received = ', props);
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  function save(name, interviewer) {
    console.log('SAvve function = ', name, interviewer);
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW));
  }
  function deleteInterview() {
    
    transition(DELETE);
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
  }
  function updateInterview() {
    transition(EDIT);
  }
  
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => {
        transition(CREATE);
        console.log("Clicked onAdd");
      }} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={updateInterview}
        />
      )}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back()} onSave={save} />}
      {mode === SAVING && <Status message={"Saving.."}/>}
      {mode === CONFIRM && <Confirm message={"Are you sure you want to delete this interview"
} onCancel={() => back()} onConfirm={deleteInterview}/>}
      {mode === DELETE && <Status message={"Deleting.."}/>}
      {mode === EDIT && 
        <Form 
          student={props.interview.student}   
          interviewer={props.interview.interviewer.id} 
          interviewers={props.interviewers} 
          onCancel={() => back()} 
          onSave={save}/>}
      {/* {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer.name}/> : <Empty /> }  */}
      {/* {props.time && <h2>Appointment at {props.time}</h2>}
      {!props.time && <h2>No Appointments</h2>} */}
    </article>
  );
};
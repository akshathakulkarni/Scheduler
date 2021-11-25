import React, { Fragment } from 'react';
import 'components/Appointment/styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = 'CREATE';
export default function Appointment(props) {
  console.log('index prop = ', props.interview);
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
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
        />
      )}
      {mode === CREATE && <Form interviewers={[]} onCancel={() => back()}/>}
      {/* {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer.name}/> : <Empty /> }  */}
      {/* {props.time && <h2>Appointment at {props.time}</h2>}
      {!props.time && <h2>No Appointments</h2>} */}
    </article>
  );
};
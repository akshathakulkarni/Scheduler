import React from 'react';
import 'components/Appointment/styles.scss';

export default function Appointment(props) {
  return (
    <article className="appointment">
      {props.time && <h2>Appointment at {props.time}</h2>}
      {!props.time && <h2>No Appointments</h2>}
    </article>
  );
};
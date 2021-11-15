import React from 'react';
import classNames from "classnames";
import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {
  console.log('props interviewer = ', props);
  const interviewerListClass = classNames("InterviewerClass", {
    "interviewers__item" : props,
    "interviewers__item--selected" : props.selected
  });
  return (
    <li className={interviewerListClass} onClick={() => {props.setInterviewer(props.id)}}>
      <img
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && <h3>{props.name}</h3>}
    </li>
  );
}
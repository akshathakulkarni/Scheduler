import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayListClass = classNames("dayClass", {
    "day-list__item": props,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  return (
    <li className={dayListClass} onClick = {() => {props.setDay(props.name)}}>
      <h2 >{props.name}</h2> 
      <h3 >{props.spots} remaining</h3>
    </li>
  );
}
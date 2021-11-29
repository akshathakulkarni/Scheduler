import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayListClass = classNames("dayClass", {
    "day-list__item": props,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });
  const formatSpots = function(props) {
    let spotsStatus = '';
    if (props.spots === 0) {
      spotsStatus = 'no spots remaining';
    }
    if (props.spots === 1) {
      spotsStatus = '1 spot remaining';
    }
    if (props.spots === 2){
      spotsStatus = '2 spots remaining';
    }
    if (props.spots === 3){
      spotsStatus = '3 spots remaining';
    }
    if (props.spots === 4){
      spotsStatus = '4 spots remaining';
    }
    if (props.spots === 5){
      spotsStatus = '5 spots remaining';
    }
    return spotsStatus;
  }
  return (
    <li className={dayListClass} onClick = {() => {props.setDay(props.name)}} selected={props.selected}>
      <h2>{props.name}</h2> 
      <h3>{formatSpots(props)}</h3>
    </li>
  );
}
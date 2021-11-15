import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  console.log('props data = ', props.days);
  const dayListData = props.days.map(day => { 
    return (
      <DayListItem 
        key={day.key}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={() => props.onChange(props.name)}/>)
  });
  console.log('data = ', dayListData);
  return (
  <ul>
   {dayListData}
  </ul>
  );
}

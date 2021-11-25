export function getAppointmentsForDay(state, day) {
  let results = [];
  for (let eachDay of state.days) {
    if(eachDay.name === day) {
        eachDay.appointments.filter((item) => {
        results.push(state.appointments.data[item]);
      })
    }
  }
  return results;
}

export function getInterviewersForDay(state, day) {
  let results = [];
  for (let eachDay of state.days) {
    if(eachDay.name === day) {
        eachDay.interviewers.filter((item) => {
        results.push(state.interviewers[item]);
      })
    }
  }
  return results;
}

export function getInterview(state, interview) {
  const interviewObj = {};
  if (interview === null) {
    return null;
  }
  for (let eachInterviewer in state.interviewers) {
    if (state.interviewers[eachInterviewer].id === interview.interviewer) {
      interviewObj.student = interview.student;
      interviewObj.interviewer = state.interviewers[eachInterviewer];
    }
  }
  return interviewObj;
}


export function getAppointmentsForDay(state, day) {
  let results = [];
  for (let eachDay of state.days) {
    if(eachDay.name === day) {
        eachDay.appointments.filter((item) => {
        results.push(state.appointments[item]);
      })
    }
  }
  return results;
}
import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  }, []);

  const setDay = day => setState({ ...state, day });

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const updatedDays = updateSpots(id, interview );
    return axios
      .put(`/api/appointments/${id}`, {
        id: id,
        interview: interview
      })
      .then(() => {
        setState(prev => ({
          ...state,
          appointments,
          days: updatedDays
        }));
      })
    }

    const cancelInterview = (id) => {
      const updatedDays = updateSpots(id, null );
      const appointment = {
        ...state.appointments[id],
        interview: null
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState({...state, appointments, days: updatedDays})
      })
    }

    const updateSpots = (id, interview) => {
      let spotsCounter = 0;
      let dayId = '';
      state.days.forEach((day) => {
        if (day.appointments.includes(id)) {
          dayId = day.id;
          day.appointments.forEach((item) => {
            if ((state.appointments[item].interview === null) && (item !== id)) {
              spotsCounter += 1;
            }
          })
        }
        
      })
      const day = { ...state.days[dayId - 1],
        spots: interview ? spotsCounter : (spotsCounter + 1)
      }
      const days = [ ...state.days ];
      days[dayId - 1] = day;

      return days;
    } 
  
    return { state, setDay, bookInterview, cancelInterview };
}




  
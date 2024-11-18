import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
    id: string;
    patient_name: string;
    doctor_name: string;
    date: string;
    time: string;
}

interface AppointmentsState {
  appointments: Appointment[];
}

const initialState: AppointmentsState = {
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload); 
      console.log("log pour un rdv ajouté");

    },
    removeAppointment: (state, action: PayloadAction<string>) => {

      // Récupérer le rendez-vous avant de le supprimer
      const appointmentToRemove = state.appointments.find(
        (appointment) => appointment.id === action.payload
      );
      
      if (appointmentToRemove) {
        state.appointments = state.appointments.filter(
          (appointment) => appointment.id !== action.payload
        );
        console.log("log pour un rdv supprimé");
      }
    },
  },
});

export const { addAppointment, removeAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;

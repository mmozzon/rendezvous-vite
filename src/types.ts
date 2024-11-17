// types.ts
export interface Appointment {
    id: string;
    patient_name: string;
    doctor_name: string;
    date: string;
    time: string;
  }

  export interface Log {
    id: string;
    message: string;
    timestamp: string;
  }
  
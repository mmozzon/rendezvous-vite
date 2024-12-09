import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface pour un événement
interface Event {
  title: string;
  doctor: string;
  start: Date;
  end: Date;
}

// État initial
interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [],
};

// Slice
const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      {state.events.push(action.payload)};
    },
    deleteEvent: (state, action: PayloadAction<Event>) => {
      state.events = state.events.filter((event) => {
        const eventStart = new Date(event.start); // Conversion forcée en Date
        const eventEnd = new Date(event.end); // Conversion forcée en Date
        const payloadStart = new Date(action.payload.start); // Conversion forcée en Date
        const payloadEnd = new Date(action.payload.end); // Conversion forcée en Date

        //console.log("Inspecting event:", event.start);
        //console.log("Type of event.start:", typeof event.start);
        //console.log("Action payload:", action.payload.start);
        return (
          eventEnd.getTime() !== payloadEnd.getTime() ||
          eventStart.getTime() !== payloadStart.getTime()
        );
      }
      );
    },
  },
});

// Actions
export const { addEvent, deleteEvent } = eventsSlice.actions;

// Réducteur
export default eventsSlice.reducer;

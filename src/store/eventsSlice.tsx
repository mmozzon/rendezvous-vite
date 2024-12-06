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
      state.events.push(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<Event>) => {
      state.events = state.events.filter(
        (event) =>
          event.start.getTime() !== action.payload.start.getTime() ||
          event.end.getTime() !== action.payload.end.getTime()
      );
    },
  },
});

// Actions
export const { addEvent, deleteEvent } = eventsSlice.actions;

// Réducteur
export default eventsSlice.reducer;

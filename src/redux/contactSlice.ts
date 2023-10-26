import { createSlice} from '@reduxjs/toolkit';
import  { sendContactMessage }  from './contactAction';

interface ContactState {
  isSending: boolean;
}

const initialState: ContactState = {
  isSending: false
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContactMessage.pending, (state) => {
        state.isSending = true;
      })
      .addCase(sendContactMessage.fulfilled, (state) => {
        state.isSending = false; 
      })
      .addCase(sendContactMessage.rejected, (state, action) => { 
        state.isSending = false;
      });
  },
});

export default contactSlice.reducer;


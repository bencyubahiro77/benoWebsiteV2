import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 export const sendContactMessage = createAsyncThunk(
  'contact/sendMessage',
  async (formData: FormData) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/contact`, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to send message.'); 
    }
  }
);

